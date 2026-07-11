import { useState } from 'react'
import emailjs from 'emailjs-com'
import emailConfig from '../config/emailjs'
import PageHeader from '../components/PageHeader'

function Quote() {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    country: '',
    product: '',
    quantity: '',
    requirement: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  const validate = () => {
    const nextErrors = {}
    if (!form.fullName.trim()) nextErrors.fullName = 'Full name is required.'
    if (!form.companyName.trim()) nextErrors.companyName = 'Company name is required.'
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email.'
    if (!form.phone.trim()) nextErrors.phone = 'Phone is required.'
    if (!form.product.trim()) nextErrors.product = 'Product is required.'
    if (!form.requirement.trim()) nextErrors.requirement = 'Requirement is required.'
    return nextErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setLoading(true)
    setSuccess('')

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: form.fullName,
          company_name: form.companyName,
          email: form.email,
          phone: form.phone,
          city: form.city,
          state: form.state,
          country: form.country,
          product: form.product,
          quantity: form.quantity,
          requirement: form.requirement,
        },
        emailConfig.publicKey,
      )
      setSuccess('Your request has been submitted successfully. We will get back to you shortly.')
      setForm({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        country: '',
        product: '',
        quantity: '',
        requirement: '',
      })
    } catch (error) {
      setSuccess('Unable to send request at the moment. Please contact us directly at aurixpolypack@gmail.com.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <PageHeader title="Quote Request" subtitle="Request a tailored quote for your business" />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft lg:p-10">
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            {[
              ['fullName', 'Full Name *'],
              ['companyName', 'Company Name *'],
              ['email', 'Email *'],
              ['phone', 'Phone *'],
              ['city', 'City'],
              ['state', 'State'],
              ['country', 'Country'],
              ['product', 'Product *'],
              ['quantity', 'Quantity'],
            ].map(([name, label]) => (
              <div key={name} className="flex flex-col gap-1">
                <label className="text-sm font-medium text-primary">{label}</label>
                <input
                  value={form[name]}
                  onChange={(e) => setForm({ ...form, [name]: e.target.value })}
                  className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-gold"
                />
                {errors[name] && <span className="text-sm text-red-500">{errors[name]}</span>}
              </div>
            ))}

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-primary">Requirement *</label>
              <textarea rows="5" value={form.requirement} onChange={(e) => setForm({ ...form, requirement: e.target.value })} className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-gold" />
              {errors.requirement && <span className="text-sm text-red-500">{errors.requirement}</span>}
            </div>

            <div className="md:col-span-2">
              <button type="submit" disabled={loading} className="w-full rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-darkBlue disabled:cursor-not-allowed disabled:opacity-70">
                {loading ? 'Sending...' : 'Submit Quote Request'}
              </button>
            </div>
            {success && <p className="md:col-span-2 rounded-xl bg-slate-100 p-3 text-sm text-primary">{success}</p>}
          </form>
        </div>
      </section>
    </main>
  )
}

export default Quote
