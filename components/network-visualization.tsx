import Image from "next/image"

export function NetworkVisualization() {
  return (
    <section className="w-full py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden">
          <div className="w-full h-[500px] md:h-[600px] overflow-hidden">
            <Image
              src="/new%20images/right.jpg"
              alt="The right opportunity is here"
              width={1200}
              height={800}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
