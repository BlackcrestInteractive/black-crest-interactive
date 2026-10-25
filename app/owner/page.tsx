
import { auth } from "../../auth";
import { redirect } from "next/navigation";
import OwnerDashboard from "./OwnerDashboard";

export default async function OwnerPage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/owner/login");
  }

  const ownerEmail = process.env.OWNER_EMAIL;

  if (
    !ownerEmail ||
    session.user.email.toLowerCase() !==
      ownerEmail.toLowerCase()
  ) {
    redirect("/");
  }

  return <OwnerDashboard />;
}

