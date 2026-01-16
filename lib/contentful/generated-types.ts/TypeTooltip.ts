import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeTooltipFields {
    internalName: EntryFieldTypes.Symbol;
    label: EntryFieldTypes.Symbol;
    labelColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    text?: EntryFieldTypes.RichText;
    navigationLink?: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
}

export type TypeTooltipSkeleton = EntrySkeletonType<TypeTooltipFields, "tooltip">;
export type TypeTooltip<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTooltipSkeleton, Modifiers, Locales>;
