import Link from "next/link";
import { createAuthSession, encryptJWT } from "@/lib/session";

export default function LoginPage() {
  async function handleSubmit(data: FormData) {
    "use server";

    const session = await encryptJWT({
      email: data.get("email") as string,
      id: "2323423",
    });

    createAuthSession(session);
  }

  return (
    <>
      <h1>Login</h1>
      <p>Add your details below to get back into the app</p>

      <form action={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e.g. alex@email.com"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don&apos;t have an account? <Link href="/register">Create account</Link>
      </p>
    </>
  );
}
