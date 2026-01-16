import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypeProductPersonalisationAccessoryStepLabelsFields {
    internalName: EntryFieldTypes.Symbol;
    isSingleton?: EntryFieldTypes.Symbol<"Yes">;
    accessoryTitle: EntryFieldTypes.Symbol;
    accessorySubtitleLabel: EntryFieldTypes.Symbol;
    accessoryIntroText: EntryFieldTypes.Symbol;
    accessoryBadgeTooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
    accessoryDiscountLabel: EntryFieldTypes.Symbol;
    addAccessoryLabel: EntryFieldTypes.Symbol;
    addAnotherAccessory: EntryFieldTypes.Symbol;
    includedAccessoryTitle: EntryFieldTypes.Symbol;
    additionalAccessoryLabel: EntryFieldTypes.Symbol;
}

export type TypeProductPersonalisationAccessoryStepLabelsSkeleton = EntrySkeletonType<TypeProductPersonalisationAccessoryStepLabelsFields, "productPersonalisationAccessoryStepLabels">;
export type TypeProductPersonalisationAccessoryStepLabels<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductPersonalisationAccessoryStepLabelsSkeleton, Modifiers, Locales>;
