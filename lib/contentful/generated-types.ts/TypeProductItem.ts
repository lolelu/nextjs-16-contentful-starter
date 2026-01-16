import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProductItemFields {
    internalName: EntryFieldTypes.Symbol;
    type?: EntryFieldTypes.Symbol<"Accessory" | "Other">;
    twelveNc?: EntryFieldTypes.Symbol;
    twelveNcOld?: EntryFieldTypes.Symbol;
    name: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
    thumbnailImage: EntryFieldTypes.AssetLink;
}

export type TypeProductItemSkeleton = EntrySkeletonType<TypeProductItemFields, "productItem">;
export type TypeProductItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductItemSkeleton, Modifiers, Locales>;
