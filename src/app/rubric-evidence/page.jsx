import { redirect } from 'next/navigation'
import { getServerAuthSession } from '../../lib/auth'
import { isStaff } from '../../lib/authz'

export default async function RubricEvidencePage() {
  const session = await getServerAuthSession()
  if (!session) redirect(`/login?callbackUrl=/rubric-evidence`)
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
      <h2 className="text-2xl font-bold mb-4">Rubric Evidence</h2>
      <p>This page is for staff to review rubric evidence.</p>
    </section>
  )
}
