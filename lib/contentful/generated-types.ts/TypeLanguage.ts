import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLanguageFields {
    internalName: EntryFieldTypes.Symbol;
    locale: EntryFieldTypes.Symbol<"Austria_German" | "Belgium_Dutch" | "Belgium_French" | "Denmark_Danish" | "Finland_Finnish" | "France_French" | "Germany_German" | "Ireland_English" | "Italy_Italian" | "Netherlands_Dutch" | "Portugal_Portuguese" | "Spain_Spanish" | "Sweden_Swedish" | "Switzerland_French" | "Switzerland_German" | "Switzerland_Italian" | "UnitedKingdom_English">;
    label: EntryFieldTypes.Symbol;
    icon: EntryFieldTypes.AssetLink;
}

export type TypeLanguageSkeleton = EntrySkeletonType<TypeLanguageFields, "language">;
export type TypeLanguage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLanguageSkeleton, Modifiers, Locales>;
