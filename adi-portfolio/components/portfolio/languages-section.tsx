import { Card, CardContent } from "@/components/ui/card"

export function LanguagesSection() {
  return (
    <section id="languages" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-2">Indonesian</h3>
              <p className="text-muted-foreground">Native (Spoken and Written)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-2">English</h3>
              <p className="text-muted-foreground">Intermediate (Spoken and Written)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
