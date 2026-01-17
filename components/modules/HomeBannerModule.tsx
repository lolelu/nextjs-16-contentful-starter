import { ModuleData } from "@/lib/contentful/module-mapper";

/**
 * Home Banner Module Component
 */
export function HomeBannerModule({ module }: { module: ModuleData }) {
  const fields = module.fields;

  return (
    <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-cyan-900 mb-4">Home Banner</h3>
      <div className="text-center py-8">
        <h2 className="text-xl font-bold text-cyan-900 mb-2">
          {fields?.title || "Home Banner Title"}
        </h2>
        <p className="text-cyan-700">
          {fields?.subtitle || "Home banner content"}
        </p>
      </div>
      <div className="mt-4 text-xs text-cyan-600">
        ID: {module.sys.id}
      </div>
    </div>
  );
}