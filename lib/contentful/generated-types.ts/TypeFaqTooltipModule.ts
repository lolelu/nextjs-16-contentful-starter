import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypePageSkeleton } from "./TypePage";

export interface TypeFaqTooltipModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    imageCaption: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    ctaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    ctaButtonIconVisible?: EntryFieldTypes.Boolean;
    ctaButtonIconOverride?: EntryFieldTypes.AssetLink;
    ctaButtonIconPositionOverride?: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    ctaButtonSizeOverride?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small">;
    ctaButtonTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButtonColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    faqPages: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePageSkeleton>>;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeFaqTooltipModuleSkeleton = EntrySkeletonType<TypeFaqTooltipModuleFields, "faqTooltipModule">;
export type TypeFaqTooltipModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFaqTooltipModuleSkeleton, Modifiers, Locales>;
