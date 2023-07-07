import Link from "next/link";
import Heading from "@/components/heading";
import Text from "@/components/text";
import Input from "@/components/input";
import Button from "@/components/button";
import styles from "./page.module.css";

export default function RegisterPage() {
  return (
    <>
      <Heading className={styles.heading}>Create account</Heading>
      <Text>Let&apos;s get you started sharing your links!</Text>

      <form className={styles.form}>
        <Input
          icon="email"
          label="Email address"
          type="email"
          name="email"
          id="email"
          placeholder="e.g. alex@email.com"
          required
        />

        <Input
          icon="password"
          label="Create password"
          type="password"
          name="password"
          id="password"
          placeholder="At least 8 characters"
          required
        />

        <Input
          icon="password"
          label="Confirm password"
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="At least 8 characters"
          required
        />

        <Text size="s">Password must contain at least 8 characters</Text>

        <Button type="submit">Create new account</Button>
      </form>

      <Text className={styles.footer}>
        Already have an account? <Link href="/login">Login</Link>
      </Text>
    </>
  );
}
