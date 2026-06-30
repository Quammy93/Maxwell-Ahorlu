import Link from "next/link";
import { posts } from "./posts";

export const metadata = {
  title: "Blog | Maxwell Ahorlu",
  description: "Thoughts on software engineering, cloud, and more.",
};

const categoryColors: Record<string, string> = {
  General: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
  Cloud: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  Backend: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Frontend: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  AI: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  DevOps: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  Mobile: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
};

const categoryEmoji: Record<string, string> = {
  General: "✍️",
  Cloud: "☁️",
  Backend: "⚙️",
  Frontend: "🖥️",
  AI: "🤖",
  DevOps: "🔧",
  Mobile: "📱",
};

export default function BlogPage() {
  return (
    <section className="min-h-screen py-24 px-6 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Blog</h1>
          <div className="w-12 h-1 bg-indigo-600 rounded mx-auto mb-6" />
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Thoughts on software engineering, cloud architecture, and lessons learned along the way.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-zinc-400">No posts yet — check back soon!</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Card banner */}
                <div className="h-36 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center text-5xl">
                  {categoryEmoji[post.category] ?? "📝"}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">{post.date}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[post.category] ?? categoryColors.General}`}>
                      {post.category}
                    </span>
                  </div>

                  <h2 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2 leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
                    {post.summary}
                  </p>

                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <span className="mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:underline">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
