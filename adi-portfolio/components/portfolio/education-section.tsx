import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function EducationSection() {
  return (
    <section id="education" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Universitas Teknologi Yogyakarta</CardTitle>
              <CardDescription>Industrial Engineering • Sep 2022 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold mb-4">GPA: 3.43 of 4.00</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Relevant Courses:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Supply Chain Systems (Grade: A)</li>
                    <li>• Purchasing and Inventory Management (Grade: B)</li>
                    <li>• Metaheuristics for Logistics (Grade: B)</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-1 text-sm mt-6 md:mt-0">
                    <li>• Lean Manufacturing (Grade: B)</li>
                    <li>• Cost Analysis and Control (Grade: B)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SMK N1 Batang</CardTitle>
              <CardDescription>Multimedia • Jul 2019 - Jun 2022</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">Average: 84.88</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
