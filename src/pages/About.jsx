import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'

const strengths = ['Advanced infrastructure', 'Experienced engineering team', 'Stringent quality controls', 'Customized production capabilities']

function About() {
  return (
    <main>
      <PageHeader title="About Us" subtitle="Delivering performance and trust through every woven product" />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80" alt="Manufacturing unit" className="h-[450px] w-full rounded-[32px] object-cover shadow-soft" />
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-primary">Company Introduction</h2>
            <p className="text-lg leading-8 text-slate-600">Aurix Polypack is a dedicated PP woven fabric manufacturer specializing in high-quality woven fabrics, bags, tarpaulin, and related packaging products for domestic and international clientele.</p>
            <p className="text-lg leading-8 text-slate-600">Our manufacturing processes are designed to deliver robust products with excellent finish, reliable performance, and cost-effective value for every customer.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-3xl border border-slate-200 p-8">
            <h3 className="text-2xl font-semibold text-primary">Mission</h3>
            <p className="mt-3 text-slate-600">To manufacture durable, innovative, and sustainable woven packaging that empowers businesses globally.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-8">
            <h3 className="text-2xl font-semibold text-primary">Vision</h3>
            <p className="mt-3 text-slate-600">To become a benchmark in quality, reliability, and customer satisfaction across the packaging industry.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-8">
            <h3 className="text-2xl font-semibold text-primary">Quality Policy</h3>
            <p className="mt-3 text-slate-600">We maintain stringent controls and modern standards to ensure every product meets customer expectations.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-background p-8 shadow-soft lg:p-12">
          <h2 className="text-3xl font-semibold text-primary">Our Strength</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {strengths.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
