'use client'
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Your Clubs</h1>
      <ul className="list-disc pl-6">
        <li>
          <Link href="/departments/EECS" className="underline">
            EECS Department
          </Link>
        </li>
      </ul>
    </div>
  );
}