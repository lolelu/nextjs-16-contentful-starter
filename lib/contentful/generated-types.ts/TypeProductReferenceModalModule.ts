import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeProductReferenceCategorySkeleton } from "./TypeProductReferenceCategory";

export interface TypeProductReferenceModalModuleFields {
    titleLabel?: EntryFieldTypes.Symbol;
    subtitleLabel?: EntryFieldTypes.Symbol;
    selectProductLabel?: EntryFieldTypes.Symbol;
    productRangeLabel?: EntryFieldTypes.Symbol;
    productCategoryLabel?: EntryFieldTypes.Symbol;
    exampleReferenceLabel?: EntryFieldTypes.Symbol;
    productRanges?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeProductReferenceCategorySkeleton>>;
}

export type TypeProductReferenceModalModuleSkeleton = EntrySkeletonType<TypeProductReferenceModalModuleFields, "productReferenceModalModule">;
export type TypeProductReferenceModalModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductReferenceModalModuleSkeleton, Modifiers, Locales>;
