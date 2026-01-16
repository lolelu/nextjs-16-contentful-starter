import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeMenuContentFields {
    internalName: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    text: EntryFieldTypes.RichText;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    textUppercase?: EntryFieldTypes.Boolean;
    textDescription?: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    imagePosition: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    link: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
}

export type TypeMenuContentSkeleton = EntrySkeletonType<TypeMenuContentFields, "menuContent">;
export type TypeMenuContent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMenuContentSkeleton, Modifiers, Locales>;
