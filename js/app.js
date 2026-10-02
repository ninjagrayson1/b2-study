/**
 * B2 Diskussion Study App - Client Application Logic
 */

// Global State
const state = {
    // Current user profile
    activeProfile: null,
    userRole: "ADMIN", // "ADMIN" or "MEMBER"
    roomCode: CONFIG.DEFAULT_ROOM,

    // Live session state
    currentTopic: null,
    roleA: "Grayson",
    roleB: "—",
    timerSeconds: CONFIG.DEFAULT_TIMER_SECONDS,
    isTimerRunning: false,
    timerInterval: null,

    // Data lists
    workedTopicIds: new Set(),
    history: [],
    profiles: [],

    // Avatar state
    selectedAvatar: "🎓",

    // Exam section filter: "2" (Teil 2) or "3" (Teil 3)
    selectedTeil: "2",

    // Cloud connection
    isOnline: false,
    syncClient: null,
    speechUtterance: null,
    theme: "dark",

    // Group members (admin sees the list, viewers only know their own name)
    myName: "",
    members: [],
    memberHighWater: null
};

// Helper to render Avatar (Image or Emoji)
function renderAvatarHtml(avatarStr, size = 40) {
    if (!avatarStr) avatarStr = "🎓";
    if (avatarStr.startsWith("data:image") || avatarStr.startsWith("http")) {
        return `<img src="${avatarStr}" alt="Avatar" class="avatar-badge-img" style="width:${size}px; height:${size}px;">`;
    } else {
        return `<span class="avatar-badge-emoji" style="width:${size}px; height:${size}px; font-size:${Math.round(size * 0.55)}px;">${avatarStr}</span>`;
    }
}

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    initSyncClient();
    loadStoredData();
    setupTheme();
    setupNavigation();
    setupEventListeners();
    requestNotificationPermission();

    // Start login gate (starts realtime polling once a valid code is entered)
    initAuth();

    // Initial render
    renderAll();
});

// Setup Sync Client
function initSyncClient() {
    state.syncClient = new RealtimeSyncClient();
}

function isAdmin() {
    return state.userRole === "ADMIN";
}

// ===== Access code login =====
async function initAuth() {
    const input = document.getElementById("loginCodeInput");
    if (input) {
        input.addEventListener("keydown", e => { if (e.key === "Enter") submitLogin(); });
    }
    const nameInput = document.getElementById("nameInput");
    if (nameInput) {
        nameInput.addEventListener("keydown", e => { if (e.key === "Enter") submitName(); });
    }
    if (state.syncClient.token) {
        const res = await state.syncClient.getState();
        if (res.ok) {
            state.myName = res.me?.name || localStorage.getItem("b2_my_name") || "";
            enterApp(res.role);
            return;
        }
        if (res.error === "nojoin") {
            // Check if student already has a remembered name on this phone/browser
            const savedName = localStorage.getItem("b2_my_name");
            if (savedName && savedName.trim().length >= 2) {
                const joinRes = await state.syncClient.join(savedName.trim());
                if (joinRes.ok) {
                    state.myName = joinRes.name;
                    enterApp("student");
                    return;
                }
            }
            showName();
            return;
        }
        if (res.error === "banned") {
            state.syncClient.clearToken();
            showLogin("You are banned from this room.");
            return;
        }
        if (res.error === "auth") state.syncClient.clearToken();
    }
    showLogin();
}

function showLogin(message = "") {
    stopSyncLoop();
    document.body.classList.add("locked");
    document.body.classList.remove("naming");
    const err = document.getElementById("loginError");
    if (err) err.textContent = message;
    const input = document.getElementById("loginCodeInput");
    if (input) { input.value = ""; setTimeout(() => input.focus(), 50); }
}

async function submitLogin() {
    const input = document.getElementById("loginCodeInput");
    const btn = document.getElementById("loginBtn");
    const err = document.getElementById("loginError");
    const code = (input?.value || "").trim();
    if (!code) { if (err) err.textContent = "Please enter the access code."; return; }
    if (!state.syncClient.isConfigured()) { if (err) err.textContent = "Server is not configured."; return; }

    if (btn) { btn.disabled = true; btn.textContent = "Checking..."; }
    const res = await state.syncClient.login(code);
    if (btn) { btn.disabled = false; btn.textContent = "Enter"; }

    if (res.ok) {
        if (res.role === "admin") {
            enterApp(res.role);
        } else {
            // Auto-join if user has an existing saved name on their device!
            const savedName = localStorage.getItem("b2_my_name");
            if (savedName && savedName.trim().length >= 2) {
                const joinRes = await state.syncClient.join(savedName.trim());
                if (joinRes.ok) {
                    state.myName = joinRes.name;
                    enterApp("student");
                    return;
                }
            }
            showName();
        }
    } else if (res.error === "banned") {
        if (err) err.textContent = "You are banned from this room.";
    } else if (res.error === "locked") {
        if (err) err.textContent = "Too many wrong tries. Wait a few minutes.";
    } else if (res.error === "network") {
        if (err) err.textContent = "Could not reach the server. Check your internet.";
    } else {
        if (err) err.textContent = "Wrong code. Try again.";
        if (input) { input.value = ""; input.focus(); }
    }
}

// ===== Viewer name step =====
function showName(message = "") {
    stopSyncLoop();
    document.body.classList.add("locked", "naming");
    const err = document.getElementById("nameError");
    if (err) err.textContent = message;
    const input = document.getElementById("nameInput");
    if (input) {
        input.value = state.myName || localStorage.getItem("b2_my_name") || "";
        setTimeout(() => input.focus(), 50);
    }
}

async function submitName() {
    const input = document.getElementById("nameInput");
    const btn = document.getElementById("nameBtn");
    const err = document.getElementById("nameError");
    const name = (input?.value || "").trim();
    if (name.length < 2) { if (err) err.textContent = "Please enter your name (at least 2 letters)."; return; }

    if (btn) { btn.disabled = true; btn.textContent = "Joining..."; }
    const res = await state.syncClient.join(name);
    if (btn) { btn.disabled = false; btn.textContent = "Join"; }

    if (res.ok) {
        state.myName = res.name;
        localStorage.setItem("b2_my_name", res.name);
        enterApp("student");
    } else if (res.error === "banned") {
        state.syncClient.clearToken();
        showLogin("You are banned from this room.");
    } else if (res.error === "auth") {
        handleAuthLost();
    } else if (res.error === "name") {
        if (err) err.textContent = "Please enter your name (at least 2 letters).";
    } else {
        if (err) err.textContent = "Could not reach the server. Check your internet.";
    }
}

