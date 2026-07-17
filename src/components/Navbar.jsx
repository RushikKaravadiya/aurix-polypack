import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" style={{paddingLeft: "0px",}}>
        {/* Logo */}
        <Link
          to="/"
          onClick={scrollToTop}
          className="flex items-center flex-shrink-0"
        >
          <img
            src="/images/horizontalLogo.png"
            alt="Aurix Polypack"    
            className="h-24 w-auto object-contain scale-125 origin-left"
            // style={{ marginTop: "16px" }}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={scrollToTop}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors duration-300 ${
                  isActive ? "text-gold" : "text-primary hover:text-gold"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/quote"
            onClick={scrollToTop}
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-darkBlue"
          >
            Quote Us
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 text-primary lg:hidden"
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="flex flex-col px-5 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => {
                  setMenuOpen(false);
                  scrollToTop();
                }}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-primary hover:bg-slate-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/quote"
              onClick={() => {
                setMenuOpen(false);
                scrollToTop();
              }}
              className="mt-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white"
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
