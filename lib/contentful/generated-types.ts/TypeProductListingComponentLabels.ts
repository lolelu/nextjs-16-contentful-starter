import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProductListingComponentLabelsFields {
    internalName: EntryFieldTypes.Symbol;
    nameOrderByLabel: EntryFieldTypes.Symbol;
    priceOrderByLabel: EntryFieldTypes.Symbol;
    filterLabel: EntryFieldTypes.Symbol;
    clearFilterLabel: EntryFieldTypes.Symbol;
    applyFilterLabel: EntryFieldTypes.Symbol;
    extraColorLabel: EntryFieldTypes.Symbol;
    clearFilterColorTitle: EntryFieldTypes.Symbol;
    clearFilterColorText: EntryFieldTypes.Symbol;
    clearFilterColorYesActionLabel: EntryFieldTypes.Symbol;
    clearFilterColorNoActionLabel: EntryFieldTypes.Symbol;
    productPriceFreeLabel: EntryFieldTypes.Symbol;
    noProductsAvailableLabel: EntryFieldTypes.Symbol;
}

export type TypeProductListingComponentLabelsSkeleton = EntrySkeletonType<TypeProductListingComponentLabelsFields, "productListingComponentLabels">;
export type TypeProductListingComponentLabels<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductListingComponentLabelsSkeleton, Modifiers, Locales>;
