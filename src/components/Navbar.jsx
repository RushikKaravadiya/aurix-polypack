import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/horizontalLogo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      {/* <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"> */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
       <Link to="/" className="flex items-center border-0 outline-none">
  <img
    src={logo}
    alt="Aurix Polypack logo"
    className="h-36 w-auto object-contain border-0 outline-none"
  />
</Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={scrollToTop}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? "text-gold" : "text-primary hover:text-gold"}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/quote"
            onClick={scrollToTop}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-darkBlue"
          >
            Quote Us
          </Link>
        </nav>

        <button
          className="rounded-full p-2 text-primary lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `rounded px-3 py-2 text-sm font-medium ${isActive ? "bg-primary text-white" : "text-primary"}`
                }
                onClick={() => {
                  setMenuOpen(false)
                  scrollToTop()
                }}
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/quote"
              onClick={() => {
                setMenuOpen(false)
                scrollToTop()
              }}
              className="rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Quote Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
