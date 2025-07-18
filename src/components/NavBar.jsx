import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-accent">NM MishrDhatu </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-accent">Home</Link></li>
          <li><Link to="/about" className="hover:text-accent">About</Link></li>
          <li><Link to="/products" className="hover:text-accent">Products</Link></li>
          <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown with Backdrop */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black opacity-40 z-40"
            onClick={() => setOpen(false)}
          ></div>

          {/* Dropdown Menu */}
          <div className="md:hidden bg-white text-primary absolute top-full left-0 w-full shadow-xl rounded-b-xl py-4 px-6 space-y-4 transition-all duration-300 transform translate-y-2 z-50">
            <Link to="/" onClick={() => setOpen(false)} className="block hover:text-accent">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="block hover:text-accent">About</Link>
            <Link to="/products" onClick={() => setOpen(false)} className="block hover:text-accent">Products</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-accent">Contact</Link>
          </div>
        </>
      )}
    </nav>
  );
}
