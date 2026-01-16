import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeInputTextSkeleton } from "./TypeInputText";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypeProductPersonalisationEngravingStepLabelsFields {
    internalName: EntryFieldTypes.Symbol;
    isSingleton?: EntryFieldTypes.Symbol<"Yes">;
    engravingTitle: EntryFieldTypes.Symbol;
    engravingText: EntryFieldTypes.Symbol;
    engravingLegalText: EntryFieldTypes.Symbol;
    engravingInputText: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    engraving: EntryFieldTypes.Symbol;
    engravingBadgeTooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
    engravingDiscountLabel: EntryFieldTypes.Symbol;
    engravingMaxLengthExceededErrorMessage: EntryFieldTypes.Symbol;
}

export type TypeProductPersonalisationEngravingStepLabelsSkeleton = EntrySkeletonType<TypeProductPersonalisationEngravingStepLabelsFields, "productPersonalisationEngravingStepLabels">;
export type TypeProductPersonalisationEngravingStepLabels<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductPersonalisationEngravingStepLabelsSkeleton, Modifiers, Locales>;
