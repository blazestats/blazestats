import Link from "next/link";
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Navigation() {
  const auth = useAuth();

  return (
    <nav className="flex flex-row justify-center bg-gray-50">
      <div className="flex w-full max-w-screen-lg flex-row items-center gap-4 p-4">
        <Link
          href={auth.isSignedIn ? "/dashboard" : "/"}
          className="text-xl font-extrabold tracking-tight text-rose-950"
        >
          <span className="text-rose-600">Blaze</span>Stats
        </Link>
        <div className="flex flex-grow flex-row items-center gap-2 text-right">
          <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/dashboard/sites">Sites</Link>
            <Link href="#">Billing</Link>
            <Link href="#">Documentation</Link>
          </SignedIn>
          <SignedOut>
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Documentation</Link>
          </SignedOut>
        </div>
        <SignedIn>
          <UserButton
            showName={true}
            appearance={{ variables: { fontFamily: inter.style.fontFamily } }}
          />
        </SignedIn>
        <SignedOut>
          <Link href="/login">Log in</Link>
          <Link href="#">Sign up</Link>
        </SignedOut>
      </div>
    </nav>
  );
}
