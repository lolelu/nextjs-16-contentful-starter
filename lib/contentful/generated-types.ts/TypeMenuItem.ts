import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeMenuContentSkeleton } from "./TypeMenuContent";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeMenuItemFields {
    internalName: EntryFieldTypes.Symbol;
    icon: EntryFieldTypes.AssetLink;
    name: EntryFieldTypes.Symbol;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    firstSubMenuTitle?: EntryFieldTypes.Symbol;
    firstSubMenuNavigationLinks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    firstSubMenuCtaLink?: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    secondSubMenuTitle?: EntryFieldTypes.Symbol;
    secondSubMenuNavigationLinks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    secondSubMenuCtaLink?: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    extraNavigationLinksTitle?: EntryFieldTypes.Symbol;
    extraNavigationLinks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    contents?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeMenuContentSkeleton>>;
}

export type TypeMenuItemSkeleton = EntrySkeletonType<TypeMenuItemFields, "menuItem">;
export type TypeMenuItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMenuItemSkeleton, Modifiers, Locales>;
