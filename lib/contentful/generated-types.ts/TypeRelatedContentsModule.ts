import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";
import type { TypePageSkeleton } from "./TypePage";

export interface TypeRelatedContentsModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    titleLabel: EntryFieldTypes.Symbol;
    titleAlignment: EntryFieldTypes.Symbol<"Center" | "Left" | "Right">;
    browseAllLink: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    collapsedCards?: EntryFieldTypes.Boolean;
    relatedPages: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePageSkeleton>>;
    actionLabel: EntryFieldTypes.Symbol;
    actionLabelColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    nextLabel: EntryFieldTypes.Symbol;
    previousLabel: EntryFieldTypes.Symbol;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    displayType: EntryFieldTypes.Symbol<"Carrousel" | "Grid">;
    imagePosition: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeRelatedContentsModuleSkeleton = EntrySkeletonType<TypeRelatedContentsModuleFields, "relatedContentsModule">;
export type TypeRelatedContentsModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRelatedContentsModuleSkeleton, Modifiers, Locales>;
