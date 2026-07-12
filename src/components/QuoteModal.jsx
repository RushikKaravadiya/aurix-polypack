import { useState } from 'react'
import emailjs from 'emailjs-com'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import emailConfig from '../config/emailjs'

const initialState = {
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
  file: '',
}

function QuoteModal({ open, onClose }) {
  const [form, setForm] = useState(initialState)
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
        emailConfig.quoteTemplateId,
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
      setSuccess('Your quote request has been sent successfully. We will contact you shortly.')
      setForm(initialState)
    } catch (error) {
      setSuccess('Unable to send your request right now. Please contact us directly at aurixpolypack@gmail.com.')
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 px-4 py-6"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] bg-white p-6 shadow-2xl sm:p-8"
        >
          <button onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 text-primary hover:bg-slate-100">
            <FiX size={20} />
          </button>
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Request a Quote</p>
            <h2 className="mt-2 text-3xl font-semibold text-primary">Tell us about your packaging requirement</h2>
          </div>

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
                  className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-gold"
                />
                {errors[name] && <span className="text-sm text-red-500">{errors[name]}</span>}
              </div>
            ))}

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-primary">Requirement *</label>
              <textarea
                rows="4"
                value={form.requirement}
                onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-gold"
              />
              {errors.requirement && <span className="text-sm text-red-500">{errors.requirement}</span>}
            </div>
            <div className="md:col-span-2">
              <button type="submit" disabled={loading} className="w-full rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-darkBlue disabled:cursor-not-allowed disabled:opacity-70">
                {loading ? 'Sending...' : 'Send Quote Request'}
              </button>
            </div>

            {success && <p className="md:col-span-2 rounded-xl bg-slate-100 p-3 text-sm text-primary">{success}</p>}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default QuoteModal
