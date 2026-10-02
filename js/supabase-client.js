/**
 * Supabase & Cloud Real-time Synchronization Client
 * Works directly in browser without displaying keys in student interface.
 */
class RealtimeSyncClient {
    constructor() {
        this.url = localStorage.getItem("b2_supabase_url") || CONFIG.SUPABASE_URL || "";
        this.key = localStorage.getItem("b2_supabase_key") || CONFIG.SUPABASE_ANON_KEY || "";
        this.isCloudAvailable = false;
        this.lastNotificationId = 0;
        this.pollingTimer = null;
    }

    isConfigured() {
        return (
            this.url &&
            this.url.startsWith("http") &&
            this.key &&
            !this.url.includes("your-project") &&
            !this.key.includes("your-anon-key")
        );
    }

    async testConnection() {
        if (!this.isConfigured()) {
            this.isCloudAvailable = false;
            return false;
        }

        try {
            const cleanUrl = this.url.replace(/\/$/, "");
            const res = await fetch(`${cleanUrl}/rest/v1/study_sessions?limit=1`, {
                headers: {
                    apikey: this.key,
                    Authorization: `Bearer ${this.key}`
                }
            });
            this.isCloudAvailable = res.ok;
            return res.ok;
        } catch (err) {
            console.warn("Supabase connection check failed:", err);
            this.isCloudAvailable = false;
            return false;
        }
    }

    async fetchSession(roomCode) {
        if (!this.isConfigured()) return null;
        try {
            const cleanUrl = this.url.replace(/\/$/, "");
            const res = await fetch(`${cleanUrl}/rest/v1/study_sessions?room_code=eq.${encodeURIComponent(roomCode)}&select=*`, {
                headers: {
                    apikey: this.key,
                    Authorization: `Bearer ${this.key}`
                }
            });
            if (!res.ok) return null;
            const data = await res.json();
            return data && data.length > 0 ? data[0] : null;
        } catch (err) {
            console.error("fetchSession error:", err);
            return null;
        }
    }

    async upsertSession(session) {
        if (!this.isConfigured()) return false;
        try {
            const cleanUrl = this.url.replace(/\/$/, "");
            const payload = {
                room_code: session.roomCode,
                admin_name: session.adminName,
                topic_id: session.topicId,
                topic_title: session.topicTitle,
                topic_text: session.topicText,
                topic_ar: session.topicAr || "",
                role_a: session.roleA,
                role_b: session.roleB,
                timer_seconds: session.timerSeconds || 300,
                is_timer_running: !!session.isTimerRunning,
                last_updated: new Date().toISOString()
            };

            const res = await fetch(`${cleanUrl}/rest/v1/study_sessions?on_conflict=room_code`, {
                method: "POST",
                headers: {
                    apikey: this.key,
                    Authorization: `Bearer ${this.key}`,
                    "Content-Type": "application/json",
                    Prefer: "resolution=merge-duplicates,return=minimal"
                },
                body: JSON.stringify(payload)
            });
            return res.ok;
        } catch (err) {
            console.error("upsertSession error:", err);
            return false;
        }
    }

    async sendNotification(roomCode, senderName, title, message) {
        if (!this.isConfigured()) return false;
        try {
            const cleanUrl = this.url.replace(/\/$/, "");
            const payload = {
                room_code: roomCode,
                sender_name: senderName,
                title: title,
                message: message,
                created_at: new Date().toISOString()
            };

            const res = await fetch(`${cleanUrl}/rest/v1/study_notifications`, {
                method: "POST",
                headers: {
                    apikey: this.key,
                    Authorization: `Bearer ${this.key}`,
                    "Content-Type": "application/json",
                    Prefer: "return=minimal"
                },
                body: JSON.stringify(payload)
            });
            return res.ok;
        } catch (err) {
            console.error("sendNotification error:", err);
            return false;
        }
    }

    async fetchRecentNotifications(roomCode) {
        if (!this.isConfigured()) return [];
        try {
            const cleanUrl = this.url.replace(/\/$/, "");
            const res = await fetch(`${cleanUrl}/rest/v1/study_notifications?room_code=eq.${encodeURIComponent(roomCode)}&order=id.desc&limit=5`, {
                headers: {
                    apikey: this.key,
                    Authorization: `Bearer ${this.key}`
                }
            });
            if (!res.ok) return [];
            return await res.json();
        } catch (err) {
            console.error("fetchRecentNotifications error:", err);
            return [];
        }
    }

    async recordHistory(roomCode, topicId, title, roleA, roleB) {
        if (!this.isConfigured()) return false;
        try {
            const cleanUrl = this.url.replace(/\/$/, "");
            const payload = {
                room_code: roomCode,
                topic_id: topicId,
                topic_title: title,
                role_a: roleA,
                role_b: roleB,
                created_at: new Date().toISOString()
            };

            const res = await fetch(`${cleanUrl}/rest/v1/study_history`, {
                method: "POST",
                headers: {
                    apikey: this.key,
                    Authorization: `Bearer ${this.key}`,
                    "Content-Type": "application/json",
                    Prefer: "return=minimal"
                },
                body: JSON.stringify(payload)
            });
            return res.ok;
        } catch (err) {
            console.error("recordHistory error:", err);
            return false;
        }
    }
}
