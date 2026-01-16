import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeColorSkeleton } from "./TypeColor";

export interface TypeProductComparisonFields {
    internalName: EntryFieldTypes.Symbol;
    productTwelveNc?: EntryFieldTypes.Symbol;
    productTwelveNcOld?: EntryFieldTypes.Symbol;
    parentPartNumber?: EntryFieldTypes.Symbol;
    label?: EntryFieldTypes.Symbol;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    borderColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
}

export type TypeProductComparisonSkeleton = EntrySkeletonType<TypeProductComparisonFields, "productComparison">;
export type TypeProductComparison<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductComparisonSkeleton, Modifiers, Locales>;
