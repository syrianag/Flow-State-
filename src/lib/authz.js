// src/lib/authz.js
const STAFF_ROLES = new Set(["COACH", "INSTRUCTOR", "ADMIN"]);

export function isStaff(session) {
  return STAFF_ROLES.has(session?.user?.role);
}