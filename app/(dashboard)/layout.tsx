import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Image
          src="/icons/logo-devlinks-large.svg"
          alt="devlinks logo"
          width="183"
          height="40"
        />
        <nav>
          <Link href="/links">Links</Link>
          <Link href="/profile">Profile Details</Link>
          <Link href="/u/123">Preview</Link>
        </nav>
      </header>
      <main>
        <aside>
          <Image
            src="/icons/illustration-phone-mockup.svg"
            alt="profile preview in phone mockup"
            width="308"
            height="632"
          />
        </aside>

        <section>{children}</section>
      </main>
    </>
  );
}
