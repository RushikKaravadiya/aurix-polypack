import { motion } from 'framer-motion'
import ContactInfo from '../components/ContactInfo'
import PageHeader from '../components/PageHeader'

function Contact() {
  return (
    <main>
      <PageHeader title="Contact Us" subtitle="We are ready to assist with your next packaging project" />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ContactInfo />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Location</p>
            <h2 className="mt-3 text-3xl font-semibold text-primary">Our factory address</h2>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-slate-200 shadow-soft">
            <iframe
              title="Aurix Polypack Map"
              src="https://www.google.com/maps?q=Aurix+Polypack%2C+22.768626895107367%2C70.72085234303887&ll=22.768626895107367,70.72085234303887&z=16&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
          {/* <div className="mt-6 grid gap-4 rounded-3xl border border-slate-200 bg-background p-6 text-center sm:grid-cols-3 sm:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Location</p>
              <p className="mt-3 text-base font-medium text-primary">Aurix Polypack</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Address</p>
              <p className="mt-3 text-base font-medium text-primary">Thorala Rd, At, Rajpar, Thorala, Gujarat 363641</p>
            </div>
          </div> */}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Get in Touch</p>
            <h2 className="mt-3 text-3xl font-semibold text-primary">Send us a message</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">Share your project requirements and our team will get back to you quickly with a tailored solution.</p>
          </div>
          <motion.form initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-6">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-3xl border border-slate-300 bg-background px-4 py-4 text-sm outline-none transition focus:border-primary" placeholder="Full Name *" />
              <input className="rounded-3xl border border-slate-300 bg-background px-4 py-4 text-sm outline-none transition focus:border-primary" placeholder="Company Name" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-3xl border border-slate-300 bg-background px-4 py-4 text-sm outline-none transition focus:border-primary" placeholder="Email *" />
              <input className="rounded-3xl border border-slate-300 bg-background px-4 py-4 text-sm outline-none transition focus:border-primary" placeholder="Phone *" />
            </div>
            <input className="rounded-3xl border border-slate-300 bg-background px-4 py-4 text-sm outline-none transition focus:border-primary" placeholder="Subject *" />
            <textarea rows="6" className="rounded-3xl border border-slate-300 bg-background px-4 py-4 text-sm outline-none transition focus:border-primary" placeholder="Message *" />
            <button className="mx-auto rounded-full bg-primary px-10 py-3 text-sm font-semibold text-white transition hover:bg-darkBlue">Submit</button>
          </motion.form>
        </div>
      </section>
    </main>
  )
}

export default Contact
