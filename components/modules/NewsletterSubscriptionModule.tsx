import { ModuleData } from "@/lib/contentful/module-mapper";

/**
 * Newsletter Subscription Module Component
 */
export function NewsletterSubscriptionModule({ module }: { module: ModuleData }) {
  const fields = module.fields;

  return (
    <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-emerald-900 mb-4">Newsletter Subscription</h3>
      <div className="bg-emerald-100 rounded p-6 text-center">
        <p className="text-emerald-800 mb-4">Subscribe to our newsletter</p>
        <div className="flex gap-2 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-2 border border-emerald-300 rounded text-sm"
          />
          <button className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 text-sm">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mt-4 text-xs text-emerald-600">
        ID: {module.sys.id}
      </div>
    </div>
  );
}