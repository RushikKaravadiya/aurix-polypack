import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Footer() { 
  return (
    <footer className="border-t border-slate-200 bg-primary px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-4">
       <div>
<div className="mb-4 flex items-center gap-3">
  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-white p-2">
    <img
  src="/images/logo.png"
  alt="Aurix Polypack logo"
  className="h-10 w-10 object-contain"
/>
  </div>

  <h3 className="text-2xl font-bold text-white">
    Aurix Polypack
  </h3>
</div>

  <p className="text-sm leading-7 text-slate-300">
    A trusted name in premium PP woven fabric and packaging
    solutions with a commitment to quality and innovation.
  </p>
</div>
        <div>
          <h4 className="mb-4 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/products" className="hover:text-gold">Products</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link to="/quote" className="hover:text-gold">Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Thorala road, At Rajpar, Morbi-363641, Gujarat, India</li>
            <li>+91 99799 36435</li>
            <li>aurixpolypack@gmail.com</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Follow Us</h4>
          <div className="flex gap-3">
            <a href="https://facebook.com" className="rounded-full bg-white/10 p-3 hover:bg-gold"><FaFacebookF /></a>
            <a href="https://instagram.com" className="rounded-full bg-white/10 p-3 hover:bg-gold"><FaInstagram /></a>
            <a href="https://linkedin.com" className="rounded-full bg-white/10 p-3 hover:bg-gold"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-300">
        © 2026 Aurix Polypack. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
