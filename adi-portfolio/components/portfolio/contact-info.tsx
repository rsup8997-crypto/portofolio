import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-12 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm">Batang, Central Java</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span className="text-sm">adik62029@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-sm">085219954737</span>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="h-5 w-5 text-primary" />
            <span className="text-sm">adi-kurniawan-5197a0263</span>
          </div>
        </div>
      </div>
    </section>
  )
}
