import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBadgeSkeleton } from "./TypeBadge";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypePromotionSkeleton } from "./TypePromotion";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypeContentCardFields {
    internalName: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol<"Banner" | "Other" | "Promo">;
    image: EntryFieldTypes.AssetLink;
    title?: EntryFieldTypes.RichText;
    text?: EntryFieldTypes.RichText;
    videoUrl?: EntryFieldTypes.Symbol;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    promotion?: EntryFieldTypes.EntryLink<TypePromotionSkeleton>;
    usePromoDefaultBadge: EntryFieldTypes.Boolean;
    usePromoDefaultTooltip: EntryFieldTypes.Boolean;
    tooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
    badge?: EntryFieldTypes.EntryLink<TypeBadgeSkeleton>;
    badgeIconVisible?: EntryFieldTypes.Boolean;
    badgeIconOverride?: EntryFieldTypes.AssetLink;
    badgePositionOverride?: EntryFieldTypes.Symbol<"Left" | "Right">;
    badgeTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    badgeBackgroundColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    ctaButtonIconVisible?: EntryFieldTypes.Boolean;
    ctaButtonIconOverride?: EntryFieldTypes.AssetLink;
    ctaButtonIconPositionOverride?: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    ctaButtonSizeOverride?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small">;
    ctaButtonTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButtonColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
}

export type TypeContentCardSkeleton = EntrySkeletonType<TypeContentCardFields, "contentCard">;
export type TypeContentCard<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContentCardSkeleton, Modifiers, Locales>;
