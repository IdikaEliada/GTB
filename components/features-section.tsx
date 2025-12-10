import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function FeaturesSection() {
  return (
    <section id="why" className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="inline-block bg-[#0A0F29] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Why Global Team Builders
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0F29] mb-8">
              You are not alone. We build with you and for you.
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <Image src="/icons/all-in-one.svg" alt="Team support icon" width={20} height={20} />
                </div>
                <p className="text-[#848794] text-lg">We register you into S.B.I for free no experience needed.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <Image src="/icons/built-in.svg" alt="No stress icon" width={20} height={20} />
                </div>
                <p className="text-[#848794] text-lg">No stress. After activation, we build your global team for you.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <Image src="/icons/rich-responsive.svg" alt="Support icon" width={20} height={20} />
                </div>
                <p className="text-[#848794] text-lg">You earn weekly while watching your team grow without grinding alone.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <Image src="/icons/built-for-creators.svg" alt="Global reach icon" width={20} height={20} />
                </div>
                <p className="text-[#848794] text-lg">Plug into our proven global strategy and let automation work for you.</p>
              </div>
            </div>
            <Link href="/signup">
              <Button className="bg-[#5C4DFF] hover:bg-[#5C4DFF]/90 text-white px-8 py-3 rounded-full">
                Sign Up Free
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/new%20images/Success%20Is%20A%20Subjective%20Term.jfif"
                alt="Global collaboration"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
