import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeModBlockFields {
    internalName: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    text: EntryFieldTypes.RichText;
    imageCaption: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    navigationLink: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
}

export type TypeModBlockSkeleton = EntrySkeletonType<TypeModBlockFields, "modBlock">;
export type TypeModBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeModBlockSkeleton, Modifiers, Locales>;
