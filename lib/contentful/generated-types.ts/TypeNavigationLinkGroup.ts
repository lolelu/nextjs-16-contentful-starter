import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeNavigationLinkGroupFields {
    internalName: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    subTitle?: EntryFieldTypes.Symbol;
    label?: EntryFieldTypes.Symbol;
    icon?: EntryFieldTypes.AssetLink;
    isExpanded: EntryFieldTypes.Boolean;
    links?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    viewAllLink?: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    anchorText?: EntryFieldTypes.Symbol;
}

export type TypeNavigationLinkGroupSkeleton = EntrySkeletonType<TypeNavigationLinkGroupFields, "navigationLinkGroup">;
export type TypeNavigationLinkGroup<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNavigationLinkGroupSkeleton, Modifiers, Locales>;
