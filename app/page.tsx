import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link"
import Footer from './components/footer';

export default function Home() {
  return (
    <>
  <main className="bg-[#FAFAFA] relative">
    <div className="w-full bg-white max-w-[75rem] mx-auto flex flex-col border-l border-r border-[#F2F2F2] row-span-3">
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#F2F2F2]" />

      {/* Added logo image */}
      <div className="flex justify-center py-4">
        <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
      </div>

      <div className="p-10 border-b border-[#F2F2F2]">
        <h1 className="text-5xl font-bold tracking-tight text-[#131316] relative">
          QnsAI Website
        </h1>

        <p className="text-[#5E5F6E] pt-3 pb-6 max-w-[30rem] text-[1.0625rem] relative">
          Start editing this page.
        </p>
        <div className="relative flex gap-3">
          <SignedIn>
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold"
            >
              Dashboard
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</>
  )
}
