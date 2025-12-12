import { Button } from "@/components/ui/button"
import Link from "next/link"

export function IntelligenceSection() {
  return (
    <section id="who" className="w-full py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8">
              <img
                src="/new%20images/Got%20Grit_%206%20Steps%20to%20Become%20a%20High%20Achiever%20in%20Life%20-%20GoodTherapy_org%20Therapy%20Blog.jfif"
                alt="Global Team Builders mobile app preview"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center px-6 py-3 bg-red-600 text-white text-base font-bold rounded-full mb-6 shadow-lg">
              Who We're Looking For
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ambitious, hungry for success, ready to change levels.
            </h2>
            <p className="text-muted-foreground mb-8">
              If you are tired of struggling alone and want a business that grows for you, you’re in the right place.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <img src="/icons/built-in.svg" alt="Action taker icon" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Action-takers</h3>
                  <p className="text-muted-foreground text-sm">
                    People hungry for success and ready to move fast.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <img src="/icons/rich-responsive.svg" alt="Team support icon" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Those tired of grinding alone</h3>
                  <p className="text-muted-foreground text-sm">
                    We remove the struggle our team and system build with you.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <img src="/icons/built-for-creators.svg" alt="Growth icon" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Ready for global growth</h3>
                  <p className="text-muted-foreground text-sm">
                    Plug into a global strategy and automated team-building.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/signup">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
                Sign Up Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
