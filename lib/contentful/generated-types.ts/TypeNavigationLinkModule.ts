import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";
import type { TypeNavigationLinkGroupSkeleton } from "./TypeNavigationLinkGroup";

export interface TypeNavigationLinkModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol<"AnchorBar" | "ButtonList" | "DropdownList" | "HighlightedList" | "IconList">;
    title?: EntryFieldTypes.Symbol;
    dropdownPlaceholder?: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.RichText;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    navigationLinks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    groups?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkGroupSkeleton>>;
    ctaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    ctaButtonIconVisible?: EntryFieldTypes.Boolean;
    ctaButtonIconOverride?: EntryFieldTypes.AssetLink;
    ctaButtonIconPositionOverride?: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    ctaButtonSizeOverride?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small">;
    ctaButtonTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButtonColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeNavigationLinkModuleSkeleton = EntrySkeletonType<TypeNavigationLinkModuleFields, "navigationLinkModule">;
export type TypeNavigationLinkModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNavigationLinkModuleSkeleton, Modifiers, Locales>;
