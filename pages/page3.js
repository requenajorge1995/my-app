import Link from "next/link";

export default function Page3() {
  return (
    <div>
      <h1>page 3</h1>
      <Link href="/page2">
        <a>page2</a>
      </Link>
    </div>
  );
}
