import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypeProductPersonalisationColorStepLabelsFields {
    internalName: EntryFieldTypes.Symbol;
    isSingleton?: EntryFieldTypes.Symbol<"Yes">;
    colorTitle: EntryFieldTypes.Symbol;
    colorBadgeTooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
    colorDiscountLabel: EntryFieldTypes.Symbol;
    selectOtherColorLabel: EntryFieldTypes.Symbol;
    colorsNotFoundErrorMessage: EntryFieldTypes.Symbol;
    colorVariantNotFoundErrorMessage: EntryFieldTypes.Symbol;
    colorAddFailureErrorMessage: EntryFieldTypes.Symbol;
    colorRemoveFailureErrorMessage: EntryFieldTypes.Symbol;
}

export type TypeProductPersonalisationColorStepLabelsSkeleton = EntrySkeletonType<TypeProductPersonalisationColorStepLabelsFields, "productPersonalisationColorStepLabels">;
export type TypeProductPersonalisationColorStepLabels<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductPersonalisationColorStepLabelsSkeleton, Modifiers, Locales>;