function enterApp(serverRole) {
    state.userRole = serverRole === "admin" ? "ADMIN" : "MEMBER";
    state.isOnline = true;
    state.members = [];
    state.memberHighWater = null;
    document.body.classList.remove("locked", "naming");
    document.body.classList.toggle("is-student", state.userRole !== "ADMIN");
    const badge = document.getElementById("roleBadge");
    if (badge) badge.textContent = state.userRole === "ADMIN" ? "👑 ADMIN" : "👀 VIEWER";
    updateOnlineBadge();
    renderAll();
    renderMembers();
    startSyncLoop();
}

function logout() {
    const wasViewer = !isAdmin();
    if (wasViewer && state.syncClient.token) state.syncClient.leave();
    state.syncClient.clearToken();
    state.userRole = "MEMBER";
    state.myName = "";
    clearInterval(state.timerInterval);
    state.isTimerRunning = false;
    showLogin();
}

function handleAuthLost() {
    state.syncClient.clearToken();
    state.userRole = "MEMBER";
    showLogin("Session ended. Enter the code again.");
}

// Load Persistent Data from LocalStorage
function loadStoredData() {
    state.theme = localStorage.getItem("b2_theme") || "dark";
    state.roomCode = localStorage.getItem("b2_room_code") || CONFIG.DEFAULT_ROOM;
    state.userRole = "MEMBER"; // real role is set only by a valid access code
    state.myName = localStorage.getItem("b2_my_name") || "";
    state.selectedTeil = localStorage.getItem("b2_selected_teil") || "2";

    const storedWorked = localStorage.getItem("b2_worked_topics");
    if (storedWorked) {
        state.workedTopicIds = new Set(JSON.parse(storedWorked));
    }

    const storedHistory = localStorage.getItem("b2_history");
    if (storedHistory) {
        state.history = JSON.parse(storedHistory);
    }

    const storedProfiles = localStorage.getItem("b2_profiles");
    if (storedProfiles) {
        state.profiles = JSON.parse(storedProfiles);
    } else {
        // Default profiles
        state.profiles = [
            { id: "p1", name: "Grayson", avatar: "👑", role: "ADMIN", texts: 0, starts: 0, bio: "B2 Study Group Admin" },
        ];
        saveProfiles();
    }

    // Set Active Profile
    const activeId = localStorage.getItem("b2_active_profile_id");
    state.activeProfile = state.profiles.find(p => p.id === activeId) || state.profiles[0];

    // Default first topic (Teil 2 by default)
    state.currentTopic = EXERCISES_TEIL2[0] || EXERCISES[0];
    state.roleA = state.profiles[0]?.name || "Grayson";
    state.roleB = state.profiles[1]?.name || "—";
}

function saveData() {
    localStorage.setItem("b2_worked_topics", JSON.stringify([...state.workedTopicIds]));
    localStorage.setItem("b2_history", JSON.stringify(state.history));
    localStorage.setItem("b2_room_code", state.roomCode);
    localStorage.setItem("b2_user_role", state.userRole);
    if (state.activeProfile) {
        localStorage.setItem("b2_active_profile_id", state.activeProfile.id);
    }
}

function saveProfiles() {
    localStorage.setItem("b2_profiles", JSON.stringify(state.profiles));
}

// Navigation Tabs
function setupNavigation() {
    const tabs = document.querySelectorAll(".nav-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const targetSection = tab.dataset.tab;
            document.querySelectorAll(".tab-pane").forEach(pane => {
                pane.style.display = pane.id === targetSection ? "block" : "none";
            });
        });
    });
}

// Randomize Round (Admin only)
function randomize() {
    if (!isAdmin()) return;
    if (state.profiles.length < 2) {
        alert("Please have at least 2 profiles to randomize pairs. Add profiles in the Profiles tab.");
        return;
    }

    // Filter topic pool based on active Teil filter
    let basePool = EXERCISES;
    if (state.selectedTeil === "2") {
        basePool = EXERCISES_TEIL2;
    } else if (state.selectedTeil === "3") {
        basePool = EXERCISES_TEIL3;
    }

    let pool = basePool.filter(t => !state.workedTopicIds.has(t.id));
    if (pool.length === 0) {
        const teilLabel = state.selectedTeil === "2" ? "Teil 2" : (state.selectedTeil === "3" ? "Teil 3" : "all");
        if (confirm(`All topics in ${teilLabel} have been worked! Reset worked topics in this section?`)) {
            basePool.forEach(t => state.workedTopicIds.delete(t.id));
            pool = basePool;
        } else {
            return;
        }
    }

    // Avoid recent topics
    const recentIds = state.history.slice(0, 3).map(h => h.topicId);
    const fresh = pool.filter(t => !recentIds.includes(t.id));
    if (fresh.length > 0) pool = fresh;

    const chosenTopic = pool[Math.floor(Math.random() * pool.length)];

    // Pick two random distinct members
    const shuffled = [...state.profiles].sort(() => 0.5 - Math.random());
    const a = shuffled[0].name;
    const b = shuffled[1].name;

    state.currentTopic = chosenTopic;
    state.roleA = a;
    state.roleB = b;
    resetTimer();

    // Record in history preview
    state.history.unshift({
        topicId: chosenTopic.id,
        title: chosenTopic.title,
        teil: chosenTopic.teil,
        roleA: a,
        roleB: b,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    state.history = state.history.slice(0, 40);
    saveData();

    // Broadcast to Supabase
    broadcastSession();
    const roleLabelA = chosenTopic.teil === 2 ? "Speaker" : "Person A (starts)";
    const roleLabelB = chosenTopic.teil === 2 ? "Feedback & Questions" : "Person B (partner)";
    broadcastNotification(`🎲 New Round: ${chosenTopic.title} (Teil ${chosenTopic.teil})`, `${roleLabelA}: ${a} · ${roleLabelB}: ${b}`);

    renderLiveSession();
    renderTopicsList();
    renderHistory();
}

function selectSpecificTopic(id) {
    if (!isAdmin()) return;
    const topic = EXERCISES.find(t => t.id === id);
    if (!topic) return;

    state.currentTopic = topic;
    resetTimer();
    broadcastSession();

    renderLiveSession();
    renderTopicsList();

    // Switch to live tab
    document.querySelector('[data-tab="tab-live"]').click();
}

// Roles Controls
function swapRoles() {
    if (!isAdmin()) return;
    const temp = state.roleA;
    state.roleA = state.roleB;
    state.roleB = temp;
    broadcastSession();
    renderLiveSession();
}

function changePartner() {
    if (!isAdmin()) return;
    const pool = state.profiles.map(p => p.name).filter(n => n !== state.roleA);
    if (pool.length > 0) {
        state.roleB = pool[Math.floor(Math.random() * pool.length)];
        broadcastSession();
        renderLiveSession();
    }
}

function changeBothRoles() {
    if (!isAdmin()) return;
    if (state.profiles.length < 2) return;
    const shuffled = [...state.profiles].sort(() => 0.5 - Math.random());
    state.roleA = shuffled[0].name;
    state.roleB = shuffled[1].name;
    broadcastSession();
    renderLiveSession();
}

// Mark Worked
function markWorked() {
    if (!isAdmin() || !state.currentTopic) return;
    state.workedTopicIds.add(state.currentTopic.id);

    // Update stats for role A and B
    const profA = state.profiles.find(p => p.name === state.roleA);
    const profB = state.profiles.find(p => p.name === state.roleB);
    if (profA) { profA.texts++; profA.starts++; }
    if (profB) { profB.texts++; }

    saveProfiles();
    saveData();

    renderLiveSession();
    renderTopicsList();
    renderScoreboard();
    renderProfiles();
    broadcastSession();
}

function resetWorkedTopics() {
    if (!isAdmin()) return;
    if (!confirm("Are you sure you want to reset all worked topics and scoreboard progress for a new study cycle?")) return;

    state.workedTopicIds.clear();
    state.profiles.forEach(p => {
        p.texts = 0;
        p.starts = 0;
    });

    saveProfiles();
    saveData();
    broadcastSession();
    renderAll();
    showToast("🔄 Study cycle reset: 0 topics worked, scores reset");
}

// Timer Logic
function startTimer() {
    if (!isAdmin() || state.isTimerRunning) return;
    state.isTimerRunning = true;
    renderTimerControls();

    broadcastSession();

    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
        if (state.timerSeconds > 0) {
            state.timerSeconds--;
            updateTimerDisplay();
        } else {
            clearInterval(state.timerInterval);
            state.isTimerRunning = false;
            playChime();
            renderTimerControls();
            broadcastSession();
        }
    }, 1000);
}

