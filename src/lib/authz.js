import { redirect } from 'next/navigation'
import { getServerAuthSession } from './auth'

export async function requireAuth(redirectTo = '/') {
  const session = await getServerAuthSession()
  if (!session) redirect(`/login?callbackUrl=${encodeURIComponent(redirectTo)}`)
  return session
}

export function isStaff(session) {
  return !!session && ['COACH', 'INSTRUCTOR', 'ADMIN'].includes(session.user?.role)
}
