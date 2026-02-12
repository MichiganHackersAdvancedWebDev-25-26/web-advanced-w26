'use client'
import Link from "next/link";

export default function DepartmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid md:grid-cols-[240px_1fr] grid-cols-1">
      <aside className="hidden md:block border-r border-black/10 dark:border-white/15 p-4 space-y-4">
        <nav className="space-y-2">
          <Link href="/departments" className="block">
            Departments
          </Link>
          <a href="/settings" className="block">
            Settings
          </a>
          <a href="/auth" className="block">
            Logout
          </a>
        </nav>
      </aside>
      <main className="p-6">{children}</main>
    </div>
  );
}