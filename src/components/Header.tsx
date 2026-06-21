"use client";

import { useState, useEffect } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#research", label: "Research" },
  { href: "#academic", label: "Academic" },
  { href: "#appointment", label: "Appointment" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white shadow-lg shadow-teal-600/25">
            <Stethoscope className="h-5 w-5" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-slate-900">Dr. Tuhin Talukder</p>
            <p className="text-xs text-slate-500">Hepatobiliary Surgeon</p>
          </div>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-teal-50 hover:text-teal-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#appointment"
          className="hidden rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition-all hover:bg-teal-700 hover:shadow-teal-600/40 md:inline-flex"
        >
          Book Appointment
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-teal-50 hover:text-teal-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#appointment"
                className="mt-2 block rounded-full bg-teal-600 px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
