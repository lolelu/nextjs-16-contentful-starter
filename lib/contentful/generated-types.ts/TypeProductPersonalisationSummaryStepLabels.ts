import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProductPersonalisationSummaryStepLabelsFields {
    internalName: EntryFieldTypes.Symbol;
    isSingleton?: EntryFieldTypes.Symbol<"Yes">;
    congratulationLabel: EntryFieldTypes.Symbol;
    addToCartLabel: EntryFieldTypes.Symbol;
}

export type TypeProductPersonalisationSummaryStepLabelsSkeleton = EntrySkeletonType<TypeProductPersonalisationSummaryStepLabelsFields, "productPersonalisationSummaryStepLabels">;
export type TypeProductPersonalisationSummaryStepLabels<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductPersonalisationSummaryStepLabelsSkeleton, Modifiers, Locales>;
