import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeInputTextSkeleton } from "./TypeInputText";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeAbandonedCartPopupFields {
    internalName: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    text: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
    inputEmail: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    submitLabel: EntryFieldTypes.Symbol;
    checkoutCta: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
}

export type TypeAbandonedCartPopupSkeleton = EntrySkeletonType<TypeAbandonedCartPopupFields, "abandonedCartPopup">;
export type TypeAbandonedCartPopup<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeAbandonedCartPopupSkeleton, Modifiers, Locales>;
