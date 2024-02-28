import Link from "next/link";

export default function Nav() {
  return (
    <div className="text-center p-5 bg-slate-600">
      <Link className="p-3" href="/">
        Home
      </Link>
      <Link className="p-3" href="/about">
        About
      </Link>
      <Link className="p-3" href="/posts">
        Posts
      </Link>
    </div>
  );
}
