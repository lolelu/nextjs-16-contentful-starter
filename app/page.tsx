import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/i18n/config";

// Root page redirects to default locale
// This is a fallback - middleware should handle most redirects
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
