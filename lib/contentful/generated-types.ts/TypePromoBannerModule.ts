import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePromoBannerSkeleton } from "./TypePromoBanner";

export interface TypePromoBannerModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    banners: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePromoBannerSkeleton>>;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypePromoBannerModuleSkeleton = EntrySkeletonType<TypePromoBannerModuleFields, "promoBannerModule">;
export type TypePromoBannerModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePromoBannerModuleSkeleton, Modifiers, Locales>;
