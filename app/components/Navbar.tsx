"use client";
import { useState, useEffect } from "react";

const links = ["About", "Projects", "Skills", "Contact"];

export default function Navbar({ dark, toggleDark }: { dark: boolean; toggleDark: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-zinc-900/90 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight">
          MA<span className="text-zinc-800 dark:text-white">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href="/blog"
            className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Blog
          </a>
          <button
            onClick={toggleDark}
            className="ml-2 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggleDark} className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm">
            {dark ? "☀️" : "🌙"}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-zinc-700 dark:text-zinc-200 text-2xl">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {l}
            </a>
          ))}
          <a
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Blog
          </a>
        </div>
      )}
    </nav>
  );
}
