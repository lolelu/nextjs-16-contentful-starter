import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeColumnContentSkeleton } from "./TypeColumnContent";

export interface TypeColumnContentWrapperModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    htmlText?: EntryFieldTypes.RichText;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    columnContents: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeColumnContentSkeleton>>;
    mobileGridLayout?: EntryFieldTypes.Boolean;
    automaticNumberDisplay?: EntryFieldTypes.Boolean;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeColumnContentWrapperModuleSkeleton = EntrySkeletonType<TypeColumnContentWrapperModuleFields, "columnContentWrapperModule">;
export type TypeColumnContentWrapperModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeColumnContentWrapperModuleSkeleton, Modifiers, Locales>;
