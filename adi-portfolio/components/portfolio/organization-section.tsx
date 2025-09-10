import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function OrganizationSection() {
  return (
    <section id="organization" className="py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Organizational Experience</h2>
        <Card>
          <CardHeader>
            <CardTitle>Media Coordinator</CardTitle>
            <CardDescription>FORSIMBA - Forum of Batang Students in Yogyakarta • Nov 2024 - Present</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Documented events (photos/videos) and created graphic designs for major events</li>
              <li>
                • Designed posters and Instagram content for Kapang (Batang cultural show), Forsimba Cup (Futsal
                tournament), and Batang Cultural Creativity
              </li>
              <li>• Contributed to the success of all FORSIMBA events</li>
              <li>• Arranged task division for the media and publication division</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
