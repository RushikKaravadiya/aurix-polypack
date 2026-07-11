import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

function ContactInfo() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      <div className="flex h-full flex-col items-center justify-center rounded-[32px] border border-slate-200 bg-white p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center justify-center gap-3 pb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-white shadow-soft">
            <FaMapMarkerAlt />
          </div>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Address</p>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          Thorala Rd, At, Rajpar, Thorala,
          <br /> Gujarat 363641
        </p>
      </div>

      <div className="flex h-full flex-col items-center justify-center rounded-[32px] border border-slate-200 bg-white p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center justify-center gap-3 pb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-white shadow-soft">
            <FaPhoneAlt />
          </div>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Phone</p>
        <a href="tel:+919979936435" className="mt-4 text-sm leading-7 text-slate-600 hover:text-gold">+91 99799 36435</a>
      </div>

      <div className="flex h-full flex-col items-center justify-center rounded-[32px] border border-slate-200 bg-white p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center justify-center gap-3 pb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-white shadow-soft">
            <FaEnvelope />
          </div>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Email</p>
        <a href="mailto:aurixpolypack@gmail.com" className="mt-4 text-sm leading-7 text-slate-600 hover:text-gold">aurixpolypack@gmail.com</a>
      </div>

      <div className="flex h-full flex-col items-center justify-center rounded-[32px] border border-slate-200 bg-white p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center justify-center gap-3 pb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-white shadow-soft">
            <FaClock />
          </div>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Working Hours</p>
        <p className="mt-4 text-sm leading-7 text-slate-600">Mon - Sat • 9:00 AM - 6:00 PM</p>
      </div>
    </div>
  )
}

export default ContactInfo
