export function NetworkVisualization() {
  return (
    <section className="w-full py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 rounded-2xl p-8 relative overflow-hidden">
          {/* Network nodes and connections */}
          <div className="relative h-64 md:h-80">
            {/* Animated network lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Network connections */}
              <path
                d="M50,100 L150,50 L250,120 L350,80"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M80,200 L180,150 L280,220 L380,180"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse delay-500"
              />
              <path
                d="M100,250 L200,200 L300,270 L400,230"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse delay-1000"
              />

              {/* Network nodes */}
              <circle cx="50" cy="100" r="4" fill="#3b82f6" className="animate-pulse" />
              <circle cx="150" cy="50" r="6" fill="#8b5cf6" className="animate-pulse delay-300" />
              <circle cx="250" cy="120" r="5" fill="#3b82f6" className="animate-pulse delay-600" />
              <circle cx="350" cy="80" r="4" fill="#8b5cf6" className="animate-pulse delay-900" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
