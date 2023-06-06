import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex flex-row justify-center bg-gray-50">
      <div className="flex w-full max-w-screen-lg flex-row items-center gap-4 p-4">
        <h1 className="text-xl font-extrabold tracking-tight text-rose-950">
          <span className="text-rose-600">Blaze</span>Stats
        </h1>
        <div className="flex flex-grow flex-row items-center gap-2 text-right">
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Documentation</Link>
        </div>
      </div>
    </nav>
  );
}
