// src/lib/supabase.ts
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (supabase) return supabase;

  const url = import.meta.env.VITE_SUPABASE_URL;
  const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;

  // Optional: allow a temporary override for Lovable preview only (no secrets committed)
  // @ts-ignore
  const urlFallback = (globalThis as any).__SUPABASE_URL as string | undefined;
  // @ts-ignore
  const anonFallback = (globalThis as any).__SUPABASE_ANON_KEY as string | undefined;

  const finalUrl = url ?? urlFallback;
  const finalAnon = anon ?? anonFallback;

  if (!finalUrl || !finalAnon) {
    throw new Error(
      'Supabase env vars missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (see README).'
    );
  }

  supabase = createClient(finalUrl, finalAnon);
  return supabase;
}