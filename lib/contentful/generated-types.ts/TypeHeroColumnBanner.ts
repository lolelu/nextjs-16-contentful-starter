import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBadgeSkeleton } from "./TypeBadge";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypeHeroColumnBannerFields {
    internalName: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    videoUrl?: EntryFieldTypes.Symbol;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    ctaButtonIconVisible?: EntryFieldTypes.Boolean;
    ctaButtonIconOverride?: EntryFieldTypes.AssetLink;
    ctaButtonIconPositionOverride?: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    ctaButtonSizeOverride?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small">;
    ctaButtonTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButtonColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    htmlTooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
    badge?: EntryFieldTypes.EntryLink<TypeBadgeSkeleton>;
    badgeIconVisible?: EntryFieldTypes.Boolean;
    badgeIconOverride?: EntryFieldTypes.AssetLink;
    badgePositionOverride?: EntryFieldTypes.Symbol<"Left" | "Right">;
    badgeTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    badgeBackgroundColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
}

export type TypeHeroColumnBannerSkeleton = EntrySkeletonType<TypeHeroColumnBannerFields, "heroColumnBanner">;
export type TypeHeroColumnBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroColumnBannerSkeleton, Modifiers, Locales>;
