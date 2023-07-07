import Image from "next/image";
import styles from "./layout.module.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <header>
        <Image
          className={styles.logo}
          src="/icons/logo-devlinks-large.svg"
          alt="devlinks logo"
          width="183"
          height="40"
        />
      </header>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
