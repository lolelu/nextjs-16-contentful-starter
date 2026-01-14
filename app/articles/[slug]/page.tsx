import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticles } from "@/lib/contentful/queries";
import { RichText } from "@/components/rich-text";
import { ContentfulImage } from "@/components/contentful-image";

export default async function ArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const article = await getArticles({
    "fields.slug": params.slug,
    limit: 1,
  });

  if (!article || article.length === 0) {
    notFound();
  }

  const { title, categoryName, authorName, summary, details, articleImage } =
    article[0];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <nav className="flex items-center justify-between mb-12 text-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-black/50 hover:text-black transition-colors group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">
            ←
          </span>
          <span>All articles</span>
        </Link>
      </nav>
      <article>
        <div className="flex items-center gap-4 mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-black text-white">
            {categoryName}
          </span>
        </div>

        <h1 className="text-5xl font-semibold text-black mb-6 text-balance leading-tight">
          {title}
        </h1>

        <div className="flex items-center gap-3 text-lg text-black/60 mb-12">
          <span>By {authorName}</span>
        </div>

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
          <RichText content={details} />
        </div>
      </article>
    </main>
  );
}
