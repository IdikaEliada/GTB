import Image from 'next/image'

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl font-bold text-[#5C4DFF]">
            <Image src="/logo.png" alt={"logo"} width={78} height={36}/>
            </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
            Zurri AI Models Lab is your all-in-one platform to browse, launch, and monetize AI models and intelligent
            agents.
              </p>
            </div>

            <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-3">
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            About
            </a>
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Model
            </a>
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Datasets
            </a>
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Contact Us
            </a>
            </div>
            </div>

            <div>
            <h3 className="font-semibold text-foreground mb-4">Link</h3>
            <div className="space-y-3">
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Support
            </a>
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Document
            </a>
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Legal
            </a>
            </div>
            </div>

            <div>
            <h3 className="font-semibold text-foreground mb-4">Socials Link</h3>
            <div className="space-y-3">
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Github
            </a>
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Discord
            </a>
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Linkedin
            </a>
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Instagram
            </a>
            </div>
            </div>
            </div>

            <div className="border-t border-border pt-8">
            <div className="text-center mb-6">
            <p className="text-muted-foreground text-sm">Copyright@Zurrilabs2025, All right reserved</p>
            </div>

            <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-muted rounded"></div>
            <span className="text-sm font-medium text-muted-foreground">Logoipsum</span>
            </div>
            <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
            <span className="text-xs font-bold">L</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Logoipsum</span>
            </div>
            <div className="text-lg font-bold text-muted-foreground">IPSUM</div>
            <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded"></div>
            <span className="text-sm font-medium text-muted-foreground">Logoipsum</span>
            </div>
            </div>
            </div>
            </div>
            </footer>
  )
}
