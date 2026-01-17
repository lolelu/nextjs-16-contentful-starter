import { getHomepage, getTranslations } from "@/lib/contentful/queries";
import { setRequestLocale } from "next-intl/server";
import type { UrlLocale } from "@/lib/i18n/config";
import { CtaButton } from "@/components/ui";
import {
  TypeNavigationLinkModuleSkeleton,
  TypeButtonSkeleton,
} from "@/lib/contentful/generated-types.ts";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations(locale as UrlLocale);

  const homepage = await getHomepage({ locale: locale as UrlLocale });

  if (!homepage) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-black/60">
          No homepage found for locale: <strong>{locale}</strong>
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-4 text-sm text-black/50">
        Locale: <code className="bg-black/5 px-2 py-1 rounded">{locale}</code>
      </div>

      <h1 className="text-4xl font-semibold mb-8">{homepage.name}</h1>

      <CtaButton
        ctaData={{
          label: "Click me",
          navigationLink: "/about",
        }}
      />

      {/* Debug: Show homepage data */}
      <div className="bg-black/5 p-6 rounded-lg">
        <h2 className="text-lg font-medium mb-4">Homepage Data</h2>
        <dl className="space-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="font-medium text-black/60">ID:</dt>
            <dd>{homepage.id}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-black/60">Name:</dt>
            <dd>{homepage.name}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-black/60">Internal Name:</dt>
            <dd>{homepage.internalName}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-black/60">Type:</dt>
            <dd>{homepage.type}</dd>
          </div>
          {homepage.landingType && (
            <div className="flex gap-2">
              <dt className="font-medium text-black/60">Landing Type:</dt>
              <dd>{homepage.landingType}</dd>
            </div>
          )}
          <div className="flex gap-2">
            <dt className="font-medium text-black/60">Modules:</dt>
            <dd>{homepage.modules?.length ?? 0} modules</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-black/60">Alerts:</dt>
            <dd>{homepage.alerts?.length ?? 0} alerts</dd>
          </div>
        </dl>
      </div>

      {/* Render modules */}
      {homepage.modules && homepage.modules.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">Modules</h2>
          <div className="space-y-4">
            {homepage.modules.map((module, index) => {
              // Check if this is a NavigationLinkModule with a CTA button
              if (
                module?.sys?.contentType?.sys?.id === "navigationLinkModule" &&
                (module as any).fields?.ctaButton
              ) {
                const navModule = module as any; // Type as TypeNavigationLinkModuleSkeleton
                const ctaButton = navModule.fields.ctaButton;

                // Extract CTA button data
                const ctaData = {
                  label: ctaButton?.fields?.label,
                  navigationLink:
                    ctaButton?.fields?.navigationLink?.fields?.urlLink ||
                    ctaButton?.fields?.navigationLink?.fields?.pageLink?.fields
                      ?.slug,
                  buttonColor: ctaButton?.fields?.buttonColor?.fields?.hex,
                  textColor: ctaButton?.fields?.textColor?.fields?.hex,
                  additionalBehaviours:
                    ctaButton?.fields?.navigationLink?.fields
                      ?.additionalBehaviours,
                };

                return (
                  <div
                    key={module?.sys?.id ?? index}
                    className="bg-blue-50 border border-blue-200 p-6 rounded-lg"
                  >
                    <h3 className="text-md font-medium mb-3 text-blue-900">
                      Navigation Link Module - Primary CTA
                    </h3>
                    <CtaButton ctaData={ctaData} />
                  </div>
                );
              }

              // Default module rendering
              return (
                <div
                  key={module?.sys?.id ?? index}
                  className="bg-white border border-black/10 p-4 rounded"
                >
                  <span className="text-sm font-mono text-black/60">
                    {module?.sys?.contentType?.sys?.id ?? "Unknown module"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Debug translations inside a foldable table with key - value pairs */}
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-4">Translations</h2>
        <table className="w-full border-collapse border border-black/10">
          <thead>
            <tr>
              <th className="border border-black/10 p-2">Key</th>
              <th className="border border-black/10 p-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(t).map(([key, value], index) => (
              <tr key={index}>
                <td className="border border-black/10 p-2">
                  {JSON.stringify(key)}
                </td>
                <td className="border border-black/10 p-2">
                  {JSON.stringify(value)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
