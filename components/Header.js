import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <Link href="/" passHref>
            <h1>Dev Blog</h1>
          </Link>
        </div>
      </header>
    </>
  );
}
