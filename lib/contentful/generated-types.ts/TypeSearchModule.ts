import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeInputTextSkeleton } from "./TypeInputText";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeSearchModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    searchType: EntryFieldTypes.Symbol;
    bannerBackgroundImage?: EntryFieldTypes.AssetLink;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    title: EntryFieldTypes.Symbol;
    shortDescription?: EntryFieldTypes.RichText;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    inputSearch: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    resultsNavigationLink: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeSearchModuleSkeleton = EntrySkeletonType<TypeSearchModuleFields, "searchModule">;
export type TypeSearchModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSearchModuleSkeleton, Modifiers, Locales>;
