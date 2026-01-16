import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeColorSkeleton } from "./TypeColor";

export interface TypeBadgeFields {
    internalName: EntryFieldTypes.Symbol;
    label: EntryFieldTypes.Symbol;
    icon?: EntryFieldTypes.AssetLink;
    position: EntryFieldTypes.Symbol<"Left" | "Right">;
    textColor: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    backgroundColor: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    borderColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
}

export type TypeBadgeSkeleton = EntrySkeletonType<TypeBadgeFields, "badge">;
export type TypeBadge<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBadgeSkeleton, Modifiers, Locales>;
