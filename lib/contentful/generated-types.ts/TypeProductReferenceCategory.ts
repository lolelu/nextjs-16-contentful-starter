import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProductReferenceCategoryFields {
    internalName: EntryFieldTypes.Symbol;
    name: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    referenceExampleImage?: EntryFieldTypes.AssetLink;
    legendLabels?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    subCategories?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeProductReferenceCategorySkeleton>>;
}

export type TypeProductReferenceCategorySkeleton = EntrySkeletonType<TypeProductReferenceCategoryFields, "productReferenceCategory">;
export type TypeProductReferenceCategory<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductReferenceCategorySkeleton, Modifiers, Locales>;
