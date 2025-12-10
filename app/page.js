import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className="text-lg font-bold m-4">CPRG 306: Web Development 2 - Assignments</h1>

      <Link className="m-4" href="/week-2">Week 2 Assignment</Link><br />
      <Link className="m-4" href="/week-3">Week 3 Assignment</Link><br />
      <Link className="m-4" href="/week-4">Week 4 Assignment</Link><br />
      <Link className="m-4" href="/week-5">Week 5 Assignment</Link><br />
      <Link className="m-4" href="/week-6">Week 6 Assignment</Link><br />
      <Link className="m-4" href="/week-7">Week 7 Assignment</Link>
    </main>
  );
}
