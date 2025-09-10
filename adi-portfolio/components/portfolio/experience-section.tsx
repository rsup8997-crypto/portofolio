import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Project Engineer</CardTitle>
              <CardDescription>PT. WANHO INDUSTRIES INDONESIA • Jul 2024 - Sep 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Collaborated on 3D product prototype designs</li>
                <li>
                  • Created operating manuals for 3D scanner, ultrasonic cleaning machine, CNC laser, UV dryer, and 3D
                  printer
                </li>
                <li>• Evaluated trial results of product TCT 005 focusing on 3D design and molding</li>
                <li>• Assembled product prototypes and evaluated defects before delivery to customers</li>
                <li>• Analyzed design and production defects and improved 3D product design based on trial findings</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Part Time Shopkeeper</CardTitle>
              <CardDescription>ZEVA.CO • Dec 2021 - Aug 2022</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Recorded daily sales data and assisted customers to build trust in services</li>
                <li>• Helped achieve a record 190 transactions/day with over IDR 6 million in revenue</li>
                <li>• Analyzed and processed monthly sales data</li>
                <li>• Designed promotional pamphlets for product marketing and discounts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Designer & Documenter</CardTitle>
              <CardDescription>ICT Center SMK N1 Batang • Jun 2021 - Dec 2021</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Designed pamphlets for school activities and marketed keychain and pin products</li>
                <li>• Created promotional pamphlets and promoted products</li>
                <li>• Documented school activities and external events (weddings, workshops)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
