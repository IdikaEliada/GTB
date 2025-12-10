import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function MarketplaceSection() {
  return (
    <section id="activation" className="w-full py-20 px-6 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-[#0A0F29] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Fast-Track Activation
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0F29] mb-4">
            Enroll Free. Activate Once. We Build Your Team.
          </h2>
          <p className="text-[#848794] text-lg max-w-3xl">
            Join Global Team Builders under S.B.I with a simple one-time activation. No previous experience required once
            you activate, we handle the heavy lifting while you earn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/new%20images/Money%20Flying%20In%20The%20Air%20-%20Art%20Print.jfif"
              alt="Global Team Builders mobile preview"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <Card className="bg-[#B794F6] border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-white rounded"></div>
                </div>
                <h3 className="font-semibold text-white text-xl mb-2">Activate Your Account</h3>
                <p className="text-white/80 text-sm mb-4 space-y-2">
                  <span className="block">Registration: Free</span>
                  <span className="block">Buy two downlines to activate: ₦52,000 or $37</span>
                  <span className="block">Processing fee: ₦5,000 or $4</span>
                  <span className="block font-semibold">Total one-time activation: ₦57,000 or $41</span>
                </p>
                <div className="flex items-center text-white font-medium">
                  We set you up no stress.
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#63B3ED] border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-white rounded"></div>
                </div>
                <h3 className="font-semibold text-white text-xl mb-2">Activation Bonus</h3>
                <p className="text-white/80 text-sm mb-4">
                  Immediately after activation, you receive two bottles of Allimax Stem Cell Activator premium wellness
                  support as you start your wealth journey.
                </p>
                <div className="flex items-center text-white font-medium">
                  Stay energized, healthy, and mentally sharp.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
