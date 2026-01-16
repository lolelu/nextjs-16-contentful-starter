import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeReviewFields {
    internalName: EntryFieldTypes.Symbol;
    name: EntryFieldTypes.Symbol;
    location?: EntryFieldTypes.Symbol;
    originalyPostedOnLabel?: EntryFieldTypes.Symbol;
    productTwelveNc?: EntryFieldTypes.Symbol;
    productTwelveNcOld?: EntryFieldTypes.Symbol;
    rating: EntryFieldTypes.Integer;
}

export type TypeReviewSkeleton = EntrySkeletonType<TypeReviewFields, "review">;
export type TypeReview<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeReviewSkeleton, Modifiers, Locales>;
