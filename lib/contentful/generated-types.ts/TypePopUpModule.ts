import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeCountdownSkeleton } from "./TypeCountdown";

export interface TypePopUpModuleFields {
    internalName: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    subTitle?: EntryFieldTypes.RichText;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    backgroundColor: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    size?: EntryFieldTypes.Symbol<"ImmersiveLarge" | "ImmersiveMedium" | "ImmersiveSmall">;
    logoImage?: EntryFieldTypes.AssetLink;
    image?: EntryFieldTypes.AssetLink;
    imageSmall?: EntryFieldTypes.AssetLink;
    imageMedium?: EntryFieldTypes.AssetLink;
    showOpacityMask: EntryFieldTypes.Boolean;
    textPosition?: EntryFieldTypes.Symbol<"Center" | "Left" | "Right">;
    previewVideoUrl?: EntryFieldTypes.Symbol;
    previewVideoUrlMobile?: EntryFieldTypes.Symbol;
    previewVideoUrlTablet?: EntryFieldTypes.Symbol;
    mobileAutoplay?: EntryFieldTypes.Boolean;
    desktopAutoplay?: EntryFieldTypes.Boolean;
    primaryCtaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    primaryCtaButtonIconVisible?: EntryFieldTypes.Boolean;
    primaryCtaButtonIconOverride?: EntryFieldTypes.AssetLink;
    primaryCtaButtonIconPositionOverride?: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    primaryCtaButtonSizeOverride?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small">;
    primaryCtaButtonTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    primaryCtaButtonColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    secondaryCtaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    secondaryCtaButtonIconVisible?: EntryFieldTypes.Boolean;
    secondaryCtaButtonIconOverride?: EntryFieldTypes.AssetLink;
    secondaryCtaButtonIconPositionOverride?: EntryFieldTypes.Symbol<"Above" | "Left" | "Right">;
    secondaryCtaButtonSizeOverride?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small">;
    secondaryCtaButtonTextColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    secondaryCtaButtonColorOverride?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    countdown?: EntryFieldTypes.EntryLink<TypeCountdownSkeleton>;
}

export type TypePopUpModuleSkeleton = EntrySkeletonType<TypePopUpModuleFields, "popUpModule">;
export type TypePopUpModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePopUpModuleSkeleton, Modifiers, Locales>;
