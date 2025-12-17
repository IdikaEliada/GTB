import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function MarketplaceSection() {
  return (
    <>
      <section id="activation" className="w-full py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-block bg-[#0F172A] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              HOW IT WORKS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              To join the Global Team Builders movement
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/correct%20images/how%20it%20works.jpeg"
                alt="How it works"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="space-y-6">
              <Card className="bg-[#14532D] border-0 rounded-2xl">
                <CardContent className="p-6">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-4 h-4 bg-white rounded"></div>
                  </div>
                  <h3 className="font-semibold text-white text-xl mb-4">Activation Steps</h3>
                  <div className="text-white/90 text-sm mb-4 space-y-2">
                    <p className="block">Registration: Free</p>
                    <p className="block">Activate Your Account: Buy Two Downlines at ₦52,000</p>
                    <p className="block">Processing Fee: ₦5,000</p>
                  </div>
                  <p className="text-white font-semibold mb-4">
                    This one-time activation unlocks your earnings, awards in S.B.I, and full access to the Global Team Builders automated system.
                  </p>
                  <div className="mt-6 space-y-2">
                    <p className="text-white font-semibold mb-2">After activation, Global Team Builders takes it from there:</p>
                    <p className="text-white/90 text-sm">We take full responsibility to build your team</p>
                    <p className="text-white/90 text-sm">We integrate you into our global strategy</p>
                    <p className="text-white/90 text-sm">You start earning weekly commissions</p>
                    <p className="text-white/90 text-sm">You become eligible for awards</p>
                    <p className="text-white/90 text-sm">You receive two bottles of Allimax stem cell stimulator as part of your activation.</p>
                    <p className="text-white font-medium mt-4">All while you watch your team grow.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-6 bg-background">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create more tools and ideas that brings us together.</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
            <a href="#" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              Get started
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
          <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image"/>
          <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/>
          
        </div>
      </section>
        </>
        )
}
