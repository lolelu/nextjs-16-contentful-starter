import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAlertSkeleton } from "./TypeAlert";
import type { TypeInputTextSkeleton } from "./TypeInputText";
import type { TypeMenuItemSkeleton } from "./TypeMenuItem";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeHeaderComponentFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    pageType: EntryFieldTypes.Symbol<"Main Website" | "Shared Homepage">;
    alerts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAlertSkeleton>>;
    secondaryNavigationLinks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    navigationAccountLinks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    logoFull: EntryFieldTypes.AssetLink;
    logoSimplified: EntryFieldTypes.AssetLink;
    backToCartNavigationLink: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    secureLabel: EntryFieldTypes.Symbol;
    menu: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeMenuItemSkeleton | TypeNavigationLinkSkeleton>>;
    inputSearch: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    priceFreeLabel: EntryFieldTypes.Symbol;
    searchFoundProductsLabel: EntryFieldTypes.Symbol;
    searchFoundCategoriesLabel: EntryFieldTypes.Symbol;
    searchFoundContentsLabel: EntryFieldTypes.Symbol;
    searchResultsNavigationLink: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    ourBrands?: EntryFieldTypes.Symbol;
    ourBrandsLinks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
}

export type TypeHeaderComponentSkeleton = EntrySkeletonType<TypeHeaderComponentFields, "headerComponent">;
export type TypeHeaderComponent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeaderComponentSkeleton, Modifiers, Locales>;
