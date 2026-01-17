import { ModuleData } from "@/lib/contentful/module-mapper";

/**
 * Media Slider Module Component
 */
export function MediaSliderModule({ module }: { module: ModuleData }) {
  const fields = module.fields;

  return (
    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-yellow-900 mb-4">Media Slider</h3>
      <div className="bg-yellow-100 rounded p-8 text-center">
        <p className="text-yellow-800">Media slider content would be displayed here</p>
        {fields?.title && (
          <p className="text-sm text-yellow-700 mt-2">{fields.title}</p>
        )}
      </div>
      <div className="mt-4 text-xs text-yellow-600">
        ID: {module.sys.id}
      </div>
    </div>
  );
}