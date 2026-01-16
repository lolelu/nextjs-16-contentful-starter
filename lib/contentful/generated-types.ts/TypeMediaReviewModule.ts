import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeMediaReviewModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.RichText;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeMediaReviewModuleSkeleton = EntrySkeletonType<TypeMediaReviewModuleFields, "mediaReviewModule">;
export type TypeMediaReviewModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMediaReviewModuleSkeleton, Modifiers, Locales>;