function pauseTimer() {
    if (!isAdmin()) return;
    state.isTimerRunning = false;
    clearInterval(state.timerInterval);
    renderTimerControls();
    broadcastSession();
}

function resetTimer() {
    if (!isAdmin()) return;
    state.isTimerRunning = false;
    clearInterval(state.timerInterval);
    state.timerSeconds = CONFIG.DEFAULT_TIMER_SECONDS;
    updateTimerDisplay();
    renderTimerControls();
    broadcastSession();
}

function updateTimerDisplay() {
    const m = Math.floor(state.timerSeconds / 60);
    const s = state.timerSeconds % 60;
    const formatted = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    const el = document.getElementById("timerDigits");
    if (el) {
        el.textContent = formatted;
        el.classList.toggle("urgent", state.timerSeconds <= 30 && state.timerSeconds > 0);
    }
}

function renderTimerControls() {
    const playBtn = document.getElementById("timerPlayBtn");
    if (playBtn) {
        if (state.isTimerRunning) {
            playBtn.innerHTML = "⏸ Pause";
            playBtn.onclick = pauseTimer;
            playBtn.className = "btn btn-danger";
        } else {
            playBtn.innerHTML = "▶ Start";
            playBtn.onclick = startTimer;
            playBtn.className = "btn btn-primary";
        }
    }
}

// Audio & German TTS
function readGermanText() {
    if (!state.currentTopic) return;
    stopSpeech();

    state.speechUtterance = new SpeechSynthesisUtterance(state.currentTopic.text);
    state.speechUtterance.lang = CONFIG.TTS_LANG;
    state.speechUtterance.rate = CONFIG.TTS_RATE;

    const btn = document.getElementById("ttsBtn");
    if (btn) btn.innerHTML = "⏹ Stop Voice";

    state.speechUtterance.onend = () => {
        if (btn) btn.innerHTML = "🔊 Read German";
    };
    state.speechUtterance.onerror = () => {
        if (btn) btn.innerHTML = "🔊 Read German";
    };

    window.speechSynthesis.speak(state.speechUtterance);
}

function stopSpeech() {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    const btn = document.getElementById("ttsBtn");
    if (btn) btn.innerHTML = "🔊 Read German";
}

function speakPhrase(phrase) {
    stopSpeech();
    const utt = new SpeechSynthesisUtterance(phrase);
    utt.lang = CONFIG.TTS_LANG;
    utt.rate = CONFIG.TTS_RATE;
    window.speechSynthesis.speak(utt);
}

function playChime() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
        osc.start();
        osc.stop(ctx.currentTime + 0.8);
    } catch (e) {
        console.warn("AudioContext chime not available", e);
    }
}

// Calling & Notification System
function callGroup(customMsg = "") {
    if (!isAdmin()) return;
    const sender = state.activeProfile ? state.activeProfile.name : "Admin";
    const title = `📢 Study Call from ${sender}!`;
    const message = customMsg || `Time for German B2 Speaking Practice! Join the study room now!`;

    playChime();
    showNotificationBanner(title, message);
    triggerBrowserNotification(title, message);

    broadcastNotification(title, message);
}

function requestNotificationPermission() {
    if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission();
    }
}

function triggerBrowserNotification(title, body) {
    if ("Notification" in window && Notification.permission === "granted") {
        try {
            new Notification(title, {
                body: body,
                icon: "favicon.ico"
            });
        } catch (e) {}
    }
}

function showNotificationBanner(title, message) {
    const banner = document.getElementById("alertBanner");
    if (banner) {
        document.getElementById("bannerTitle").textContent = title;
        document.getElementById("bannerMessage").textContent = message;
        banner.style.display = "flex";
    }
}

// Real-Time Cloud Synchronization
async function broadcastSession() {
    if (!state.syncClient || !isAdmin()) return;
    const session = {
        adminName: state.activeProfile?.name || "Admin",
        topicId: state.currentTopic?.id || "",
        topicTitle: state.currentTopic?.title || "",
        topicText: state.currentTopic?.text || "",
        topicAr: state.currentTopic?.ar || "",
        roleA: state.roleA,
        roleB: state.roleB,
        timerSeconds: state.timerSeconds,
        isTimerRunning: state.isTimerRunning,
        worked: !!(state.currentTopic && state.workedTopicIds.has(state.currentTopic.id))
    };

    const res = await state.syncClient.setSession(session);
    if (res && res.error === "auth") handleAuthLost();
}

async function broadcastNotification(title, message) {
    if (!state.syncClient || !isAdmin()) return;
    const sender = state.activeProfile?.name || "Admin";
    const res = await state.syncClient.notify(sender, title, message);
    if (res && res.error === "auth") handleAuthLost();
}

