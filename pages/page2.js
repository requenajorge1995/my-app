import Link from "next/link";

export default function Page2() {
  return (
    <div>
      <h1>page 2</h1>
      <Link href="/page1">
        <a>page1</a>
      </Link>
      <Link href="/page3">
        <a>page3</a>
      </Link>
    </div>
  );
}
