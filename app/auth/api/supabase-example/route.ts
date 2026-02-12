export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const ok = Boolean(url && key);
  return Response.json({
    ok,
    urlPresent: Boolean(url),
    keyPresent: Boolean(key),
  });
}