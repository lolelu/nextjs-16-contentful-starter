import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeDisclaimerModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    text: EntryFieldTypes.RichText;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeDisclaimerModuleSkeleton = EntrySkeletonType<TypeDisclaimerModuleFields, "disclaimerModule">;
export type TypeDisclaimerModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeDisclaimerModuleSkeleton, Modifiers, Locales>;
