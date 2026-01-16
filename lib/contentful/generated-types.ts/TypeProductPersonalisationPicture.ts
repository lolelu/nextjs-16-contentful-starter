import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProductPersonalisationPictureFields {
    internalName: EntryFieldTypes.Symbol;
    twelveNc: EntryFieldTypes.Symbol;
    twelveNcOld?: EntryFieldTypes.Symbol;
    picture: EntryFieldTypes.AssetLink;
}

export type TypeProductPersonalisationPictureSkeleton = EntrySkeletonType<TypeProductPersonalisationPictureFields, "productPersonalisationPicture">;
export type TypeProductPersonalisationPicture<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductPersonalisationPictureSkeleton, Modifiers, Locales>;
