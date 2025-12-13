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
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
          GLOBAL TEAM BUILDERS
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Your Fastest Route to Wealth, Health & Global Success
        </h2>
        <div className="space-y-4 mb-8 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-200 font-medium">
            Ambitious? Hungry for Success?
          </p>
          <p className="text-lg md:text-xl text-gray-200">
            Ready to break free from financial limits and start earning without building a network alone?
          </p>
          <p className="text-lg md:text-xl text-gray-200">
            Join the global team partnered with S.B.I and tap into the revolutionary Stem Cell Activator movement.
          </p>
        </div>
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
