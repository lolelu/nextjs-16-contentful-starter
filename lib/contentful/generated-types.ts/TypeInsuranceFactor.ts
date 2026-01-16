import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeInsuranceFactorFields {
    internalName: EntryFieldTypes.Symbol;
    text: EntryFieldTypes.RichText;
    icon: EntryFieldTypes.AssetLink;
}

export type TypeInsuranceFactorSkeleton = EntrySkeletonType<TypeInsuranceFactorFields, "insuranceFactor">;
export type TypeInsuranceFactor<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeInsuranceFactorSkeleton, Modifiers, Locales>;
