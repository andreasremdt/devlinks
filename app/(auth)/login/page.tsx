import Link from "next/link";
import Heading from "@/components/heading";
import Text from "@/components/text";
import Input from "@/components/input";
import Button from "@/components/button";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <>
      <Heading className={styles.heading}>Login</Heading>
      <Text>Add your details below to get back into the app</Text>

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
          label="Password"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          required
        />

        <Button type="submit">Login</Button>
      </form>

      <Text className={styles.footer}>
        Don&apos;t have an account? <Link href="/register">Create account</Link>
      </Text>
    </>
  );
}
