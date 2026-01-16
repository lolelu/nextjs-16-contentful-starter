import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeInputValidationSkeleton } from "./TypeInputValidation";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypeInputSelectFields {
    internalName: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol<"Checkbox">;
    valueLabel: EntryFieldTypes.RichText;
    defaultActive: EntryFieldTypes.Boolean;
    disabled: EntryFieldTypes.Boolean;
    validation?: EntryFieldTypes.EntryLink<TypeInputValidationSkeleton>;
    inputId: EntryFieldTypes.Symbol<"Address" | "City" | "Country" | "Email" | "FirstName" | "HouseNumber" | "LastName" | "MessageWithSar" | "MessageWithoutSar" | "ModelNumber" | "Other" | "Phone" | "PostalCode" | "ProductCatalog" | "ProductCatalogLanguage" | "ProductFamily" | "SSN" | "SerialNumber" | "Title" | "TwelveNc" | "UserTitle">;
    helpTextLabel?: EntryFieldTypes.Symbol;
    optionalLabel: EntryFieldTypes.Symbol;
    tooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
}

export type TypeInputSelectSkeleton = EntrySkeletonType<TypeInputSelectFields, "inputSelect">;
export type TypeInputSelect<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeInputSelectSkeleton, Modifiers, Locales>;
