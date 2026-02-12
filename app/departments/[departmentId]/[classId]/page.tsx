'use server'
type PageProps = {
  params: Promise<{departmentId: string, classId: string }>;
};

export default async function ClassPage({ params }: PageProps) {
  const { departmentId, classId } = await params;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Class {classId}</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-lg border border-black/10 dark:border-white/15 p-4">
          Overview
        </section>
        <section className="rounded-lg border border-black/10 dark:border-white/15 p-4">
          Cheat Sheets
        </section>
        <section className="rounded-lg border border-black/10 dark:border-white/15 p-4">
          Lecture Notes
        </section>
        <section className="rounded-lg border border-black/10 dark:border-white/15 p-4">
          Practice Problems
        </section>
      </div>
    </div>
  );
}