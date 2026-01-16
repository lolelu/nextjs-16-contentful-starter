import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeModBlockSkeleton } from "./TypeModBlock";

export interface TypeModBlockListModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    modBlocks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeModBlockSkeleton>>;
    readMoreLessActive: EntryFieldTypes.Boolean;
    ctaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    ctaButtonIconVisible?: EntryFieldTypes.Boolean;
    ctaButtonIconOverride?: EntryFieldTypes.AssetLink;
    ctaButtonIconPositionOverride?: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    ctaButtonSizeOverride?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small">;
    ctaButtonTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButtonColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    readMoreLabel: EntryFieldTypes.Symbol;
    readLessLabel: EntryFieldTypes.Symbol;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeModBlockListModuleSkeleton = EntrySkeletonType<TypeModBlockListModuleFields, "modBlockListModule">;
export type TypeModBlockListModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeModBlockListModuleSkeleton, Modifiers, Locales>;
