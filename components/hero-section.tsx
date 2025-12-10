import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-gradient-to-b from-white to-[#EEF0FF]">
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#0A0F29]">
          Your Fastest Route to Wealth, Health & Global Success
        </h1>
        <p className="text-xl md:text-2xl text-[#3B3F4C] leading-relaxed">
          Ambitious? Hungry for success? Ready to break free from financial limits and start earning without building a
          network alone? Join the global team partnered with S.B.I and tap into the revolutionary Stem Cell Activator
          movement.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup">
            <Button
              size="lg"
              className="text-white text-lg px-10 py-4 rounded-full shadow-lg"
              style={{ background: "#5C4DFF" }}
            >
              Sign Up Free
            </Button>
          </Link>
          <p className="text-sm text-[#5C4DFF] font-medium">
            We register you for free. After activation, we build your global team while you earn.
          </p>
        </div>
      </div>

      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: "#5C4DFF" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full animate-pulse delay-300"
          style={{ backgroundColor: "#848794" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full animate-pulse delay-700"
          style={{ backgroundColor: "#5C4DFF" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full animate-pulse delay-1000"
          style={{ backgroundColor: "#848794" }}
        ></div>
      </div>
    </section>
  )
}
