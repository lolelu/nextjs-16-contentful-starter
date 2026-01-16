import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeMyOrderLabelsSkeleton } from "./TypeMyOrderLabels";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeTrackMyOrderModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    headerTitleLabel: EntryFieldTypes.Symbol;
    signInTitleLabel: EntryFieldTypes.Symbol;
    signInTextLabel: EntryFieldTypes.Symbol;
    signInLink: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    guestTitleLabel: EntryFieldTypes.Symbol;
    guestTextLabel: EntryFieldTypes.Symbol;
    emailAddressInputLabel: EntryFieldTypes.Symbol;
    orderNumberInputLabel: EntryFieldTypes.Symbol;
    noteLabel: EntryFieldTypes.Symbol;
    trackMyOrderLabel: EntryFieldTypes.Symbol;
    myOrderLabels: EntryFieldTypes.EntryLink<TypeMyOrderLabelsSkeleton>;
    enableMarginReduction?: EntryFieldTypes.Boolean;
    orderNotFoundMessage: EntryFieldTypes.Symbol;
}

export type TypeTrackMyOrderModuleSkeleton = EntrySkeletonType<TypeTrackMyOrderModuleFields, "trackMyOrderModule">;
export type TypeTrackMyOrderModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTrackMyOrderModuleSkeleton, Modifiers, Locales>;
