"use client";

import { useState } from "react";
import Link from "next/link";

import { profile } from "@/data/profile";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Journey", href: "/#journey" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 md:py-5">
        {/* Logo */}
        <Link
          href="/#home"
          onClick={() => setIsOpen(false)}
          className="text-lg font-semibold tracking-tight text-white sm:text-xl"
        >
          Hasitha Dilshan<span className="text-cyan-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-neutral-400 transition duration-300 hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}

          {/* Resume is a file, so normal anchor is fine */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-400/30 px-5 py-2 text-sm font-medium text-white transition duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className={`group flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border transition duration-300 md:hidden ${
            isOpen
              ? "border-cyan-400/50 bg-cyan-400/5"
              : "border-white/10 hover:border-cyan-400/50"
          }`}
        >
          <span
            className={`h-0.5 w-5 transition duration-300 group-hover:bg-cyan-400 ${
              isOpen
                ? "translate-y-2 rotate-45 bg-cyan-400"
                : "bg-white"
            }`}
          />

          <span
            className={`h-0.5 w-5 transition duration-300 group-hover:bg-cyan-400 ${
              isOpen ? "opacity-0" : "bg-white"
            }`}
          />

          <span
            className={`h-0.5 w-5 transition duration-300 group-hover:bg-cyan-400 ${
              isOpen
                ? "-translate-y-2 -rotate-45 bg-cyan-400"
                : "bg-white"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-neutral-950/95 px-5 py-6 backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/5 py-4 text-neutral-400 transition duration-300 hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-6 w-fit rounded-full border border-cyan-400/30 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}