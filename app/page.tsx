import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-semibold">Web-Advanced W26</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Find all your class resource needs here!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/auth"
            className="rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium"
          >
            Login / Signup
          </a>
        </div>
      </div>
    </main>
  );
}