let syncTimer = null;
let studentTicker = null;
let pollBusy = false;

function stopSyncLoop() {
    clearInterval(syncTimer);
    clearInterval(studentTicker);
    syncTimer = null;
    studentTicker = null;
}

function startSyncLoop() {
    stopSyncLoop();
    if (!state.syncClient || !state.syncClient.isConfigured()) return;

    state.syncClient.lastNotificationId = 0;
    pollOnce();
    syncTimer = setInterval(pollOnce, CONFIG.POLL_INTERVAL_MS);

    // Viewers: count the timer down smoothly between polls
    studentTicker = setInterval(() => {
        if (isAdmin() || !state.isTimerRunning) return;
        if (state.timerSeconds > 0) {
            state.timerSeconds--;
            updateTimerDisplay();
        } else {
            state.isTimerRunning = false;
            playChime();
        }
    }, 1000);
}

async function pollOnce() {
    if (pollBusy) return;
    pollBusy = true;
    try {
        const res = await state.syncClient.getState();
        if (document.body.classList.contains("locked")) return; // logged out while waiting

        if (!res.ok) {
            if (res.error === "banned") {
                state.syncClient.clearToken();
                showLogin("You were banned from this room.");
            } else if (res.error === "nojoin") {
                showName();
            } else if (res.error === "auth") {
                handleAuthLost();
            } else {
                state.isOnline = false;
                updateOnlineBadge();
            }
            return;
        }

        state.isOnline = true;
        updateOnlineBadge();

        // 1. Viewers follow the admin's live session
        const remote = res.session;
        if (!isAdmin() && remote) {
            if (remote.topic_id && (!state.currentTopic || state.currentTopic.id !== remote.topic_id)) {
                state.currentTopic = EXERCISES.find(t => t.id === remote.topic_id) || {
                    id: remote.topic_id,
                    title: remote.topic_title,
                    text: remote.topic_text,
                    ar: remote.topic_ar
                };
                renderLiveSession();
            }

            state.roleA = remote.role_a || state.roleA;
            state.roleB = remote.role_b || state.roleB;

            if (typeof remote.timer_seconds === "number") {
                const running = !!remote.is_timer_running;
                const elapsed = Math.floor(res.elapsed || 0);
                state.isTimerRunning = running;
                state.timerSeconds = running ? Math.max(0, remote.timer_seconds - elapsed) : remote.timer_seconds;
                updateTimerDisplay();
            }

            // "Worked" flag follows the admin live
            if (state.currentTopic) {
                const wasWorked = state.workedTopicIds.has(state.currentTopic.id);
                const isWorked = !!(remote.extra && remote.extra.worked);
                if (wasWorked !== isWorked) {
                    if (isWorked) state.workedTopicIds.add(state.currentTopic.id);
                    else state.workedTopicIds.delete(state.currentTopic.id);
                    renderLiveSession();
                }
            }

            renderRoles();
        }

        // 1b. Admin: member list, online counter, "new member" toast
        if (isAdmin() && Array.isArray(res.members)) {
            handleMembersUpdate(res.members);
        }

        // 2. Notifications (newest first)
        const notifs = res.notifications || [];
        if (notifs.length > 0) {
            const newest = notifs[0];
            if (newest.id > state.syncClient.lastNotificationId) {
                if (state.syncClient.lastNotificationId !== 0 && (!isAdmin() || newest.sender_name !== state.activeProfile?.name)) {
                    playChime();
                    showNotificationBanner(newest.title, newest.message);
                    triggerBrowserNotification(newest.title, newest.message);
                }
                state.syncClient.lastNotificationId = newest.id;
            }
        }
    } finally {
        pollBusy = false;
    }
}

// ===== Group members (admin) =====
let toastQueue = [];
let toastBusy = false;

function showToast(message) {
    toastQueue.push(message);
    runToast();
}

function runToast() {
    if (toastBusy || toastQueue.length === 0) return;
    const el = document.getElementById("toast");
    if (!el) { toastQueue = []; return; }
    toastBusy = true;
    el.textContent = toastQueue.shift();
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 3000);
    setTimeout(() => { toastBusy = false; runToast(); }, 3400);
}

let membersSignature = "";

function handleMembersUpdate(list) {
    const online = list.filter(m => m.online).length;
    const newest = list.reduce((mx, m) => Math.max(mx, m.joined_at || 0), 0);

    if (state.memberHighWater === null) {
        // first poll: remember who is already here, no toast
        state.memberHighWater = newest;
    } else {
        list.filter(m => m.joined && !m.banned && m.joined_at && m.joined_at > state.memberHighWater)
            .sort((a, b) => a.joined_at - b.joined_at)
            .forEach(m => {
                showToast(`🟢 New member "${m.name}" entered the room`);
                playChime();
            });
        state.memberHighWater = Math.max(state.memberHighWater, newest);
    }

    const counter = document.getElementById("onlineCount");
    if (counter) counter.textContent = online;

    const sig = JSON.stringify(list);
    state.members = list;
    if (sig !== membersSignature) {
        membersSignature = sig;
        renderMembers();
    }
}

function renderMembers() {
    const box = document.getElementById("liveMembersList");
    const pill = document.getElementById("membersCountPill");
    const list = state.members || [];
    const online = list.filter(m => m.online).length;
    if (pill) pill.textContent = `${online} online · ${list.length} total`;
    updateAdminMetrics();
    if (!box) return;

    if (list.length === 0) {
        box.innerHTML = '<div style="color: var(--text-muted); font-size: 13px; padding: 10px 0;">Nobody has entered with the group code yet.</div>';
        return;
    }

    const sorted = [...list].sort((a, b) =>
        (Number(a.banned) - Number(b.banned)) ||
        (Number(b.online) - Number(a.online)) ||
        String(a.name).localeCompare(String(b.name)));

    box.innerHTML = sorted.map(m => {
        const cleanName = m.name || "Guest";
        const inPool = state.profiles.some(p => p.name.toLowerCase() === cleanName.toLowerCase());
        return `
        <div class="member-row ${m.banned ? 'banned' : ''}">
            <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                <span class="member-dot ${m.online ? 'on' : ''}"></span>
                <strong style="font-size: 15px; font-weight: 800;">${esc(cleanName)}</strong>
                <span class="pill" style="font-size: 10px; padding: 2px 7px;">${m.banned ? "⛔ BANNED" : (m.online ? "ONLINE" : "OFFLINE")}</span>
                ${inPool ? '<span class="pill" style="font-size: 10px; padding: 2px 7px; color: var(--good); border-color: var(--good);">✓ in candidate pool</span>' : ''}
            </div>
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                <button class="btn btn-pill-sm ${inPool ? '' : 'btn-primary'}" onclick="toggleMemberPool('${esc(cleanName)}')">
                    ${inPool ? '✓ Added' : '➕ Add to Pool'}
                </button>
                ${m.banned
                    ? `<button class="btn btn-primary btn-pill-sm" onclick="unbanMember(${Number(m.id)})">✅ Unban</button>`
                    : `<button class="btn btn-danger btn-pill-sm" onclick="banMember(${Number(m.id)})">⛔ Ban</button>`}
                <button class="btn btn-pill-sm" onclick="deleteMemberAction(${Number(m.id)})">🗑️ Delete</button>
            </div>
        </div>
        `;
    }).join("");
}

