import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeButtonFields {
    internalName: EntryFieldTypes.Symbol;
    label: EntryFieldTypes.Symbol;
    navigationLink: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    icon?: EntryFieldTypes.AssetLink;
    iconPosition?: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    size?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small">;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    buttonColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    isTransparent?: EntryFieldTypes.Boolean;
}

export type TypeButtonSkeleton = EntrySkeletonType<TypeButtonFields, "button">;
export type TypeButton<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeButtonSkeleton, Modifiers, Locales>;
