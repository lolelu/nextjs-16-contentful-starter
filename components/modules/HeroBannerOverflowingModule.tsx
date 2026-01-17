import { ModuleData } from "@/lib/contentful/module-mapper";

/**
 * Hero Banner Overflowing Module Component
 */
export function HeroBannerOverflowingModule({ module }: { module: ModuleData }) {
  const fields = module.fields;

  return (
    <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-indigo-900 mb-4">Hero Banner (Overflowing)</h3>
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-indigo-900 mb-4">
          {fields?.title || "Hero Title"}
        </h2>
        <p className="text-indigo-700">
          {fields?.subtitle || "Large hero banner with overflowing design"}
        </p>
      </div>
      <div className="mt-4 text-xs text-indigo-600">
        ID: {module.sys.id}
      </div>
    </div>
  );
}