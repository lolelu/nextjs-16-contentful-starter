import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeInputValidationSkeleton } from "./TypeInputValidation";
import type { TypeInputValueSkeleton } from "./TypeInputValue";

export interface TypeInputSelectValueFields {
    internalName: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol<"Datalist" | "DatalistMultiple" | "Radio" | "RadioMultiple">;
    nameLabel: EntryFieldTypes.Symbol;
    values: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeInputValueSkeleton>>;
    defaultSelectedValues?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeInputValueSkeleton>>;
    disabled: EntryFieldTypes.Boolean;
    validation?: EntryFieldTypes.EntryLink<TypeInputValidationSkeleton>;
    inputId: EntryFieldTypes.Symbol<"Address" | "City" | "Country" | "Email" | "FirstName" | "HouseNumber" | "LastName" | "MessageWithSar" | "MessageWithoutSar" | "ModelNumber" | "Other" | "Phone" | "PostalCode" | "ProductCatalog" | "ProductCatalogLanguage" | "ProductFamily" | "SSN" | "SerialNumber" | "Title" | "TwelveNc" | "UserTitle">;
    helpTextLabel?: EntryFieldTypes.Symbol;
    optionalLabel: EntryFieldTypes.Symbol;
}

export type TypeInputSelectValueSkeleton = EntrySkeletonType<TypeInputSelectValueFields, "inputSelectValue">;
export type TypeInputSelectValue<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeInputSelectValueSkeleton, Modifiers, Locales>;
