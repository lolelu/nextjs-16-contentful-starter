import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticles } from "@/lib/contentful/queries";
import { Markdown } from "@/lib/markdown";
import { ContentfulImage } from "@/components/contentful-image";
import { LastUpdated, LastUpdatedSkeleton } from "@/components/updated-at";
import { Suspense } from "react";

export default async function KnowledgeArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Suspense fallback={<LastUpdatedSkeleton />}>
          <LastUpdated params={props.params} />
        </Suspense>
      </div>
      <Suspense fallback={<ArticleContentSkeleton />}>
        <ArticleContent params={props.params} />
      </Suspense>
      <div className="mt-16 pt-12 border-t border-black/10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          <span>Back to all articles</span>
        </Link>
      </div>
    </main>
  );
}

async function ArticleContent(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const article = await getArticles(undefined, {
    "fields.slug": params.slug,
    limit: 1,
  });

  if (!article || article.length === 0) {
    notFound();
  }

  const { title, categoryName, authorName, summary, details, articleImage } =
    article[0];

  return (
    <article>
      <div className="flex items-center gap-4 mb-8">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-black text-white">
          {categoryName}
        </span>
      </div>

      <h1 className="text-5xl font-semibold text-black mb-6 text-balance leading-tight">
        {title}
      </h1>

      <p className="text-lg text-black/60 mb-12">By {authorName}</p>

      <div className="relative w-full aspect-2/1 mb-12 overflow-hidden bg-black/5 border border-black/5 shadow-sm">
        <ContentfulImage
          src={articleImage?.fields?.file?.url}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="mb-12 pb-12 border-b border-black/10">
        <p className="text-xl text-black/80 leading-relaxed text-pretty font-medium">
          {summary}
        </p>
      </div>

      <div
        className="max-w-none"
        style={{
          color: "rgb(0 0 0 / 0.8)",
        }}
      >
        <Markdown content={details} />
      </div>
    </article>
  );
}

function ArticleContentSkeleton() {
  return (
    <article>
      <div className="flex items-center gap-4 mb-8">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-black/10 text-transparent animate-pulse">
          Category
        </span>
      </div>

      <h1 className="text-5xl font-semibold mb-6 leading-tight bg-black/10 text-transparent animate-pulse rounded">
        Article Title
      </h1>

      <p className="text-lg mb-12 bg-black/10 text-transparent animate-pulse rounded w-fit">
        By Author Name
      </p>

      <div className="relative w-full aspect-2/1 mb-12 overflow-hidden bg-black/5 border border-black/5 shadow-sm animate-pulse" />

      <div className="mb-12 pb-12 border-b border-black/10">
        <p className="text-xl leading-relaxed font-medium bg-black/10 text-transparent animate-pulse rounded">
          This is a placeholder for the article summary that spans multiple
          lines of text content.
        </p>
      </div>

      <div className="max-w-none bg-black/5 animate-pulse rounded h-64" />
    </article>
  );
}
