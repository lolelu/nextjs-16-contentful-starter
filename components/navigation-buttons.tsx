import { ReactNode } from "react";
import { CtaButton } from "@/components/ui";
import { ButtonInfo } from "@/lib/contentful/types";

/**
 * Component for rendering navigation buttons from Contentful NavigationLinkModule
 */
interface NavigationButtonsProps {
  buttons: ButtonInfo[];
}

export function NavigationButtons({ buttons }: NavigationButtonsProps): ReactNode {
  if (!buttons || buttons.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3 mt-4">
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
                // Simple navigation - in a real app you'd use Next.js Link
                window.location.href = button.link;
              }
            }}
          >
            {button.label}
          </button>
        );
      })}
    </div>
  );
}