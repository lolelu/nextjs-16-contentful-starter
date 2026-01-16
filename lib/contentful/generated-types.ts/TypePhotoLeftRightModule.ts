import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";

export interface TypePhotoLeftRightModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    subTitle?: EntryFieldTypes.Symbol;
    text: EntryFieldTypes.RichText;
    note?: EntryFieldTypes.RichText;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    ctaButtonIconVisible?: EntryFieldTypes.Boolean;
    ctaButtonIconOverride?: EntryFieldTypes.AssetLink;
    ctaButtonIconPositionOverride?: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    ctaButtonSizeOverride?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small">;
    ctaButtonTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    ctaButtonColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    image: EntryFieldTypes.AssetLink;
    imagePosition: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    imageSize: EntryFieldTypes.Symbol<"Full" | "Large" | "Small">;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    productCode?: EntryFieldTypes.Symbol;
    offerLabel?: EntryFieldTypes.Symbol;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypePhotoLeftRightModuleSkeleton = EntrySkeletonType<TypePhotoLeftRightModuleFields, "photoLeftRightModule">;
export type TypePhotoLeftRightModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePhotoLeftRightModuleSkeleton, Modifiers, Locales>;
