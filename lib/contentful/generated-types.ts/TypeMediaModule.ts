import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeRichTextWrapperSkeleton } from "./TypeRichTextWrapper";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypeMediaModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    subTitle?: EntryFieldTypes.RichText;
    notes?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeRichTextWrapperSkeleton>>;
    productTwelveNc?: EntryFieldTypes.Symbol;
    productTwelveNcOld?: EntryFieldTypes.Symbol;
    priceFreeLabel: EntryFieldTypes.Symbol;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    backgroundColor: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    image?: EntryFieldTypes.AssetLink;
    aspectRatio?: EntryFieldTypes.Symbol<"16-9" | "16-9-half" | "21-9">;
    imageSmall?: EntryFieldTypes.AssetLink;
    aspectRatioSmall?: EntryFieldTypes.Symbol<"16-9" | "21-9">;
    imageMedium?: EntryFieldTypes.AssetLink;
    aspectRatioMedium?: EntryFieldTypes.Symbol<"16-9" | "21-9">;
    showOpacityMask: EntryFieldTypes.Boolean;
    textPosition?: EntryFieldTypes.Symbol<"Center" | "Left" | "Right">;
    videoUrl?: EntryFieldTypes.Symbol;
    previewVideoUrl?: EntryFieldTypes.Symbol;
    mobileAutoplay?: EntryFieldTypes.Boolean;
    desktopAutoplay?: EntryFieldTypes.Boolean;
    primaryCtaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    primaryCtaButtonIconVisible?: EntryFieldTypes.Boolean;
    primaryCtaButtonIconOverride?: EntryFieldTypes.AssetLink;
    primaryCtaButtonIconPositionOverride?: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    primaryCtaButtonSizeOverride?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small">;
    primaryCtaButtonTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    primaryCtaButtonColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    secondaryCtaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    secondaryCtaButtonIconVisible?: EntryFieldTypes.Boolean;
    secondaryCtaButtonIconOverride?: EntryFieldTypes.AssetLink;
    secondaryCtaButtonIconPositionOverride?: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    secondaryCtaButtonSizeOverride?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small">;
    secondaryCtaButtonTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    secondaryCtaButtonColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    tooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeMediaModuleSkeleton = EntrySkeletonType<TypeMediaModuleFields, "mediaModule">;
export type TypeMediaModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMediaModuleSkeleton, Modifiers, Locales>;
