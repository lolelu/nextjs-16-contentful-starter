import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePatchworkSkeleton } from "./TypePatchwork";

export interface TypePatchworkModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.RichText;
    patchworks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePatchworkSkeleton>>;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypePatchworkModuleSkeleton = EntrySkeletonType<TypePatchworkModuleFields, "patchworkModule">;
export type TypePatchworkModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePatchworkModuleSkeleton, Modifiers, Locales>;
