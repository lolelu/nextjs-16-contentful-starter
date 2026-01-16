import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeRelatedProductsModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    titleAlignment: EntryFieldTypes.Symbol<"Center" | "Left" | "Right">;
    subtitle?: EntryFieldTypes.RichText;
    salesforceID?: EntryFieldTypes.Symbol;
    navigationLink?: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    nextLabel: EntryFieldTypes.Symbol;
    previousLabel: EntryFieldTypes.Symbol;
    twelveNcs?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    grid?: EntryFieldTypes.Boolean;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeRelatedProductsModuleSkeleton = EntrySkeletonType<TypeRelatedProductsModuleFields, "relatedProductsModule">;
export type TypeRelatedProductsModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRelatedProductsModuleSkeleton, Modifiers, Locales>;
