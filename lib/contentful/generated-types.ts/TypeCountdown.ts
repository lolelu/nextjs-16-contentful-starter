import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeColorSkeleton } from "./TypeColor";

export interface TypeCountdownFields {
    endDateTime: EntryFieldTypes.Date;
    internalName: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.RichText;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
}

export type TypeCountdownSkeleton = EntrySkeletonType<TypeCountdownFields, "countdown">;
export type TypeCountdown<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCountdownSkeleton, Modifiers, Locales>;
