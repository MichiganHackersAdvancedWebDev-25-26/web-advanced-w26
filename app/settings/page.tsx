export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <div className="grid gap-4">
        <div className="rounded-lg border border-black/10 dark:border-white/15 p-4">
          Profile
        </div>
        <div className="rounded-lg border border-black/10 dark:border-white/15 p-4">
          Accounts
        </div>
      </div>
    </div>
  );
}