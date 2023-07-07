import Image from "next/image";

export default function AuthLayout({
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
      </header>
      <main>{children}</main>
    </>
  );
}
