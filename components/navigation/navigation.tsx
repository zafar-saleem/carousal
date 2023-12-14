import Link from "next/link";

export const Navigation = () => {
  return (
    <nav>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/1">Store</Link>
      </li>
    </nav>
  )
}