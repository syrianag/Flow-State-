import prisma from '../../../../lib/prisma'
import bcrypt from 'bcryptjs'

const STAFF_EMAILS = new Set([
  'rob@launchpadphilly.org',
  'sanaa@launchpadphilly.org',
  'taheera@launchpadphilly.org',
])

export async function POST(req) {
  try {
    const body = await req.json()
    const { email, password } = body
    if (!email || !password) return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 })
    const emailLower = String(email).trim().toLowerCase()
    if (STAFF_EMAILS.has(emailLower)) {
      return new Response(JSON.stringify({ error: 'Staff accounts are provided. Please log in.' }), { status: 403 })
    }
    const existing = await prisma.user.findUnique({ where: { email: emailLower } })
    if (existing) return new Response(JSON.stringify({ error: 'Email already in use' }), { status: 409 })
    const hash = await bcrypt.hash(password, 10)
    await prisma.user.create({ data: { email: emailLower, passwordHash: hash, role: 'USER' } })
    return new Response(JSON.stringify({ ok: true }), { status: 201 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
