import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypePageSkeleton } from "./TypePage";

export interface TypeNavigationLinkFields {
    internalName: EntryFieldTypes.Symbol;
    label: EntryFieldTypes.Symbol;
    subLabel?: EntryFieldTypes.Symbol;
    active: EntryFieldTypes.Boolean;
    type: EntryFieldTypes.Symbol<"Media" | "Module" | "Page" | "Url">;
    icon?: EntryFieldTypes.AssetLink;
    targetType?: EntryFieldTypes.Symbol<"Blank" | "Parent" | "Self" | "Top">;
    moduleLink?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    pageLink?: EntryFieldTypes.EntryLink<TypePageSkeleton>;
    mediaLink?: EntryFieldTypes.AssetLink;
    urlLink?: EntryFieldTypes.Symbol;
    accountLinkType?: EntryFieldTypes.Symbol<"Authenticated" | "Logout" | "NotApplicable" | "RegisterProduct" | "SignIn" | "TrackOrder">;
    targetUserType?: EntryFieldTypes.Symbol<"All" | "Authenticated" | "Guest">;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    textColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    additionalBehaviours?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"setKasaNewExperienceCookie">>;
    linkType?: EntryFieldTypes.Symbol<"NewsletterPreference" | "Other">;
}

export type TypeNavigationLinkSkeleton = EntrySkeletonType<TypeNavigationLinkFields, "navigationLink">;
export type TypeNavigationLink<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNavigationLinkSkeleton, Modifiers, Locales>;
