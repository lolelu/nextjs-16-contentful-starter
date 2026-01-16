import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeOrderStatusLabelsFields {
    internalName: EntryFieldTypes.Symbol;
    preparingForShipment: EntryFieldTypes.Symbol;
    cancelled: EntryFieldTypes.Symbol;
    shipped: EntryFieldTypes.Symbol;
    partiallyShipped: EntryFieldTypes.Symbol;
    delivered: EntryFieldTypes.Symbol;
    partiallyDelivered: EntryFieldTypes.Symbol;
    deliveryFailed: EntryFieldTypes.Symbol;
    returnProcessing: EntryFieldTypes.Symbol;
    returned: EntryFieldTypes.Symbol;
    partiallyReturned: EntryFieldTypes.Symbol;
}

export type TypeOrderStatusLabelsSkeleton = EntrySkeletonType<TypeOrderStatusLabelsFields, "orderStatusLabels">;
export type TypeOrderStatusLabels<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeOrderStatusLabelsSkeleton, Modifiers, Locales>;
