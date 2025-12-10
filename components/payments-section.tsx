import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export function PaymentsSection() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#0A0F29] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Wellness + Wealth
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0F29] mb-4">
              Stem Cell Activation that powers your journey.
            </h2>
            <p className="text-[#848794] mb-8 text-lg">
              A Stem Cell Activator supports your body to repair itself naturally boosting energy, immunity, and
              rejuvenation as you start earning.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <img src="/icons/all-in-one.svg" alt="Rejuvenate icon" className="w-6 h-6" />
                </div>
                <span className="text-[#848794] text-lg">Rejuvenates tissues and enhances natural healing.</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <img src="/icons/built-in.svg" alt="Energy icon" className="w-6 h-6" />
                </div>
                <span className="text-[#848794] text-lg">Boosts energy, vitality, and immune strength.</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <img src="/icons/rich-responsive.svg" alt="Longevity icon" className="w-6 h-6" />
                </div>
                <span className="text-[#848794] text-lg">Supports longevity, organ function, and youthful health.</span>
              </div>
            </div>

            <Link href="/signup">
              <Button className="bg-[#5C4DFF] hover:bg-[#5C4DFF]/90 text-white px-8 py-3 rounded-full text-lg">
                Sign Up Free
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] rounded-2xl p-8">
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-[#0A0F29] text-lg">Activation Kit</h3>
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-[#848794]">Two bottles of Allimax Stem Cell Activator</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-[#848794]">Instant access to the Global Team Builders system</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-[#848794]">Your team starts growing after activation</span>
                    </div>
                  </div>

                  <Link href="/signup">
                    <Button className="w-full bg-[#5C4DFF] hover:bg-[#5C4DFF]/90 text-white rounded-full py-3">
                      Activate & Earn
                    </Button>
                  </Link>
                </div>

                <div className="bg-white rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-[#0A0F29]">One-Time Activation</h3>
                    <span className="text-green-600 font-semibold">₦57,000 or $41</span>
                    <p className="text-[#848794] text-sm">Covers downlines + processing enrollment stays free.</p>
                  </div>
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
