import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeMediaModuleSkeleton } from "./TypeMediaModule";

export interface TypeMediaSliderModuleFields {
    internalName: EntryFieldTypes.Symbol;
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeMediaModuleSkeleton>>;
}

export type TypeMediaSliderModuleSkeleton = EntrySkeletonType<TypeMediaSliderModuleFields, "mediaSliderModule">;
export type TypeMediaSliderModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMediaSliderModuleSkeleton, Modifiers, Locales>;
