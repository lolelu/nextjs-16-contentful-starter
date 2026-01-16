import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeProductSpecificationModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    descriptionLabel: EntryFieldTypes.Symbol;
    dimensionsTitle: EntryFieldTypes.Symbol;
    documentsTitle: EntryFieldTypes.Symbol;
    warrantyCallToAction: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeProductSpecificationModuleSkeleton = EntrySkeletonType<TypeProductSpecificationModuleFields, "productSpecificationModule">;
export type TypeProductSpecificationModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductSpecificationModuleSkeleton, Modifiers, Locales>;
