import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeMediaReviewFields {
    internalName: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    text: EntryFieldTypes.RichText;
}

export type TypeMediaReviewSkeleton = EntrySkeletonType<TypeMediaReviewFields, "mediaReview">;
export type TypeMediaReview<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMediaReviewSkeleton, Modifiers, Locales>;
