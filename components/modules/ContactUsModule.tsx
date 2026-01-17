import { ModuleData } from "@/lib/contentful/module-mapper";

/**
 * Contact Us Module Component
 */
export function ContactUsModule({ module }: { module: ModuleData }) {
  const fields = module.fields;

  return (
    <div className="bg-rose-50 border border-rose-200 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-rose-900 mb-4">Contact Us</h3>
      <div className="bg-rose-100 rounded p-6 text-center">
        <p className="text-rose-800 mb-4">Get in touch with us</p>
        <div className="flex justify-center gap-4">
          <button className="px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700 text-sm">
            Contact Form
          </button>
          <button className="px-4 py-2 bg-rose-200 text-rose-800 rounded hover:bg-rose-300 text-sm">
            Find Store
          </button>
        </div>
      </div>
      <div className="mt-4 text-xs text-rose-600">
        ID: {module.sys.id}
      </div>
    </div>
  );
}