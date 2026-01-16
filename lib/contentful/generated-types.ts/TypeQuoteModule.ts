import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeReviewSkeleton } from "./TypeReview";

export interface TypeQuoteModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    text: EntryFieldTypes.RichText;
    review: EntryFieldTypes.EntryLink<TypeReviewSkeleton>;
    image: EntryFieldTypes.AssetLink;
    imagePosition: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    ctaButtonIconVisible?: EntryFieldTypes.Boolean;
    ctaButtonIconOverride?: EntryFieldTypes.AssetLink;
    ctaButtonIconPositionOverride?: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    ctaButtonSizeOverride?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small">;
    ctaButtonTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButtonColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeQuoteModuleSkeleton = EntrySkeletonType<TypeQuoteModuleFields, "quoteModule">;
export type TypeQuoteModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeQuoteModuleSkeleton, Modifiers, Locales>;
