import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBadgeSkeleton } from "./TypeBadge";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypePromoBannerFields {
    internalName: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    text: EntryFieldTypes.RichText;
    textLinkBlank?: EntryFieldTypes.Boolean;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    image?: EntryFieldTypes.AssetLink;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    tooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
    badge?: EntryFieldTypes.EntryLink<TypeBadgeSkeleton>;
    badgeIconVisible?: EntryFieldTypes.Boolean;
    badgeIconOverride?: EntryFieldTypes.AssetLink;
    badgePositionOverride?: EntryFieldTypes.Symbol<"Left" | "Right">;
    badgeTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    badgeBackgroundColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
}

export type TypePromoBannerSkeleton = EntrySkeletonType<TypePromoBannerFields, "promoBanner">;
export type TypePromoBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePromoBannerSkeleton, Modifiers, Locales>;
