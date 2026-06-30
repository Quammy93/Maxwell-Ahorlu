import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPostBySlug } from "../posts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return { title: `${post.title} | Maxwell Ahorlu`, description: post.summary };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.content
    .trim()
    .split("\n")
    .map((line, i) => {
      if (line.startsWith("## ")) {
        return (
          <h2 key={i} className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-3">
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={i} className="ml-4 text-zinc-600 dark:text-zinc-400 leading-relaxed list-disc"
            dangerouslySetInnerHTML={{ __html: line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
          />
        );
      }
      if (line.trim() === "") return <br key={i} />;
      return (
        <p key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/`(.*?)`/g, "<code class=\"bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono text-indigo-600 dark:text-indigo-400\">$1</code>") }}
        />
      );
    });

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-28">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:underline mb-10"
        >
          ← Back to Blog
        </Link>

        <div className="mb-2 flex items-center gap-3">
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">{post.date}</span>
          <span className="text-xs text-zinc-300 dark:text-zinc-600">•</span>
          <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">{post.category}</span>
        </div>

        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="w-12 h-1 bg-indigo-600 rounded mb-6" />

        <p className="text-zinc-500 dark:text-zinc-400 mb-8 text-base leading-relaxed border-l-4 border-indigo-200 dark:border-indigo-800 pl-4 italic">
          {post.summary}
        </p>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
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

        <article className="flex flex-col gap-2">
          {paragraphs}
        </article>

        <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </main>
  );
}
