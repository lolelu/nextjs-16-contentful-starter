import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeInsuranceFactorSkeleton } from "./TypeInsuranceFactor";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeWeAcceptComponentFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    isSingleton?: EntryFieldTypes.Symbol<"Yes">;
    paymentMethodTitle: EntryFieldTypes.Symbol;
    paymentMethods?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    insuranceFactors?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeInsuranceFactorSkeleton>>;
}

export type TypeWeAcceptComponentSkeleton = EntrySkeletonType<TypeWeAcceptComponentFields, "weAcceptComponent">;
export type TypeWeAcceptComponent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeWeAcceptComponentSkeleton, Modifiers, Locales>;