function updateAdminMetrics() {
    const list = state.members || [];
    const online = list.filter(m => m.online).length;
    const total = list.length;
    const pool = (state.profiles || []).length;
    const worked = (state.workedTopicIds || new Set()).size;

    const elTotal = document.getElementById("metricTotalMembers");
    if (elTotal) elTotal.textContent = total;
    const elOnline = document.getElementById("metricOnlineMembers");
    if (elOnline) elOnline.textContent = online;
    const elPool = document.getElementById("metricPoolCount");
    if (elPool) elPool.textContent = pool;
    const elWorked = document.getElementById("metricTopicsWorked");
    if (elWorked) elWorked.textContent = `${worked} / ${EXERCISES.length}`;
}

function toggleMemberPool(name) {
    if (!isAdmin()) return;
    const cleanName = (name || "").trim();
    if (!cleanName) return;

    const existingIdx = state.profiles.findIndex(p => p.name.toLowerCase() === cleanName.toLowerCase());
    if (existingIdx >= 0) {
        if (state.profiles.length <= 1) {
            alert("You must keep at least 1 member in the pool.");
            return;
        }
        state.profiles.splice(existingIdx, 1);
        saveProfiles();
        renderMembers();
        renderProfiles();
        renderScoreboard();
        showToast(`Removed "${cleanName}" from pool`);
    } else {
        const avatars = ["🎓", "🌟", "💡", "🚀", "🦊", "🦁", "🐼", "🦉", "⚡", "🎯", "📚", "☕"];
        const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
        state.profiles.push({
            id: "p_" + Date.now(),
            name: cleanName,
            avatar: randomAvatar,
            role: "MEMBER",
            texts: 0,
            starts: 0,
            bio: "B2 Study Partner"
        });
        saveProfiles();
        renderMembers();
        renderProfiles();
        renderScoreboard();
        showToast(`➕ Added "${cleanName}" to Pair Pool!`);
    }
}

function openMembersTab() {
    const btn = document.querySelector('[data-tab="tab-profiles"]');
    if (btn) btn.click();
}

function memberById(id) {
    return (state.members || []).find(m => Number(m.id) === Number(id));
}

async function afterMemberAction(res) {
    if (res && res.error === "auth") { handleAuthLost(); return; }
    if (res && res.error) { alert("Action failed: " + res.error); return; }
    pollOnce();
}

async function banMember(id) {
    if (!isAdmin()) return;
    const m = memberById(id);
    if (!confirm(`Ban "${m ? m.name : "this member"}"? They are kicked out now and their device can't enter again until you unban.`)) return;
    afterMemberAction(await state.syncClient.setBan(id, true));
}

async function unbanMember(id) {
    if (!isAdmin()) return;
    afterMemberAction(await state.syncClient.setBan(id, false));
}

async function deleteMemberAction(id) {
    if (!isAdmin()) return;
    const m = memberById(id);
    const extra = m && m.banned ? "\n\nThis also removes their ban." : "";
    if (!confirm(`Delete "${m ? m.name : "this member"}" from the list? They are kicked out now, but can enter again with the group code.${extra}`)) return;
    afterMemberAction(await state.syncClient.deleteMember(id));
}

// ===== History cleanup (admin) =====
function deleteRound(idx) {
    if (!isAdmin()) return;
    state.history.splice(idx, 1);
    saveData();
    renderHistory();
}

function clearHistory() {
    if (!isAdmin() || state.history.length === 0) return;
    if (!confirm("Remove ALL practice rounds from the history?")) return;
    state.history = [];
    saveData();
    renderHistory();
}

function updateOnlineBadge() {
    const dot = document.getElementById("statusDot");
    const text = document.getElementById("statusText");
    if (dot && text) {
        if (state.isOnline) {
            dot.className = "pulse-dot";
            text.textContent = "ONLINE · REALTIME";
        } else {
            dot.className = "pulse-dot offline";
            text.textContent = "LOCAL MODE";
        }
    }
}

// Rendering UI
function renderAll() {
    renderLiveSession();
    renderTopicsList();
    renderRedemittel();
    renderProfiles();
    renderScoreboard();
    renderHistory();
    updateTimerDisplay();
    renderTimerControls();
}

function renderLiveSession() {
    if (!state.currentTopic) return;

    const isTeil2 = state.currentTopic.teil === 2;
    const eyebrow = document.getElementById("liveEyebrow");
    if (eyebrow) {
        eyebrow.textContent = isTeil2 ? "GERMAN B2 · SPRECHEN TEIL 2 (THEMA PRÄSENTIEREN)" : "GERMAN B2 · SPRECHEN TEIL 3 (GEMEINSAM PLANEN)";
    }

    const timerTitle = document.getElementById("timerTitle");
    if (timerTitle) {
        timerTitle.textContent = isTeil2 ? "4-Minute Presentation & Feedback" : "5-Minute Discussion Timer";
    }

    document.getElementById("topicTitle").textContent = state.currentTopic.title;
    document.getElementById("exerciseText").textContent = state.currentTopic.text;
    document.getElementById("arabicText").textContent = state.currentTopic.ar || "";

    const workedPill = document.getElementById("topicWorkedBadge");
    if (workedPill) {
        workedPill.style.display = state.workedTopicIds.has(state.currentTopic.id) ? "inline-flex" : "none";
    }

    const teilBadge = document.getElementById("topicTeilBadge");
    if (teilBadge) {
        teilBadge.textContent = isTeil2 ? "Teil 2: Präsentation" : "Teil 3: Planung";
        teilBadge.style.color = isTeil2 ? "var(--accent2)" : "var(--good)";
        teilBadge.style.borderColor = isTeil2 ? "var(--accent2)" : "var(--good)";
    }

    renderRoles();
}

