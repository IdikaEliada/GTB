import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="relative w-full py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: "url(/new%20images/How%20to%20Overcome%20Failure%20and%20Move%20on%20in%20Life_.jfif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        <p className="text-xl md:text-2xl text-white leading-relaxed font-semibold">
          WELCOME TO GLOBAL TEAM BUILDERS WHERE YOUR SUCCESS IS BUILT FOR YOU.
        </p>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          We sign you up into S.B.I, our anchor program for free. You activate your account by buying two downlines.We take it up from there and build a global team for you.You earn weekly.This is your turning point,health,wealth and global expansion in one move.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-cyan-400 hover:bg-cyan-500 text-black text-lg px-12 py-4 rounded-full font-semibold shadow-lg"
            >
              Sign Up Free
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
