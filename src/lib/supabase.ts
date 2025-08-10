import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://nkbwzoprzwdkjrjtizbh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rYnd6b3Byendka2pyanRpemJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3OTU3ODAsImV4cCI6MjA3MDM3MTc4MH0.5ex8eko5OeWG6OFxnA1K_o1X2j7meT1nikfnBRTR0xc";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);