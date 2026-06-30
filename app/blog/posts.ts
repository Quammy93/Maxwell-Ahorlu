export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  category: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello World — My First Blog Post",
    date: "2025-01-15",
    summary: "Welcome to my blog! Here I'll share thoughts on software engineering, cloud architecture, and lessons learned along the way.",
    tags: ["General", "Intro"],
    category: "General",
    content: `
Welcome to my blog! I'm Maxwell — a software and cloud engineer passionate about building scalable systems, clean code, and great developer experiences.

## What to Expect

In this space I'll be writing about:

- **Backend & Cloud** — AWS architecture, serverless patterns, infrastructure as code
- **Frontend** — React, Next.js, and building fast, accessible UIs
- **DevOps** — CI/CD pipelines, containerization, and deployment strategies
- **Lessons Learned** — real-world experiences and things I wish I knew earlier

## Why Blog?

Writing helps me think more clearly. If even one post saves someone an hour of debugging or sparks a new idea, that's a win.

Stay tuned — more posts coming soon!
    `,
  },
  {
    slug: "aws-lambda-tips",
    title: "5 AWS Lambda Tips I Wish I Knew Earlier",
    date: "2025-02-10",
    summary: "Practical tips for writing faster, cheaper, and more reliable serverless functions on AWS Lambda.",
    tags: ["AWS", "Serverless", "Cloud"],
    category: "Cloud",
    content: `
AWS Lambda is incredibly powerful, but there are a few gotchas that can cost you time and money.

## 1. Always Set a Memory Size Intentionally

Lambda allocates CPU proportionally to memory. More memory = faster execution = sometimes cheaper overall due to reduced duration.

## 2. Keep Your Packages Small

Cold starts are directly affected by bundle size. Use tree-shaking and avoid importing entire SDKs when you only need one method.

## 3. Use Environment Variables for Config

Never hardcode config. Use environment variables and AWS Systems Manager Parameter Store for secrets.

## 4. Handle Partial Failures in Batches

When processing SQS messages, return \`batchItemFailures\` so only failed messages are retried — not the whole batch.

## 5. Monitor with CloudWatch Insights

Log structured JSON from your functions so you can query logs efficiently with CloudWatch Logs Insights.

These small habits compound into significantly more reliable and cost-effective serverless systems.
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
