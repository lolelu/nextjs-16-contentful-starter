import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeInputValidationFields {
    internalName: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol<"CodiceFiscale" | "Email" | "FrenchVat" | "GenericVat" | "MaxLength" | "Password" | "PhoneNumber" | "PostalCodeIsSupported" | "Required" | "SameEmail" | "SamePassword" | "SpanishNifNie" | "missingNumberInStreet">;
    label: EntryFieldTypes.Symbol;
}

export type TypeInputValidationSkeleton = EntrySkeletonType<TypeInputValidationFields, "inputValidation">;
export type TypeInputValidation<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeInputValidationSkeleton, Modifiers, Locales>;
