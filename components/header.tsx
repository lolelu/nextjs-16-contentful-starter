import { getHeader } from "@/lib/contentful/queries";

interface HeaderProps {
  title?: string;
}

export async function Header({ title }: HeaderProps) {
  const header = await getHeader();

  return (
    <header className="border-b border-gray-200 py-4">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-900">
              {header?.name || title || "SHARED HOMEPAGE"}
            </h1>
          </div>

          {/* Header content from Contentful */}
          {header && (
            <div className="text-sm text-gray-600">
              <p>Header ID: {header.id}</p>
              {header.internalName && (
                <p className="text-xs">Internal: {header.internalName}</p>
              )}
            </div>
          )}
        </div>

        {/* Debug info */}
        {header?.modules && header.modules.length > 0 && (
          <div className="mt-2 text-xs text-gray-500">
            Header has {header.modules.length} module(s)
          </div>
        )}
      </div>
    </header>
  );
}