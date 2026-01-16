import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAlertSkeleton } from "./TypeAlert";
import type { TypeHelpMeChooseStepSkeleton } from "./TypeHelpMeChooseStep";

export interface TypeHelpMeChoosePageFields {
    name: EntryFieldTypes.Symbol;
    internalName: EntryFieldTypes.Symbol;
    alerts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAlertSkeleton>>;
    pageTitle: EntryFieldTypes.Symbol;
    steps: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHelpMeChooseStepSkeleton>>;
}

export type TypeHelpMeChoosePageSkeleton = EntrySkeletonType<TypeHelpMeChoosePageFields, "helpMeChoosePage">;
export type TypeHelpMeChoosePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHelpMeChoosePageSkeleton, Modifiers, Locales>;
