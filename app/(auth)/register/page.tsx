import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      <h1>Create account</h1>
      <p>Let&apos;s get you started sharing your links!</p>

      <form>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e.g. alex@email.com"
          required
        />

        <label htmlFor="password">Create password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="At least 8 characters"
          required
        />

        <label htmlFor="confirm-password">Confirm password</label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="At least 8 characters"
          required
        />

        <p>Password must contain at least 8 characters</p>

        <button type="submit">Create new account</button>
      </form>

      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </>
  );
}
