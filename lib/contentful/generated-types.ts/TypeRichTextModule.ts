import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeRichTextModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    text: EntryFieldTypes.RichText;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeRichTextModuleSkeleton = EntrySkeletonType<TypeRichTextModuleFields, "richTextModule">;
export type TypeRichTextModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRichTextModuleSkeleton, Modifiers, Locales>;
