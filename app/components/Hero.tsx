export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950 px-6"
    >
      <div className="max-w-3xl text-center animate-fade-in-up">
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
          Available for opportunities
        </span>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white leading-tight mb-4">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Maxwell Ahorlu
          </span>
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-zinc-600 dark:text-zinc-300 mb-4">
          Software Engineer · AWS Cloud Practitioner · AI Builder · Mobile Developer
        </p>
        <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mb-10">
          I build scalable applications, intelligent systems, and cloud-native
          infrastructure that solve real-world problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 font-semibold transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
