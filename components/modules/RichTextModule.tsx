import { ModuleData } from "@/lib/contentful/module-mapper";

/**
 * Rich Text Module Component
 */
export function RichTextModule({ module }: { module: ModuleData }) {
  const fields = module.fields;

  return (
    <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-green-900 mb-4">Rich Text</h3>
      <div
        className="prose prose-sm max-w-none text-green-800"
        dangerouslySetInnerHTML={{ __html: fields?.text || "<p>No content</p>" }}
      />
      <div className="mt-4 text-xs text-green-600">
        ID: {module.sys.id}
      </div>
    </div>
  );
}