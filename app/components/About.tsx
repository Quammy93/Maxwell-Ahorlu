const stack = ["TypeScript", "Python", "Go", "React", "Next.js", "Node.js", "AWS", "Docker", "Kubernetes", "TensorFlow"];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 rotate-3" />
            <div className="relative w-full h-full rounded-2xl bg-zinc-200 dark:bg-zinc-700 overflow-hidden flex items-center justify-center text-6xl">
              👨‍💻
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">About Me</h2>
          <div className="w-12 h-1 bg-indigo-600 rounded mb-6" />
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            I&apos;m a passionate software and cloud engineer with experience building
            full-stack applications, cloud-native systems, and AI-powered solutions.
            I thrive at the intersection of engineering and innovation.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            With 4+ years of experience across backend, frontend, Mobile App, DevOps, and machine
            learning, I deliver robust, scalable, and maintainable software that drives
            business value.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { label: "Projects Shipped", value: "2+" },
              { label: "Years Experience", value: "4+" },
              { label: "Cloud Certifications", value: "1" },
              { label: "Open Source Contributions", value: "3+" },
            ].map((s) => (
              <div key={s.label} className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{s.value}</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">{s.label}</div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
