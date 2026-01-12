// src/app/rubric/page.jsx
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerAuthSession } from "../../lib/auth";
import { isStaff } from "../../lib/authz";
import RubricClient from "./RubricClient";

export default async function RubricPage() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/login?callbackUrl=/rubric");
  }

  if (!isStaff(session)) {
    return (
      <section className="p-8">
        <h2 className="text-2xl font-bold">403 / Staff only</h2>
        <p className="mt-4">This area is restricted to Launchpad staff.</p>
        <div className="mt-6">
          <Link href="/" className="text-blue-600">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return <RubricClient />;
}