import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypePromoFormModuleFields {
    internalName: EntryFieldTypes.Symbol;
    jsonForm: EntryFieldTypes.Object;
    thankYouTitle: EntryFieldTypes.Symbol;
    thankYouText: EntryFieldTypes.RichText;
    errorMessage: EntryFieldTypes.Symbol;
    thankYouCta: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
}

export type TypePromoFormModuleSkeleton = EntrySkeletonType<TypePromoFormModuleFields, "promoFormModule">;
export type TypePromoFormModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePromoFormModuleSkeleton, Modifiers, Locales>;
