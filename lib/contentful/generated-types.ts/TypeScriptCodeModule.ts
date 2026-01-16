import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeScriptCodeModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    script: EntryFieldTypes.Text;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeScriptCodeModuleSkeleton = EntrySkeletonType<TypeScriptCodeModuleFields, "scriptCodeModule">;
export type TypeScriptCodeModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeScriptCodeModuleSkeleton, Modifiers, Locales>;
