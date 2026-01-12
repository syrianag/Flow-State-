import Link from "next/link"
import { redirect } from "next/navigation"
import { getServerAuthSession } from "../../lib/auth"
import { isStaff } from "../../lib/authz"

export default async function StaffPage() {
  const session = await getServerAuthSession()

  // Not logged in -> go to login, then back here
  if (!session) redirect("/login?callbackUrl=/staff")

  // Logged in but not staff -> block
  if (!isStaff(session)) {
    return (
      <section className="p-8">
        <h2 className="text-2xl font-bold">403 / Staff only</h2>
        <p className="mt-4">This area is restricted to Launchpad staff.</p>
        <div className="mt-6">
          <Link href="/" className="text-blue-600">Back to Home</Link>
        </div>
      </section>
    )
  }

  // Staff -> show the two pages
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold">Staff Portal</h2>
      <div className="mt-6 flex gap-6">
        <Link href="/rubric-evidence" className="text-blue-600">Rubric Evidence</Link>
        <Link href="/reflection" className="text-blue-600">Reflection</Link>
      </div>
    </section>
  )
}