import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeInputValidationSkeleton } from "./TypeInputValidation";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypeInputTextFields {
    internalName: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol<"Date" | "Email" | "Number" | "Password" | "Search" | "Tel" | "Text">;
    defaultTextValue?: EntryFieldTypes.Symbol;
    nameLabel: EntryFieldTypes.Symbol;
    placeholderLabel?: EntryFieldTypes.Symbol;
    actionLabel?: EntryFieldTypes.Symbol;
    infoLabel?: EntryFieldTypes.Text;
    disabled: EntryFieldTypes.Boolean;
    validation?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeInputValidationSkeleton>>;
    warnings?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeInputValidationSkeleton>>;
    inputId: EntryFieldTypes.Symbol<"Address" | "City" | "Country" | "Email" | "FirstName" | "HouseNumber" | "LastName" | "MessageWithSar" | "MessageWithoutSar" | "ModelNumber" | "Other" | "Phone" | "PostalCode" | "ProductCatalog" | "ProductCatalogLanguage" | "ProductFamily" | "SSN" | "SerialNumber" | "Title" | "TwelveNc" | "UserTitle">;
    helpTextLabel?: EntryFieldTypes.Symbol;
    optionalLabel: EntryFieldTypes.Symbol;
    tooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
}

export type TypeInputTextSkeleton = EntrySkeletonType<TypeInputTextFields, "inputText">;
export type TypeInputText<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeInputTextSkeleton, Modifiers, Locales>;
