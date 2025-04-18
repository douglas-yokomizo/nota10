import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xarczkolhkpsakkluaot.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhcmN6a29saGtwc2Fra2x1YW90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMjAxNzYsImV4cCI6MjA1OTY5NjE3Nn0.R8efRwKJBLoR8DLOwJcMpHW_nk9PTrYW-PQocpuUYKg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
