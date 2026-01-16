import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContactUsTopicSkeleton } from "./TypeContactUsTopic";

export interface TypeContactUsSubjectFields {
    internalName: EntryFieldTypes.Symbol;
    subjectLabel: EntryFieldTypes.Symbol;
    subjectId: EntryFieldTypes.Symbol;
    topics: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContactUsTopicSkeleton>>;
}

export type TypeContactUsSubjectSkeleton = EntrySkeletonType<TypeContactUsSubjectFields, "contactUsSubject">;
export type TypeContactUsSubject<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContactUsSubjectSkeleton, Modifiers, Locales>;
