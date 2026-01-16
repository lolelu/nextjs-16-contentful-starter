import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeDeliveryOptionFields {
    internalName: EntryFieldTypes.Symbol;
    icon: EntryFieldTypes.AssetLink;
    name: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol<"Express" | "Pickup" | "Standard">;
}

export type TypeDeliveryOptionSkeleton = EntrySkeletonType<TypeDeliveryOptionFields, "deliveryOption">;
export type TypeDeliveryOption<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeDeliveryOptionSkeleton, Modifiers, Locales>;
