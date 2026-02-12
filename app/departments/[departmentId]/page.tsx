'use server'
import Link from "next/link";

type PageProps = {
  params: Promise<{departmentId: string }>;
};

export default async function DepartmentPage({ params }: PageProps) {
  const { departmentId } = await params;
  return (
    <div className="min-h-screen grid md:grid-cols-[240px_1fr] grid-cols-1">
      <main className="p-6">
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Classes</h1>
            <ul className="list-disc pl-6">
                <li>
                <Link href={"/departments/" + departmentId + "/280"} className="underline">
                    EECS 280
                </Link>
                </li>
            </ul>
        </div>
      </main>
      {/* <main className="p-6">{children}</main> */}
    </div>
  );
}