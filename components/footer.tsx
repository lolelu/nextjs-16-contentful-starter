import { getFooter } from "@/lib/contentful/queries";

export async function Footer() {
  const footer = await getFooter();

  return (
    <footer className="border-t border-gray-200 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {footer?.name || "Footer"}
          </h2>

          {/* Footer content from Contentful */}
          {footer && (
            <div className="text-sm text-gray-600 mb-4">
              <p>Footer ID: {footer.id}</p>
              {footer.internalName && (
                <p className="text-xs">Internal: {footer.internalName}</p>
              )}
            </div>
          )}

          {/* Debug info */}
          {footer?.modules && footer.modules.length > 0 && (
            <div className="text-xs text-gray-500">
              Footer has {footer.modules.length} module(s)
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              © 2025 Shared Homepage. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}