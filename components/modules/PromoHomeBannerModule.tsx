import { ModuleData } from "@/lib/contentful/module-mapper";

/**
 * Promo Home Banner Module Component
 */
export function PromoHomeBannerModule({ module }: { module: ModuleData }) {
  const fields = module.fields;

  return (
    <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-pink-900 mb-4">Promo Home Banner</h3>
      <div className="text-center py-8">
        <h2 className="text-xl font-bold text-pink-900 mb-2">
          {fields?.title || "Promotional Banner"}
        </h2>
        <p className="text-pink-700">
          {fields?.subtitle || "Special promotional content"}
        </p>
      </div>
      <div className="mt-4 text-xs text-pink-600">
        ID: {module.sys.id}
      </div>
    </div>
  );
}