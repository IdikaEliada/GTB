import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section
      id="join"
      className="w-full py-20 px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url(/new%20images/How%20to%20Overcome%20Failure%20and%20Move%20on%20in%20Life_.jfif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Welcome to Global Team Builders Where Your Success is Built for You
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          You activate your account, we build your global team, you earn weekly. This is your turning point health,
          wealth, and global expansion in one move.
        </p>
        <Link href="/signup">
          <Button
            size="lg"
            className="bg-cyan-400 hover:bg-cyan-500 text-black text-lg px-12 py-4 rounded-full font-semibold"
          >
            Sign Up Free
          </Button>
        </Link>
      </div>
    </section>
  )
}
