import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeProductPersonalisationPictureSkeleton } from "./TypeProductPersonalisationPicture";

export interface TypePersonalisationDynamicPicturesFields {
    internalName: EntryFieldTypes.Symbol;
    colorName: EntryFieldTypes.Symbol;
    twelveNc?: EntryFieldTypes.Symbol;
    twelveNcOld?: EntryFieldTypes.Symbol;
    engravingPicture: EntryFieldTypes.AssetLink;
    defaultBowlPicture: EntryFieldTypes.AssetLink;
    bowlsPersonalisationPictures: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeProductPersonalisationPictureSkeleton>>;
}

export type TypePersonalisationDynamicPicturesSkeleton = EntrySkeletonType<TypePersonalisationDynamicPicturesFields, "personalisationDynamicPictures">;
export type TypePersonalisationDynamicPictures<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePersonalisationDynamicPicturesSkeleton, Modifiers, Locales>;
