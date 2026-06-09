"use client";
import { useState } from "react";

const categories = ["All", "Backend", "Frontend", "AI", "Cloud", "DevOps", "Mobile"];

const projects = [
  {
    title: "Scalable REST API",
    desc: "High-performance REST API with JWT auth, rate limiting, and PostgreSQL.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
    category: "Backend",
    github: "#",
    demo: "#",
  },
  {
    title: "Microservices Platform",
    desc: "Event-driven microservices architecture using Kafka and Docker.",
    tech: ["Go", "Kafka", "Docker", "gRPC"],
    category: "Backend",
    github: "#",
    demo: "",
  },
  {
    title: "Portfolio Website",
    desc: "Modern developer portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Dashboard",
    desc: "Real-time analytics dashboard with charts and inventory management.",
    tech: ["React", "Redux", "Chart.js", "Node.js"],
    category: "Frontend",
    github: "#",
    demo: "#",
  },
  {
    title: "AI Chatbot",
    desc: "Conversational AI assistant powered by LLMs with RAG pipeline.",
    tech: ["Python", "LangChain", "OpenAI", "FastAPI"],
    category: "AI",
    github: "#",
    demo: "",
  },
  {
    title: "Image Classifier",
    desc: "CNN-based image classification model deployed as a REST API.",
    tech: ["Python", "TensorFlow", "Flask", "Docker"],
    category: "AI",
    github: "#",
    demo: "#",
  },
  {
    title: "AWS Infrastructure",
    desc: "Multi-region AWS infrastructure with auto-scaling and load balancing.",
    tech: ["AWS", "Terraform", "CloudFormation", "VPC"],
    category: "Cloud",
    github: "#",
    demo: "",
  },
  {
    title: "Serverless Pipeline",
    desc: "Event-driven data pipeline using AWS Lambda and Step Functions.",
    tech: ["AWS Lambda", "S3", "DynamoDB", "SQS"],
    category: "Cloud",
    github: "#",
    demo: "",
  },
  {
    title: "CI/CD Pipeline",
    desc: "Automated CI/CD pipeline with testing, security scanning, and deployment.",
    tech: ["GitHub Actions", "Docker", "Kubernetes", "Helm"],
    category: "DevOps",
    github: "#",
    demo: "",
  },
  {
    title: "K8s Monitoring Stack",
    desc: "Full observability stack with Prometheus, Grafana, and alerting.",
    tech: ["Kubernetes", "Prometheus", "Grafana", "Loki"],
    category: "DevOps",
    github: "#",
    demo: "#",
  },
  {
    title: "Fitness Tracker App",
    desc: "Cross-platform mobile app for tracking workouts and nutrition.",
    tech: ["React Native", "Expo", "Firebase", "TypeScript"],
    category: "Mobile",
    github: "#",
    demo: "#",
  },
  {
    title: "Food Delivery App",
    desc: "Real-time food ordering app with live tracking and payments.",
    tech: ["Flutter", "Dart", "Node.js", "Stripe"],
    category: "Mobile",
    github: "#",
    demo: "",
  },
];

const categoryColors: Record<string, string> = {
  Backend: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Frontend: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  AI: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  Cloud: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  DevOps: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  Mobile: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
};

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Projects</h2>
          <div className="w-12 h-1 bg-indigo-600 rounded mx-auto mb-6" />
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            A selection of projects across different technical domains.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === c
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-indigo-50 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Placeholder image */}
              <div className="h-40 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center text-4xl">
                {p.category === "Backend" && "⚙️"}
                {p.category === "Frontend" && "🖥️"}
                {p.category === "AI" && "🤖"}
                {p.category === "Cloud" && "☁️"}
                {p.category === "DevOps" && "🔧"}
                {p.category === "Mobile" && "📱"}
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-zinc-900 dark:text-white">{p.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[p.category]}`}>
                    {p.category}
                  </span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.github} className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                    GitHub →
                  </a>
                  {p.demo && (
                    <a href={p.demo} className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:underline">
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
