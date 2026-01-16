import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeInputTextSkeleton } from "./TypeInputText";

export interface TypeProfileLabelsFields {
    internalName: EntryFieldTypes.Symbol;
    emailInput: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    firstNameInput: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    lastNameInput: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    birthDateInput: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    phoneInput: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    ssnInput?: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
}

export type TypeProfileLabelsSkeleton = EntrySkeletonType<TypeProfileLabelsFields, "profileLabels">;
export type TypeProfileLabels<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProfileLabelsSkeleton, Modifiers, Locales>;
