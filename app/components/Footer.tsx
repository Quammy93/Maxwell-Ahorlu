const navLinks = ["About", "Projects", "Skills", "Blog", "Contact"];
const socials = [
  { label: "GitHub", href: "#", icon: "🐙" },
  { label: "LinkedIn", href: "#", icon: "💼" },
  { label: "Twitter", href: "#", icon: "🐦" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 dark:bg-zinc-950 text-zinc-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold text-white mb-2">
              MA<span className="text-indigo-400">.</span>
            </p>
            <p className="text-sm leading-relaxed">
              Building scalable applications, intelligent systems, and cloud-native infrastructure.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">Quick Links</p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l}>
                  <a
                    href={l === "Blog" ? "/blog" : `#${l.toLowerCase()}`}
                    className="text-sm hover:text-indigo-400 transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">Connect</p>
            <div className="flex flex-col gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="flex items-center gap-2 text-sm hover:text-indigo-400 transition-colors">
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Maxwell Ahorlu. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-indigo-400">Next.js · TypeScript · Tailwind CSS · Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
