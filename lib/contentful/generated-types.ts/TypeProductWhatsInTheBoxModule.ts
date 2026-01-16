import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProductWhatsInTheBoxModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    includedAccessoryLabel?: EntryFieldTypes.Symbol;
    includedAccessoriesLabel?: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.RichText;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeProductWhatsInTheBoxModuleSkeleton = EntrySkeletonType<TypeProductWhatsInTheBoxModuleFields, "productWhatsInTheBoxModule">;
export type TypeProductWhatsInTheBoxModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductWhatsInTheBoxModuleSkeleton, Modifiers, Locales>;
