import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypeAlertFields {
    internalName: EntryFieldTypes.Symbol;
    text: EntryFieldTypes.RichText;
    icon?: EntryFieldTypes.AssetLink;
    navigationLink?: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    tooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
    position: EntryFieldTypes.Symbol<"Center" | "Left" | "Right">;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    customCountdownDateTime?: EntryFieldTypes.Date;
    closeIconColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
}

export type TypeAlertSkeleton = EntrySkeletonType<TypeAlertFields, "alert">;
export type TypeAlert<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeAlertSkeleton, Modifiers, Locales>;