function renderRoles() {
    const aBox = document.getElementById("roleABox");
    const bBox = document.getElementById("roleBBox");

    // Only Grayson (Admin) is identified as Grayson.
    // Viewers are identified ONLY by their student name (state.myName).
    const myName = isAdmin()
        ? (state.activeProfile?.name || "Grayson")
        : (state.myName || localStorage.getItem("b2_my_name") || "");

    const isTeil2 = state.currentTopic?.teil === 2;
    const isMeA = Boolean(myName && state.roleA && state.roleA.toLowerCase() === myName.toLowerCase());
    const isMeB = Boolean(myName && state.roleB && state.roleB.toLowerCase() === myName.toLowerCase());

    const profA = state.profiles.find(p => p.name.toLowerCase() === state.roleA.toLowerCase());
    const profB = state.profiles.find(p => p.name.toLowerCase() === state.roleB.toLowerCase());
    const avatarA = profA ? profA.avatar : "👑";
    const avatarB = profB ? profB.avatar : "🎓";

    if (aBox) {
        document.getElementById("roleAName").textContent = state.roleA;
        document.getElementById("roleAAvatar").innerHTML = renderAvatarHtml(avatarA, 52);
        document.getElementById("roleAMe").style.display = isMeA ? "inline-block" : "none";
        document.getElementById("roleATag").textContent = isTeil2 ? "A · REFERENT(IN)" : "A · STARTS PLANNING";
        const descA = document.getElementById("roleADesc");
        if (descA) descA.textContent = isTeil2 ? "Thema präsentieren" : "Gemeinsam planen (Starter)";
        aBox.classList.toggle("highlight-me", isMeA);
    }

    if (bBox) {
        document.getElementById("roleBName").textContent = state.roleB;
        document.getElementById("roleBAvatar").innerHTML = renderAvatarHtml(avatarB, 52);
        document.getElementById("roleBMe").style.display = isMeB ? "inline-block" : "none";
        document.getElementById("roleBTag").textContent = isTeil2 ? "B · FEEDBACK & FRAGEN" : "B · PARTNER";
        const descB = document.getElementById("roleBDesc");
        if (descB) descB.textContent = isTeil2 ? "Feedback & Fragen stellen" : "Vorschläge & Einigung";
        bBox.classList.toggle("highlight-me", isMeB);
    }

    // Role-dependent controls
    const adminControls = document.getElementById("adminControls");
    if (adminControls) {
        adminControls.style.display = state.userRole === "ADMIN" ? "block" : "none";
    }
    const memberNote = document.getElementById("memberNote");
    if (memberNote) {
        memberNote.style.display = state.userRole === "MEMBER" ? "block" : "none";
    }
}

function renderTopicsList() {
    const container = document.getElementById("topicsList");
    if (!container) return;

    const query = (document.getElementById("topicSearch")?.value || "").toLowerCase().trim();
    const filter = document.querySelector(".filter-btn.active")?.dataset.filter || "all";

    const filtered = EXERCISES.filter(t => {
        const matchesQuery = t.title.toLowerCase().includes(query) || t.text.toLowerCase().includes(query);
        const isWorked = state.workedTopicIds.has(t.id);
        const matchesFilter = filter === "all" ||
            (filter === "teil2" && t.teil === 2) ||
            (filter === "teil3" && t.teil === 3) ||
            (filter === "unworked" && !isWorked) ||
            (filter === "worked" && isWorked);
        return matchesQuery && matchesFilter;
    });

    // Update counts
    document.getElementById("countPill").textContent = `${EXERCISES.length} Topics (40 Teil 2 + 46 Teil 3)`;
    document.getElementById("usedPill").textContent = `${state.workedTopicIds.size} Worked`;

    container.innerHTML = filtered.map(t => {
        const isWorked = state.workedTopicIds.has(t.id);
        const isActive = state.currentTopic?.id === t.id;
        const isTeil2 = t.teil === 2;
        return `
            <div class="topic-item ${isWorked ? 'worked' : ''} ${isActive ? 'active' : ''}">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 6px; gap: 6px;">
                    <strong style="font-size: 15px;">${esc(t.title)}</strong>
                    <div style="display: flex; gap: 4px; flex-shrink: 0;">
                        <span class="pill" style="font-size: 10px; padding: 2px 6px; color: ${isTeil2 ? 'var(--accent2)' : 'var(--good)'}; border-color: ${isTeil2 ? 'var(--accent)' : 'var(--good)'};">
                            ${isTeil2 ? 'Teil 2' : 'Teil 3'}
                        </span>
                        ${isWorked ? '<span class="pill" style="color: var(--good); border-color: var(--good); font-size: 10px; padding: 2px 6px;">✓</span>' : ''}
                    </div>
                </div>
                <p style="font-size: 12px; color: var(--text-muted); line-height: 1.4; margin-bottom: 10px;">
                    ${esc(t.text.substring(0, 110))}...
                </p>
                <button class="btn btn-primary admin-only" style="padding: 6px 12px; font-size: 12px; width: 100%;" onclick="selectSpecificTopic('${t.id}')">
                    ▶ Practice This Topic
                </button>
            </div>
        `;
    }).join("");
}

