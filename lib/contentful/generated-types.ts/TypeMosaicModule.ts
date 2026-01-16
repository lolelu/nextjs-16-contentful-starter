import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeMosaicModuleFields {
    title?: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    products?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    linkedContents?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    enableProductCta: EntryFieldTypes.Boolean;
    layoutType: EntryFieldTypes.Symbol<"Inspirational" | "Sales">;
    isDarkTheme: EntryFieldTypes.Boolean;
}

export type TypeMosaicModuleSkeleton = EntrySkeletonType<TypeMosaicModuleFields, "mosaicModule">;
export type TypeMosaicModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMosaicModuleSkeleton, Modifiers, Locales>;
