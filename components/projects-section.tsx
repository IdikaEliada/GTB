import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProjectsSection() {
  return (
    <section id="earnings" className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#0A0F29] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              What You Earn & Enjoy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0F29] mb-4">
              Weekly income, big awards, and life-changing perks.
            </h2>
            <p className="text-[#848794] mb-8">
              As your team grows through the Global Team Builders system, you unlock continuous rewards.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#5C4DFF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="/icons/all-in-one.svg" alt="Cash bonuses icon" className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A0F29] mb-1">Cash Rewards</h3>
                  <p className="text-[#848794] text-sm">Weekly cash bonuses plus big cash awards as you scale.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#4F9CF9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="/icons/built-in.svg" alt="Gadgets icon" className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A0F29] mb-1">Electronics & Travel</h3>
                  <p className="text-[#848794] text-sm">
                    Phones, laptops, international trips, and global experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#5C4DFF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="/icons/built-for-creators.svg" alt="Awards icon" className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A0F29] mb-1">Big Lifestyle Awards</h3>
                  <p className="text-[#848794] text-sm">
                    Car awards, jeep awards, bungalow and duplex house awards as your team expands.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/signup">
              <Button className="bg-[#5C4DFF] hover:bg-[#5C4DFF]/90 text-white px-8 py-3 rounded-full">
                Sign Up Free
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#5C4DFF] to-[#8B5CF6] rounded-2xl p-8 overflow-hidden">
              <img
                src="/new%20images/%F0%9F%8C%9F%20Achieving%20success%20online%20isn%27t%20just%20about%20luck%E2%80%A6.jfif"
                alt="Rewards preview"
                className="w-full h-auto transform rotate-12 translate-x-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
