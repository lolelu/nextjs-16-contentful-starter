import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeMediaBlockFields {
    internalName: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    videoUrl?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
}

export type TypeMediaBlockSkeleton = EntrySkeletonType<TypeMediaBlockFields, "mediaBlock">;
export type TypeMediaBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMediaBlockSkeleton, Modifiers, Locales>;
