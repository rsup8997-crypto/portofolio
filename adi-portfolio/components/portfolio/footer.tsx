import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
        <p className="mb-6 text-primary-foreground/90">
          Interested in supply chain management and process optimization? Let's discuss opportunities.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="secondary" size="sm">
            <Mail className="mr-2 h-4 w-4" />
            Email Me
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </div>
    </footer>
  )
}
