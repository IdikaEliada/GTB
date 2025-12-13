import Image from "next/image"

export function NetworkVisualization() {
  return (
    <section className="w-full py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/new%20images/right.jpg"
            alt="The right opportunity is here"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
