import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAlertSkeleton } from "./TypeAlert";

export interface TypeQrCodeSplashPageFields {
    internalName: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    alerts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAlertSkeleton>>;
    introText: EntryFieldTypes.Text;
    jsonMap: EntryFieldTypes.Object;
    copyrightText: EntryFieldTypes.Text;
    backgroundImage?: EntryFieldTypes.AssetLink;
}

export type TypeQrCodeSplashPageSkeleton = EntrySkeletonType<TypeQrCodeSplashPageFields, "qrCodeSplashPage">;
export type TypeQrCodeSplashPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeQrCodeSplashPageSkeleton, Modifiers, Locales>;
