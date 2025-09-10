import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Core Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Communication</Badge>
                <Badge variant="secondary">Problem Solving</Badge>
                <Badge variant="secondary">Teamwork</Badge>
                <Badge variant="secondary">Graphic Design</Badge>
                <Badge variant="secondary">3D Design</Badge>
                <Badge variant="secondary">Data Analysis</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Microsoft Office</Badge>
                <Badge>CorelDRAW</Badge>
                <Badge>SPSS</Badge>
                <Badge>Minitab</Badge>
                <Badge>AutoCAD</Badge>
                <Badge>Inventor</Badge>
                <Badge>RapidMiner</Badge>
                <Badge>Arena Simulation</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
