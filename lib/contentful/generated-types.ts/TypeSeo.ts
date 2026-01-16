import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSeoFields {
    name: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    contentGroup?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    keywords?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    image?: EntryFieldTypes.AssetLink;
    no_index?: EntryFieldTypes.Boolean;
    no_follow?: EntryFieldTypes.Boolean;
    hreflangTags?: EntryFieldTypes.Object;
}

export type TypeSeoSkeleton = EntrySkeletonType<TypeSeoFields, "seo">;
export type TypeSeo<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSeoSkeleton, Modifiers, Locales>;
