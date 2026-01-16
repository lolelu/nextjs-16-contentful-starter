import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBadgeSkeleton } from "./TypeBadge";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypePromotionFields {
    internalName: EntryFieldTypes.Symbol;
    id: EntryFieldTypes.Symbol;
    tooltip: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
    badge?: EntryFieldTypes.EntryLink<TypeBadgeSkeleton>;
    badgeIconVisible?: EntryFieldTypes.Boolean;
    badgeIconOverride?: EntryFieldTypes.AssetLink;
    badgePositionOverride?: EntryFieldTypes.Symbol<"Left" | "Right">;
    badgeTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    badgeBackgroundColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
}

export type TypePromotionSkeleton = EntrySkeletonType<TypePromotionFields, "promotion">;
export type TypePromotion<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePromotionSkeleton, Modifiers, Locales>;
