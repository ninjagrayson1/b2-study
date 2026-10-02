/**
 * Supabase client (access-code version)
 * The website never touches the tables directly. It only calls secured
 * functions in Supabase, and Supabase decides what each role may do.
 */
class RealtimeSyncClient {
    constructor() {
        this.url = (CONFIG.SUPABASE_URL || "").replace(/\/$/, "");
        this.key = CONFIG.SUPABASE_ANON_KEY || "";
        this.token = localStorage.getItem("b2_token") || "";
        this.device = this.getDeviceId();
        this.lastNotificationId = 0;
        this.notifReady = false;
    }

    // Random id for this browser (lets the admin ban a device)
    getDeviceId() {
        let id = localStorage.getItem("b2_device") || "";
        if (id.length < 8) {
            id = (window.crypto && crypto.randomUUID)
                ? crypto.randomUUID()
                : "d" + Date.now().toString(36) + Math.random().toString(36).slice(2, 12);
            localStorage.setItem("b2_device", id);
        }
        return id;
    }

    isConfigured() {
        return !!(this.url && this.url.startsWith("http") && this.key &&
            !this.url.includes("your-project") && !this.key.includes("your-anon-key"));
    }

    async rpc(name, args) {
        const res = await fetch(`${this.url}/rest/v1/rpc/${name}`, {
            method: "POST",
            headers: {
                apikey: this.key,
                Authorization: `Bearer ${this.key}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(args)
        });
        if (!res.ok) throw new Error("http_" + res.status);
        return await res.json();
    }

    clearToken() {
        this.token = "";
        localStorage.removeItem("b2_token");
    }

    // Check an access code. Returns { ok, role } or { ok:false, error }
    async login(code) {
        try {
            const d = await this.rpc("app_login", { p_code: code, p_device: this.device });
            if (d && d.token) {
                this.token = d.token;
                localStorage.setItem("b2_token", d.token);
                this.notifReady = false;
                return { ok: true, role: d.role };
            }
            return { ok: false, error: (d && d.error) || "invalid" };
        } catch (err) {
            console.warn("login failed:", err);
            return { ok: false, error: "network" };
        }
    }

    // Viewer: tell the room your name. Returns { ok, name } or { ok:false, error }
    async join(name) {
        try {
            const d = await this.rpc("app_join", { p_token: this.token, p_name: name });
            if (d && d.ok) return { ok: true, name: d.name };
            return { ok: false, error: (d && d.error) || "invalid" };
        } catch (err) {
            return { ok: false, error: "network" };
        }
    }

    // Live room + notifications (+ member list for admin).
    async getState() {
        try {
            const d = await this.rpc("app_get_state", { p_token: this.token });
            if (d && d.error) return { ok: false, error: d.error };
            return { ok: true, ...d };
        } catch (err) {
            return { ok: false, error: "network" };
        }
    }

    // Admin only (Supabase rejects anyone else)
    async setSession(s) {
        try {
            return await this.rpc("app_set_session", {
                p_token: this.token,
                p: {
                    admin_name: s.adminName,
                    topic_id: s.topicId,
                    topic_title: s.topicTitle,
                    topic_text: s.topicText,
                    topic_ar: s.topicAr || "",
                    role_a: s.roleA,
                    role_b: s.roleB,
                    timer_seconds: s.timerSeconds,
                    is_timer_running: !!s.isTimerRunning,
                    extra: {
                        worked: !!s.worked,
                        coAdmins: Array.isArray(s.coAdmins) ? s.coAdmins : []
                    }
                }
            });
        } catch (err) {
            console.error("setSession error:", err);
            return { error: "network" };
        }
    }

    // Admin only
    async notify(sender, title, message) {
        try {
            return await this.rpc("app_notify", {
                p_token: this.token,
                p_sender: sender,
                p_title: title,
                p_message: message
            });
        } catch (err) {
            console.error("notify error:", err);
            return { error: "network" };
        }
    }

    // Admin only: ban / unban a member
    async setBan(id, banned) {
        try {
            return await this.rpc("app_set_ban", { p_token: this.token, p_id: id, p_banned: !!banned });
        } catch (err) {
            return { error: "network" };
        }
    }

    // Host only: promote / demote a member to admin (checked by Supabase)
    async setAdmin(id, isAdmin) {
        try {
            return await this.rpc("app_set_admin", { p_token: this.token, p_id: id, p_admin: !!isAdmin });
        } catch (err) {
            return { error: String(err && err.message || "network") };
        }
    }

    // Admin only: remove a member from the list
    async deleteMember(id) {
        try {
            return await this.rpc("app_delete_member", { p_token: this.token, p_id: id });
        } catch (err) {
            return { error: "network" };
        }
    }

    // Viewer: leave the room (disappears from the online counter)
    async leave() {
        try {
            await this.rpc("app_leave", { p_token: this.token });
        } catch (err) { /* ignore */ }
    }
}
