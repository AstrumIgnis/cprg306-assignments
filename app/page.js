import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">

        <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
        <div className="text-lg">
          <Link className="hover:text-blue-600 hover:underline" href="/week-2">Week 2 Assignment</Link><br />
          <Link className="hover:text-blue-600 hover:underline" href="/week-3">Week 3 Assignment</Link><br />
          <Link className="hover:text-blue-600 hover:underline" href="/week-4">Week 4 Assignment</Link><br />
          <Link className="hover:text-blue-600 hover:underline" href="/week-5">Week 5 Assignment</Link><br />
          <Link className="hover:text-blue-600 hover:underline" href="/week-6">Week 6 Assignment</Link><br />
          <Link className="hover:text-blue-600 hover:underline" href="/week-7">Week 7 Assignment</Link><br />
          <Link className="hover:text-blue-600 hover:underline" href="/week-8">Week 8 Assignment</Link><br />
          <Link className="hover:text-blue-600 hover:underline" href="/week-9">Week 9 Assignment</Link><br />
          <Link className="hover:text-blue-600 hover:underline" href="/week-10">Week 10 Assignment</Link>
        </div>
      </div>
    </main>
  );
}
