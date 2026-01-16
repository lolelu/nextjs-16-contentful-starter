import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHeroColumnBannerSkeleton } from "./TypeHeroColumnBanner";

export interface TypeHeroColumnBannerWrapperModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    imageSize: EntryFieldTypes.Symbol<"Full" | "Large" | "Small">;
    heroColumnBanners: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHeroColumnBannerSkeleton>>;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeHeroColumnBannerWrapperModuleSkeleton = EntrySkeletonType<TypeHeroColumnBannerWrapperModuleFields, "heroColumnBannerWrapperModule">;
export type TypeHeroColumnBannerWrapperModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroColumnBannerWrapperModuleSkeleton, Modifiers, Locales>;
