import { motion } from "framer-motion";
import ContactInfo from "../components/ContactInfo";
import PageHeader from "../components/PageHeader";
import { useState } from "react";
import emailjs from 'emailjs-com'
import emailConfig from '../config/emailjs'

function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.contactTemplateId,
        {
          from_name: form.fullName,
          company_name: form.companyName,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        },
        emailConfig.publicKey,
      );

      setSuccess(
        "Your message has been sent successfully. We will contact you shortly.",
      );

      setForm({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.log(err);

      setSuccess("Unable to send your message. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <main>
      <PageHeader
        title="Contact Us"
        subtitle="We are ready to assist with your next packaging project"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="mb-8 text-center">
            <h2 className="mt-3 text-3xl font-semibold text-primary">
              OUR FACTORY ADDRESS
            </h2>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-slate-200 shadow-soft">
            <iframe
              title="Aurix Polypack Map"
              src="https://www.google.com/maps?q=Aurix+Polypack%2C+22.768626895107367%2C70.72085234303887&ll=22.768626895107367,70.72085234303887&z=16&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
          <div className="mt-2 grid gap-2 rounded-3xl border border-slate-200 bg-background p-6 text-center sm:grid-cols-2 sm:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                Location
              </p>
              <p className="mt-3 text-base font-medium text-primary">
                Aurix Polypack
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                Address
              </p>
              <p className="mt-3 text-base font-medium text-primary">
                Thorala Rd, At, Rajpar, Thorala, Gujarat 363641
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Get in Touch
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-primary">
              Send us a message
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
              Share your project requirements and our team will get back to you
              quickly with a tailored solution.
            </p>
          </div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name *"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="rounded-3xl border border-slate-300 bg-background px-4 py-4 text-sm outline-none transition focus:border-primary"
                required
              />

              <input
                type="text"
                placeholder="Company Name *"
                value={form.companyName}
                onChange={(e) =>
                  setForm({ ...form, companyName: e.target.value })
                }
                className="rounded-3xl border border-slate-300 bg-background px-4 py-4 text-sm outline-none transition focus:border-primary"
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="email"
                placeholder="Email *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-3xl border border-slate-300 bg-background px-4 py-4 text-sm outline-none transition focus:border-primary"
                required
              />

              <input
                type="tel"
                placeholder="Phone *"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-3xl border border-slate-300 bg-background px-4 py-4 text-sm outline-none transition focus:border-primary"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject *"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="rounded-3xl border border-slate-300 bg-background px-4 py-4 text-sm outline-none transition focus:border-primary"
              required
            />

            <textarea
              rows={6}
              placeholder="Message *"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="rounded-3xl border border-slate-300 bg-background px-4 py-4 text-sm outline-none transition focus:border-primary"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="mx-auto rounded-full bg-primary px-10 py-3 text-sm font-semibold text-white transition hover:bg-darkBlue disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {success && (
              <div className="rounded-xl bg-slate-100 p-4 text-center text-primary">
                {success}
              </div>
            )}
          </motion.form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
