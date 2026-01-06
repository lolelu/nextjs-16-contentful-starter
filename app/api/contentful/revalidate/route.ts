import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  try {
    const secret = request.headers.get("x-vercel-reval-key");
    if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
      return new Response("Invalid secret", { status: 401 });
    }

    const body = await request.json();
    const entryId = body?.sys?.id;

    if (!entryId) {
      return new Response("No entry ID found", { status: 400 });
    }

    revalidateTag(entryId, "max");
    console.log(`Revalidated entry: ${entryId}`);

    return new Response("success", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("error", { status: 500 });
  }
}
