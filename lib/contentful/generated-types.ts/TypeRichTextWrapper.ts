import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeRichTextWrapperFields {
    internalName: EntryFieldTypes.Symbol;
    text: EntryFieldTypes.RichText;
}

export type TypeRichTextWrapperSkeleton = EntrySkeletonType<TypeRichTextWrapperFields, "richTextWrapper">;
export type TypeRichTextWrapper<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRichTextWrapperSkeleton, Modifiers, Locales>;
