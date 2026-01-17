import { CtaButton } from "@/components/ui";
import { ButtonInfo, ModuleData } from "@/lib/contentful/types";

/**
 * Navigation Link Module Component
 */
export function NavigationLinkModule({ module }: { module: ModuleData }) {
  const fields = module.fields;

  // Collect all buttons
  const buttons: ButtonInfo[] = [];

  // Main CTA button (primary)
  if (fields?.ctaButton) {
    const ctaButton = fields.ctaButton;
    buttons.push({
      type: 'cta',
      label: ctaButton?.fields?.label,
      link: ctaButton?.fields?.navigationLink?.fields?.urlLink ||
            ctaButton?.fields?.navigationLink?.fields?.pageLink?.fields?.slug,
      isPrimary: true
    });
  }

  // Check navigation links for button-like links
  if (fields?.navigationLinks && Array.isArray(fields.navigationLinks)) {
    fields.navigationLinks.forEach((navLink: any, index: number) => {
      if (navLink?.fields) {
        buttons.push({
          type: index === 0 ? 'primary' : 'secondary',
          label: navLink.fields.label,
          link: navLink.fields.urlLink ||
                navLink.fields.pageLink?.fields?.slug,
          isPrimary: index === 0
        });
      }
    });
  }

  // Check groups for additional buttons
  if (fields?.groups && Array.isArray(fields.groups)) {
    fields.groups.forEach((group: any) => {
      if (group?.fields?.links && Array.isArray(group.fields.links)) {
        group.fields.links.forEach((link: any) => {
          if (link?.fields) {
            buttons.push({
              type: 'secondary',
              label: link.fields.label,
              link: link.fields.urlLink ||
                    link.fields.pageLink?.fields?.slug,
              isPrimary: false
            });
          }
        });
      }
    });
  }

  return (
    <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          {fields?.title || "Navigation Module"}
        </h3>
        <p className="text-sm text-blue-700">
          Type: {String(fields?.type || "Unknown")}
        </p>
      </div>

      {/* Render buttons */}
      {buttons.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {buttons.map((button, index) => {
            if (!button.label) return null;

            // For CTA buttons, use the CtaButton component
            if (button.type === 'cta') {
              const ctaData = {
                label: button.label,
                navigationLink: button.link,
              };
              return <CtaButton key={index} ctaData={ctaData} />;
            }

            // For navigation links, render as styled buttons
            return (
              <button
                key={index}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  button.isPrimary
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => {
                  if (button.link) {
                    window.location.href = button.link;
                  }
                }}
              >
                {button.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Module ID for debugging */}
      <div className="mt-4 text-xs text-blue-600">
        ID: {module.sys.id}
      </div>
    </div>
  );
}