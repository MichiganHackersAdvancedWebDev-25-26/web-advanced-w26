import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return Response.json(
      {
        ok: false,
        urlPresent: Boolean(url),
        keyPresent: Boolean(key),
        error: "Missing env vars",
      },
      { status: 500 }
    );
  }

  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false },
    });
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      return Response.json(
        { ok: false, error: error.message },
        { status: 500 }
      );
    }
    return Response.json({ ok: true, sessionPresent: Boolean(data.session) });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}