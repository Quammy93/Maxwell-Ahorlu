const softSkills = [
  { icon: "🧠", title: "Problem Solving", desc: "Breaking down complex problems into elegant solutions." },
  { icon: "🤝", title: "Team Collaboration", desc: "Working effectively in cross-functional agile teams." },
  { icon: "💬", title: "Communication", desc: "Translating technical concepts for diverse audiences." },
  { icon: "🎯", title: "Leadership", desc: "Guiding teams toward shared goals with clarity." },
  { icon: "🔍", title: "Critical Thinking", desc: "Evaluating options and making data-driven decisions." },
  { icon: "🔄", title: "Adaptability", desc: "Thriving in fast-paced, ever-changing environments." },
];

export default function SoftSkills() {
  return (
    <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Soft Skills</h2>
          <div className="w-12 h-1 bg-indigo-600 rounded mx-auto mb-6" />
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Beyond the code — the qualities that make great engineering teams.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((s) => (
            <div
              key={s.title}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 flex gap-4 items-start hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="text-3xl mt-0.5">{s.icon}</span>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">{s.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
