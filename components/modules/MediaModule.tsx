import { ModuleData } from "@/lib/contentful/module-mapper";

/**
 * Media Module Component
 */
export function MediaModule({ module }: { module: ModuleData }) {
  const fields = module.fields;

  return (
    <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-orange-900 mb-4">Media</h3>
      <div className="bg-orange-100 rounded p-8 text-center">
        <p className="text-orange-800">Media content would be displayed here</p>
        {fields?.title && (
          <p className="text-sm text-orange-700 mt-2">{fields.title}</p>
        )}
      </div>
      <div className="mt-4 text-xs text-orange-600">
        ID: {module.sys.id}
      </div>
    </div>
  );
}