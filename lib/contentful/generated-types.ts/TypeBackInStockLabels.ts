import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeInputTextSkeleton } from "./TypeInputText";

export interface TypeBackInStockLabelsFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    notificationLabel: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    contentTitle: EntryFieldTypes.Symbol;
    text: EntryFieldTypes.Symbol;
    privacyNote: EntryFieldTypes.RichText;
    inputEmail: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    inputEmailTitle: EntryFieldTypes.Symbol;
    selectedColorLabel: EntryFieldTypes.Symbol;
    submittedText: EntryFieldTypes.RichText;
    submittedTitle: EntryFieldTypes.Symbol;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeBackInStockLabelsSkeleton = EntrySkeletonType<TypeBackInStockLabelsFields, "backInStockLabels">;
export type TypeBackInStockLabels<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBackInStockLabelsSkeleton, Modifiers, Locales>;
