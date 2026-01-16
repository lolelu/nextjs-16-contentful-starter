import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBadgeSkeleton } from "./TypeBadge";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";

export interface TypeColumnContentFields {
    internalName: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    htmlDescription: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
    videoUrl?: EntryFieldTypes.Symbol;
    ctaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    ctaButtonIconVisible?: EntryFieldTypes.Boolean;
    ctaButtonIconOverride?: EntryFieldTypes.AssetLink;
    ctaButtonIconPositionOverride?: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    ctaButtonSizeOverride?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small">;
    ctaButtonTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButtonColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    badge?: EntryFieldTypes.EntryLink<TypeBadgeSkeleton>;
    badgeIconVisible?: EntryFieldTypes.Boolean;
    badgeIconOverride?: EntryFieldTypes.AssetLink;
    badgePositionOverride?: EntryFieldTypes.Symbol<"Left" | "Right">;
    badgeTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    badgeBackgroundColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
}

export type TypeColumnContentSkeleton = EntrySkeletonType<TypeColumnContentFields, "columnContent">;
export type TypeColumnContent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeColumnContentSkeleton, Modifiers, Locales>;
