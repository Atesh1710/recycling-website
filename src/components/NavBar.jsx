import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-accent">IronCast Co.</Link>
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-accent">Home</Link></li>
          <li><Link to="/about" className="hover:text-accent">About</Link></li>
          <li><Link to="/products" className="hover:text-accent">Products</Link></li>
          <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
        </ul>
        <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden bg-primary text-white px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
