import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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

            <h3 className="text-2xl font-bold text-white">Aurix Polypack</h3>
          </div>

          <p className="text-sm leading-7 text-slate-300">
            A trusted name in premium PP woven fabric and packaging solutions
            with a commitment to quality and innovation.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <Link to="/about" className="hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gold">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/quote" className="hover:text-gold">
                Quote
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Contact</h4>

          <ul className="space-y-3 text-sm text-slate-300">
            <li>Thorala Road, At Rajpar, Morbi - 363641, Gujarat, India</li>

            <li className="flex items-center gap-3 flex-wrap">
              <a
                href="tel:+919979936435"
                className="transition hover:text-gold"
              >
                +91 99799 36435
              </a>

              <span>|</span>

              <a
                href="tel:+919925852651"
                className="transition hover:text-gold"
              >
                +91 99258 52651
              </a>
            </li>

            <li>
              <a
                href="mailto:aurixpolypack@gmail.com"
                className="transition hover:text-gold"
              >
                aurixpolypack@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Follow Us</h4>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61591848421666"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 hover:bg-gold transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/aurix_polypack/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 hover:bg-gold transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/aurix-polypack/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 hover:bg-gold transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-300">
        © 2026 Aurix Polypack. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
