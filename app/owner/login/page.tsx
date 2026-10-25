import { signIn } from "@/auth";

export default function OwnerLoginPage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Blackcrest Owner Dashboard</h1>
      <form action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/owner" });
      }}>
        <button type="submit">Sign in with GitHub</button>
      </form>
    </main>
  );
}
