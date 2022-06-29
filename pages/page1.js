import Link from "next/link";

export default function Page1() {
  return (
    <div>
      <h1>page 1</h1>
      <Link href="/page2">
        <a>page2</a>
      </Link>
    </div>
  );
}
