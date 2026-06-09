const skillGroups = [
  {
    category: "Programming Languages",
    icon: "💻",
    skills: ["TypeScript", "Python", "Go", "Java", "Rust", "SQL"],
  },
  {
    category: "Frameworks",
    icon: "🧩",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Django", "Flutter"],
  },
  {
    category: "Cloud Platforms",
    icon: "☁️",
    skills: ["AWS", "Google Cloud", "Azure", "Vercel", "Cloudflare"],
  },
  {
    category: "DevOps Tools",
    icon: "🔧",
    skills: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Helm", "Ansible"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "MySQL", "Elasticsearch"],
  },
  {
    category: "AI / ML Tools",
    icon: "🤖",
    skills: ["TensorFlow", "PyTorch", "LangChain", "OpenAI API", "Hugging Face", "scikit-learn"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Skills</h2>
          <div className="w-12 h-1 bg-indigo-600 rounded mx-auto mb-6" />
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Technologies and tools I work with across the full stack.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-semibold text-zinc-800 dark:text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
