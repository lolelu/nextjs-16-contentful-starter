import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeInputLabelsSkeleton } from "./TypeInputLabels";
import type { TypeInputValidationSkeleton } from "./TypeInputValidation";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypeInputFields {
    internalName: EntryFieldTypes.Symbol;
    optional: EntryFieldTypes.Boolean;
    labels: EntryFieldTypes.EntryLink<TypeInputLabelsSkeleton>;
    validations?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeInputValidationSkeleton>>;
    type: EntryFieldTypes.Symbol<"Checkbox" | "Date" | "Mail" | "Number" | "Password" | "Radio" | "Search" | "Tel" | "Text">;
    tooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
}

export type TypeInputSkeleton = EntrySkeletonType<TypeInputFields, "input">;
export type TypeInput<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeInputSkeleton, Modifiers, Locales>;
