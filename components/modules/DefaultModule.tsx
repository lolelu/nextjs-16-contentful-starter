import { ModuleData } from "@/lib/contentful/module-mapper";

/**
 * Default Module Component (fallback)
 */
export function DefaultModule({ module }: { module: ModuleData }) {
  const moduleType = module?.sys?.contentType?.sys?.id || "Unknown module";

  return (
    <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {moduleType}
      </h3>
      <p className="text-gray-700">
        This module type is not yet implemented.
      </p>
      <div className="mt-4 text-xs text-gray-600">
        ID: {module.sys.id}
      </div>
    </div>
  );
}