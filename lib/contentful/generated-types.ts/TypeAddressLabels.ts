import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeInputSelectSkeleton } from "./TypeInputSelect";
import type { TypeInputSelectValueSkeleton } from "./TypeInputSelectValue";
import type { TypeInputTextSkeleton } from "./TypeInputText";

export interface TypeAddressLabelsFields {
    internalName: EntryFieldTypes.Symbol;
    recipientFirstNameInput?: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    recipientLastNameInput?: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    streetInput?: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    houseNumberInput?: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    boxInput?: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    postalCodeInput: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    cityInput: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    countryInput: EntryFieldTypes.EntryLink<TypeInputSelectValueSkeleton>;
    phoneInput?: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    isDefaultBillingAddressInput: EntryFieldTypes.EntryLink<TypeInputSelectSkeleton>;
    isDefaultDeliveryAddressInput: EntryFieldTypes.EntryLink<TypeInputSelectSkeleton>;
    ssnInput?: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    modifyAddressLabel: EntryFieldTypes.Symbol;
    addNewAddressLabel: EntryFieldTypes.Symbol;
    defaultDeliveryAddressLabel: EntryFieldTypes.Symbol;
    defaultBillingAddressLabel: EntryFieldTypes.Symbol;
}

export type TypeAddressLabelsSkeleton = EntrySkeletonType<TypeAddressLabelsFields, "addressLabels">;
export type TypeAddressLabels<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeAddressLabelsSkeleton, Modifiers, Locales>;
