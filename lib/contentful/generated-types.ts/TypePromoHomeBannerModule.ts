import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypePromoHomeBannerModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    titleColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    titleBackgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    titleFontSize?: EntryFieldTypes.Symbol;
    subtitle: EntryFieldTypes.Symbol;
    subtitleColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    subtitleBackgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    subtitleFontSize?: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    imageMobile?: EntryFieldTypes.AssetLink;
    ctaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    tooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypePromoHomeBannerModuleSkeleton = EntrySkeletonType<TypePromoHomeBannerModuleFields, "promoHomeBannerModule">;
export type TypePromoHomeBannerModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePromoHomeBannerModuleSkeleton, Modifiers, Locales>;
