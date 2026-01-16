import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypeHomeBannerModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    readMoreLabel: EntryFieldTypes.Symbol;
    readLessLabel: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.RichText;
    legalText?: EntryFieldTypes.RichText;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    image: EntryFieldTypes.AssetLink;
    imagePosition: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    imageSize: EntryFieldTypes.Symbol<"Full" | "Large" | "Small">;
    videoUrl?: EntryFieldTypes.Symbol;
    previewVideoUrl?: EntryFieldTypes.Symbol;
    mobileAutoplay?: EntryFieldTypes.Boolean;
    desktopAutoplay?: EntryFieldTypes.Boolean;
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

export type TypeHomeBannerModuleSkeleton = EntrySkeletonType<TypeHomeBannerModuleFields, "homeBannerModule">;
export type TypeHomeBannerModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHomeBannerModuleSkeleton, Modifiers, Locales>;
