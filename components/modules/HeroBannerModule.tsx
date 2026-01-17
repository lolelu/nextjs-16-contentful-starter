import { ModuleData } from "@/lib/contentful/module-mapper";

/**
 * Hero Banner Module Component
 */
export function HeroBannerModule({ module }: { module: ModuleData }) {
  const fields = module.fields;

  return (
    <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-purple-900 mb-4">Hero Banner</h3>
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-purple-900 mb-4">
          {fields?.title || "Hero Title"}
        </h2>
        <p className="text-purple-700">
          {fields?.subtitle || "Hero subtitle content would go here"}
        </p>
      </div>
      <div className="mt-4 text-xs text-purple-600">
        ID: {module.sys.id}
      </div>
    </div>
  );
}