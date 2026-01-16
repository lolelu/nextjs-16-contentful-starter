import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeMyAccountCommonFields {
    internalName: EntryFieldTypes.Symbol;
    helloTitle: EntryFieldTypes.Symbol;
    overviewTabLink: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    myOrdersTabLink: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    subscriptionsTabLink?: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    wishlistTabLink?: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    registeredProductsTabLink: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    myDetailsTabLink: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    newsletterPreferencesTabLink: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    tabs?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
}

export type TypeMyAccountCommonSkeleton = EntrySkeletonType<TypeMyAccountCommonFields, "myAccountCommon">;
export type TypeMyAccountCommon<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMyAccountCommonSkeleton, Modifiers, Locales>;
