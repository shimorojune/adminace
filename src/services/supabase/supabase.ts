import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://iuvkckyfrkgqkiipyvpm.supabase.co",
  import.meta.env.VITE_SUPABASE_API_KEY
);
