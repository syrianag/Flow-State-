import { redirect } from 'next/navigation'
import { getServerAuthSession } from '../../lib/auth'
import { isStaff } from '../../lib/authz'

export default async function ReflectionPage() {
  const session = await getServerAuthSession()
  if (!session) redirect(`/login?callbackUrl=/reflection`)
  if (!isStaff(session)) {
    return (
      <section className="p-8">
        <h2 className="text-2xl font-bold">403 / Staff only</h2>
        <p className="mt-4">This area is restricted to Launchpad staff.</p>
        <div className="mt-6">
          <a href="/" className="text-blue-600">Back to Home</a>
        </div>
      </section>
    )
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Reflection</h2>

      <h3 className="font-semibold mt-4">What went well</h3>
      <ul className="list-disc ml-6 mt-2">
        <li>Created a minimal Next.js scaffold and Prisma schema.</li>
        <li>Defined the core product idea and MVP features.</li>
      </ul>

      <h3 className="font-semibold mt-4">What didn't go well</h3>
      <p className="mt-2">Tailwind and Prisma client generation still need to be run locally to fully validate styles and database interactions.</p>

      <h3 className="font-semibold mt-4">What I changed and why</h3>
      <p className="mt-2">I added a structured README and created the basic pages to map project requirements to site routes for easier review.</p>

      <h3 className="font-semibold mt-4">What I'd build next</h3>
      <ul className="list-disc ml-6 mt-2">
        <li>Interactive daily check-in and scheduling UI.</li>
        <li>Focus block timer with real-time logging and persistence.</li>
        <li>AI Task Shaper integration with editable suggestions.</li>
        <li>Authentication and role-based instructor accounts for rubric review.</li>
      </ul>
    </section>
  )
}