function renderRedemittel() {
    const container = document.getElementById("redemittelList");
    if (!container) return;

    container.innerHTML = REDEMITTEL_CATEGORIES.map(cat => `
        <div class="card" style="margin-bottom: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <div>
                    <h3 style="font-size: 16px; color: var(--accent2);">${cat.icon} ${cat.title}</h3>
                    <p style="font-size: 12px; color: var(--text-muted);">${cat.subtitle}</p>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                ${cat.phrases.map(p => `
                    <div style="display: flex; justify-content: space-between; align-items: center; background: var(--panel-card); border: 1px solid var(--line); padding: 8px 12px; border-radius: 10px;">
                        <span style="font-size: 14px;">${esc(p)}</span>
                        <div style="display: flex; gap: 6px;">
                            <button class="btn" style="padding: 4px 8px; font-size: 12px;" onclick="speakPhrase('${esc(p)}')">🔊</button>
                            <button class="btn" style="padding: 4px 8px; font-size: 12px;" onclick="copyText('${esc(p)}')">📋</button>
                        </div>
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");
}

// Profiles System
function renderProfiles() {
    const list = document.getElementById("profilesList");
    updateAdminMetrics();
    if (!list) return;

    list.innerHTML = state.profiles.map(p => {
        const isCurrent = state.activeProfile?.id === p.id;
        const totalPct = Math.round((p.texts / EXERCISES.length) * 100) || 0;
        return `
            <div class="profile-card ${isCurrent ? 'active-user' : ''}">
                <div class="profile-card-header">
                    <div style="display: flex; align-items: center; gap: 14px;">
                        <div class="profile-avatar">${renderAvatarHtml(p.avatar, 52)}</div>
                        <div>
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <strong style="font-size: 17px; font-weight: 850;">${esc(p.name)}</strong>
                                <span class="pill" style="font-size: 10px; padding: 2px 7px;">${p.role}</span>
                                ${isCurrent ? '<span class="me-badge">YOU</span>' : ''}
                            </div>
                            <p style="font-size: 12px; color: var(--text-muted); margin-top: 3px;">${esc(p.bio || 'German B2 learner')}</p>
                        </div>
                    </div>
                </div>

                <!-- 2x2 Metric Tiles (Image 1 Style) -->
                <div class="profile-stats-grid">
                    <div class="profile-stat-box">
                        <span class="stat-box-title">📚 Texts Completed</span>
                        <strong class="stat-box-num">${p.texts}</strong>
                    </div>
                    <div class="profile-stat-box">
                        <span class="stat-box-title">🎤 Starts (Role A)</span>
                        <strong class="stat-box-num">${p.starts}</strong>
                    </div>
                    <div class="profile-stat-box">
                        <span class="stat-box-title">📈 Coverage Rate</span>
                        <strong class="stat-box-num" style="color: var(--good);">${totalPct}%</strong>
                    </div>
                    <div class="profile-stat-box">
                        <span class="stat-box-title">🎯 Exam Focus</span>
                        <strong class="stat-box-num" style="color: var(--accent2);">Teil 2 & 3</strong>
                    </div>
                </div>

                <div class="profile-card-actions">
                    ${!isCurrent ? `<button class="btn btn-primary btn-pill-sm" onclick="switchProfile('${p.id}')">Select Active</button>` : '<span class="pill" style="color: var(--good); border-color: var(--good); font-size: 11px;">✓ Active User</span>'}
                    <div style="display: flex; gap: 6px;">
                        <button class="btn btn-pill-sm" onclick="editProfile('${p.id}')">✏️ Edit</button>
                        ${state.profiles.length > 1 ? `<button class="btn btn-danger btn-pill-sm" onclick="deleteProfile('${p.id}')">🗑️ Delete</button>` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join("");

    // Active profile summary badge in header
    const badge = document.getElementById("activeUserBadge");
    if (badge && state.activeProfile) {
        badge.innerHTML = `<span style="display:inline-flex; align-items:center; gap:6px;">${renderAvatarHtml(state.activeProfile.avatar, 22)} <b>${esc(state.activeProfile.name)}</b> (${state.userRole})</span>`;
    }

    renderPresetAvatars();
}

function renderPresetAvatars() {
    const container = document.getElementById("presetAvatarPicker");
    if (!container) return;

    const emojis = ["🎓", "👑", "📚", "🌟", "💡", "🚀", "🦊", "🦁", "🐼", "🦉", "⚡", "🎯", "🎨", "⚽", "🏆", "☕"];
    container.innerHTML = emojis.map(em => `
        <button type="button" class="avatar-choice-btn ${state.selectedAvatar === em ? 'selected' : ''}" onclick="selectPresetAvatar('${em}')">
            ${em}
        </button>
    `).join("");
}

function selectPresetAvatar(emoji) {
    state.selectedAvatar = emoji;
    const preview = document.getElementById("newAvatarPreview");
    if (preview) {
        preview.innerHTML = emoji;
        preview.className = "avatar-badge-emoji";
    }
    renderPresetAvatars();
}

function handleAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file (PNG, JPG, WebP)");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            // Compress and resize image using offscreen canvas to keep it lightweight (~150x150)
            const canvas = document.createElement("canvas");
            const size = 160;
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext("2d");

            // Crop to center square
            const minDim = Math.min(img.width, img.height);
            const sx = (img.width - minDim) / 2;
            const sy = (img.height - minDim) / 2;

            ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, size, size);
            const dataUrl = canvas.toDataURL("image/jpeg", 0.85);

            state.selectedAvatar = dataUrl;
            const preview = document.getElementById("newAvatarPreview");
            if (preview) {
                preview.innerHTML = `<img src="${dataUrl}" alt="Avatar" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">`;
            }
            renderPresetAvatars();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function switchProfile(profileId) {
    const target = state.profiles.find(p => p.id === profileId);
    if (!target) return;
    state.activeProfile = target;
    saveData();
    renderRoles();
    renderProfiles();
}

function addNewProfile() {
    const nameInput = document.getElementById("newProfileName");
    const roleInput = document.getElementById("newProfileRole");
    const bioInput = document.getElementById("newProfileBio");

    const name = nameInput.value.trim();
    if (!name) {
        alert("Please enter a name for the profile.");
        return;
    }

    const newP = {
        id: "p_" + Date.now(),
        name: name,
        avatar: state.selectedAvatar || "🎓",
        role: roleInput ? roleInput.value : "MEMBER",
        texts: 0,
        starts: 0,
        bio: bioInput ? bioInput.value.trim() : "German B2 study member"
    };

    state.profiles.push(newP);
    saveProfiles();

    // Reset inputs
    nameInput.value = "";
    if (bioInput) bioInput.value = "";
    state.selectedAvatar = "🎓";
    selectPresetAvatar("🎓");

    renderProfiles();
    renderRoles();
    renderScoreboard();
}

function deleteProfile(profileId) {
    if (state.profiles.length <= 1) {
        alert("You must keep at least 1 profile.");
        return;
    }
    if (!confirm("Are you sure you want to remove this profile?")) return;
    state.profiles = state.profiles.filter(p => p.id !== profileId);
    if (state.activeProfile?.id === profileId) {
        state.activeProfile = state.profiles[0] || null;
    }
    saveProfiles();
    saveData();
    renderAll();
}

function editProfile(profileId) {
    const p = state.profiles.find(x => x.id === profileId);
    if (!p) return;

    const newName = prompt("Edit Profile Name:", p.name);
    if (newName && newName.trim()) {
        p.name = newName.trim();
        const newBio = prompt("Short Bio / Target:", p.bio || "");
        if (newBio !== null) p.bio = newBio.trim();
        saveProfiles();
        saveData();
        renderAll();
    }
}

function renderScoreboard() {
    const table = document.getElementById("scoreboardTable");
    if (!table) return;

    const sorted = [...state.profiles].sort((a, b) => b.texts - a.texts || b.starts - a.starts);

    table.innerHTML = sorted.map((p, idx) => {
        const pct = Math.round((p.texts / EXERCISES.length) * 100) || 0;
        return `
            <tr style="border-bottom: 1px solid var(--line); font-size: 13px;">
                <td style="padding: 10px 6px;">
                    <span style="font-weight: 800; color: var(--accent2); margin-right: 6px;">#${idx + 1}</span>
                    ${p.avatar} ${esc(p.name)}
                </td>
                <td style="padding: 10px 6px; text-align: center;">${p.texts}</td>
                <td style="padding: 10px 6px; text-align: center;">${p.starts}</td>
                <td style="padding: 10px 6px; text-align: right; font-weight: 800; color: var(--good);">${pct}%</td>
            </tr>
        `;
    }).join("");
}

function renderHistory() {
    const container = document.getElementById("historyList");
    if (!container) return;

    if (state.history.length === 0) {
        container.innerHTML = '<div style="color: var(--text-muted); font-size: 13px;">No rounds recorded yet.</div>';
        return;
    }

    container.innerHTML = state.history.map((h, idx) => `
        <div style="padding: 8px 0; border-bottom: 1px solid var(--line); font-size: 13px; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <b>${esc(h.title)}</b>
                <div style="font-size: 11px; color: var(--text-muted);">${esc(h.roleA)} (A) ➔ ${esc(h.roleB)} (B)</div>
            </div>
            <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
                <span style="font-size: 11px; color: var(--accent2);">${h.time}</span>
                <button class="btn btn-danger admin-only" style="padding: 3px 8px; font-size: 11px;" title="Remove this round" onclick="deleteRound(${idx})">🗑️</button>
            </div>
        </div>
    `).join("");
}

// Text Highlighter
function highlightSelectedText() {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;

    const range = sel.getRangeAt(0);
    const container = document.getElementById("exerciseText");
    if (!container || !container.contains(range.commonAncestorContainer)) return;

    try {
        const mark = document.createElement("mark");
        mark.className = "exercise-highlight";
        mark.appendChild(range.extractContents());
        range.insertNode(mark);
        sel.removeAllRanges();
    } catch (e) {}
}

// Theme
function setupTheme() {
    document.body.classList.toggle("light", state.theme === "light");
    const themeBtn = document.getElementById("themeBtn");
    if (themeBtn) {
        themeBtn.textContent = state.theme === "light" ? "🌙 Dark" : "☀️ Light";
    }
}

function toggleTheme() {
    state.theme = state.theme === "light" ? "dark" : "light";
    localStorage.setItem("b2_theme", state.theme);
    setupTheme();
}

// Helpers
function copyText(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    }
}

function copyExercise() {
    if (!state.currentTopic) return;
    copyText(`${state.currentTopic.title}\n\n${state.currentTopic.text}`);
}

function esc(str) {
    if (!str) return "";
    return String(str).replace(/[&<>"']/g, c => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
}

// Section Selector for Randomizer (Teil 2 or Teil 3 only)
function setExamSection(sec) {
    state.selectedTeil = sec === "3" ? "3" : "2";
    localStorage.setItem("b2_selected_teil", state.selectedTeil);

    const btnT2 = document.getElementById("modeBtnT2");
    const btnT3 = document.getElementById("modeBtnT3");

    if (btnT2) {
        btnT2.className = `btn btn-segmented ${state.selectedTeil === "2" ? "active" : ""}`;
        btnT2.style.background = "";
        btnT2.style.color = "";
    }
    if (btnT3) {
        btnT3.className = `btn btn-segmented ${state.selectedTeil === "3" ? "active" : ""}`;
        btnT3.style.background = "";
        btnT3.style.color = "";
    }

    // Switch topic if current topic does not belong to selected section
    const currentTeil = state.currentTopic?.teil || 2;
    if (Number(currentTeil) !== Number(state.selectedTeil)) {
        const pool = state.selectedTeil === "2" ? EXERCISES_TEIL2 : EXERCISES_TEIL3;
        const fresh = pool.find(t => !state.workedTopicIds.has(t.id)) || pool[0];
        state.currentTopic = fresh;
        resetTimer();
        broadcastSession();
        renderLiveSession();
    }
}

// Filter Redemittel Phrases
function filterRedemittel(type) {
    const btnAll = document.getElementById("rmBtnAll");
    const btnT2 = document.getElementById("rmBtnT2");
    const btnT3 = document.getElementById("rmBtnT3");

    if (btnAll) btnAll.style.background = type === "all" ? "var(--accent)" : "var(--panel-card)";
    if (btnAll) btnAll.style.color = type === "all" ? "#fff" : "var(--text)";
    if (btnT2) btnT2.style.background = type === "t2" ? "var(--accent)" : "var(--panel-card)";
    if (btnT2) btnT2.style.color = type === "t2" ? "#fff" : "var(--text)";
    if (btnT3) btnT3.style.background = type === "t3" ? "var(--accent)" : "var(--panel-card)";
    if (btnT3) btnT3.style.color = type === "t3" ? "#fff" : "var(--text)";

    let list = REDEMITTEL_CATEGORIES;
    if (type === "t2") list = REDEMITTEL_TEIL2;
    if (type === "t3") list = REDEMITTEL_TEIL3;

    const container = document.getElementById("redemittelList");
    if (!container) return;

    container.innerHTML = list.map(cat => `
        <div class="card" style="margin-bottom: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <div>
                    <h3 style="font-size: 16px; color: var(--accent2);">${cat.icon} ${cat.title}</h3>
                    <p style="font-size: 12px; color: var(--text-muted);">${cat.subtitle}</p>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                ${cat.phrases.map(p => `
                    <div style="display: flex; justify-content: space-between; align-items: center; background: var(--panel-card); border: 1px solid var(--line); padding: 8px 12px; border-radius: 10px;">
                        <span style="font-size: 14px;">${esc(p)}</span>
                        <div style="display: flex; gap: 6px; flex-shrink: 0;">
                            <button class="btn" style="padding: 4px 8px; font-size: 12px;" onclick="speakPhrase('${esc(p)}')">🔊</button>
                            <button class="btn" style="padding: 4px 8px; font-size: 12px;" onclick="copyText('${esc(p)}')">📋</button>
                        </div>
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");
}

// Event Listeners setup
function setupEventListeners() {
    const searchInput = document.getElementById("topicSearch");
    if (searchInput) {
        searchInput.addEventListener("input", renderTopicsList);
    }

    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderTopicsList();
        });
    });

    const roomInput = document.getElementById("roomCodeInput");
    if (roomInput) {
        roomInput.value = state.roomCode;
        roomInput.addEventListener("change", () => {
            state.roomCode = roomInput.value.trim().toUpperCase() || CONFIG.DEFAULT_ROOM;
            saveData();
            broadcastSession();
        });
    }
}
