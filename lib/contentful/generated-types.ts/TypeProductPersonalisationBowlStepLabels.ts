import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypeProductPersonalisationBowlStepLabelsFields {
    internalName: EntryFieldTypes.Symbol;
    isSingleton?: EntryFieldTypes.Symbol<"Yes">;
    bowlTitle: EntryFieldTypes.Symbol;
    bowlSubtitleLabel: EntryFieldTypes.Symbol;
    bowlIntroText: EntryFieldTypes.Symbol;
    bowlBadgeTooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
    bowlDiscountLabel: EntryFieldTypes.Symbol;
    addBowlLabel: EntryFieldTypes.Symbol;
    includedBowlTitle: EntryFieldTypes.Symbol;
    additionalBowlLabel: EntryFieldTypes.Symbol;
}

export type TypeProductPersonalisationBowlStepLabelsSkeleton = EntrySkeletonType<TypeProductPersonalisationBowlStepLabelsFields, "productPersonalisationBowlStepLabels">;
export type TypeProductPersonalisationBowlStepLabels<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductPersonalisationBowlStepLabelsSkeleton, Modifiers, Locales>;
