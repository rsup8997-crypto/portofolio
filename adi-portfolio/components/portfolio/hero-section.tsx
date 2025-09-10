import { Button } from "@/components/ui/button"
import { Mail, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative py-20 px-4 text-center bg-gradient-to-br from-card to-background mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">ADI KURNIAWAN</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
          Industrial Engineering Student & Project Engineer
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          7th-semester Industrial Engineering student with experience in project engineering, supply chain management,
          and quality control. Passionate about optimizing processes and driving operational excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
          <Button variant="outline" size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  )
}
