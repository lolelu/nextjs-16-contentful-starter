import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProductDiscountFields {
    internalName: EntryFieldTypes.Symbol;
    value?: EntryFieldTypes.Symbol;
    label?: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol<"Currency" | "Percentage">;
}

export type TypeProductDiscountSkeleton = EntrySkeletonType<TypeProductDiscountFields, "productDiscount">;
export type TypeProductDiscount<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductDiscountSkeleton, Modifiers, Locales>;
