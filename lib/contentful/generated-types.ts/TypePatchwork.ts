import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBadgeSkeleton } from "./TypeBadge";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypePatchworkFields {
    internalName: EntryFieldTypes.Symbol;
    icon?: EntryFieldTypes.AssetLink;
    image: EntryFieldTypes.AssetLink;
    title: EntryFieldTypes.Symbol;
    ctaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    disableCtaButton?: EntryFieldTypes.Boolean;
    ctaButtonIconVisible?: EntryFieldTypes.Boolean;
    ctaButtonIconOverride?: EntryFieldTypes.AssetLink;
    ctaButtonIconPositionOverride?: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    ctaButtonSizeOverride?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small">;
    ctaButtonTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButtonColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    tooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
    badge?: EntryFieldTypes.EntryLink<TypeBadgeSkeleton>;
}

export type TypePatchworkSkeleton = EntrySkeletonType<TypePatchworkFields, "patchwork">;
export type TypePatchwork<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePatchworkSkeleton, Modifiers, Locales>;
