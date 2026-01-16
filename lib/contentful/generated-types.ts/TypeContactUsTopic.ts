import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeInputSelectSkeleton } from "./TypeInputSelect";
import type { TypeInputSelectValueSkeleton } from "./TypeInputSelectValue";
import type { TypeInputTextSkeleton } from "./TypeInputText";

export interface TypeContactUsTopicFields {
    internalName: EntryFieldTypes.Symbol;
    topicLabel: EntryFieldTypes.Symbol;
    topicId: EntryFieldTypes.Symbol;
    category: EntryFieldTypes.Symbol<"CatalogRequest" | "Generic" | "IfuRequest" | "InfoApp" | "InfoCookBook" | "InfoDealer" | "InfoOrder" | "InfoPayment" | "InfoTech" | "PD1">;
    target: EntryFieldTypes.Symbol<"R1" | "R2" | "R3">;
    inputs?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeInputSelectSkeleton | TypeInputSelectValueSkeleton | TypeInputTextSkeleton>>;
}

export type TypeContactUsTopicSkeleton = EntrySkeletonType<TypeContactUsTopicFields, "contactUsTopic">;
export type TypeContactUsTopic<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContactUsTopicSkeleton, Modifiers, Locales>;
