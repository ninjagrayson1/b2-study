/**
 * B2 Diskussion Study Group - Configuration
 *
 * NOTE: Credentials are kept here in code and NOT exposed in the main student UI.
 * You can also run the app completely without Supabase (Local Mode),
 * or link your free Supabase project by filling in SUPABASE_URL and SUPABASE_ANON_KEY.
 */
const CONFIG = {
    // Supabase Credentials (Fill these in with your Supabase Project details)
    SUPABASE_URL: "https://your-project.supabase.co",
    SUPABASE_ANON_KEY: "your-anon-key-here",

    // Default Study Room Code
    DEFAULT_ROOM: "B2-STUDY",

    // Real-Time Sync Polling Interval (in milliseconds)
    POLL_INTERVAL_MS: 1500,

    // Timer Duration (seconds)
    DEFAULT_TIMER_SECONDS: 300,

    // German TTS Speed
    TTS_RATE: 0.95,
    TTS_LANG: "de-DE",

    // Enable PHP Backend Sync (if hosting on InfinityFree or PHP host with api/sync.php)
    USE_PHP_FALLBACK: false,
    PHP_API_ENDPOINT: "api/sync.php"
};
