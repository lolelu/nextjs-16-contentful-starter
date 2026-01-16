import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypeHeroBannerOverflowingModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.RichText;
    productTwelveNc?: EntryFieldTypes.Symbol;
    productTwelveNcOld?: EntryFieldTypes.Symbol;
    priceFreeLabel: EntryFieldTypes.Symbol;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    ctaButtonIconVisible?: EntryFieldTypes.Boolean;
    ctaButtonIconOverride?: EntryFieldTypes.AssetLink;
    ctaButtonIconPositionOverride?: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    ctaButtonSizeOverride?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small">;
    ctaButtonTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButtonColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    tooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeHeroBannerOverflowingModuleSkeleton = EntrySkeletonType<TypeHeroBannerOverflowingModuleFields, "heroBannerOverflowingModule">;
export type TypeHeroBannerOverflowingModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroBannerOverflowingModuleSkeleton, Modifiers, Locales>;
