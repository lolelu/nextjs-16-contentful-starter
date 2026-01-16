import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAddressLabelsSkeleton } from "./TypeAddressLabels";
import type { TypeInputSelectSkeleton } from "./TypeInputSelect";
import type { TypeInputTextSkeleton } from "./TypeInputText";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeNewsletterSubscriptionModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    subtitle?: EntryFieldTypes.RichText;
    emailInput: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    firstNameInput: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    lastNameInput: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    phoneInput?: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    optIn: EntryFieldTypes.EntryLink<TypeInputSelectSkeleton>;
    profilingOptIn?: EntryFieldTypes.EntryLink<TypeInputSelectSkeleton>;
    addressLabels?: EntryFieldTypes.EntryLink<TypeAddressLabelsSkeleton>;
    privacyNoticeText: EntryFieldTypes.RichText;
    sendRequestLabel: EntryFieldTypes.Symbol;
    thankYouTitle: EntryFieldTypes.Symbol;
    thankYouText: EntryFieldTypes.RichText;
    thankYouImage?: EntryFieldTypes.AssetLink;
    backToHomePageCtaLink?: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    generalErrorText: EntryFieldTypes.Symbol;
    payloadErrorMessageText: EntryFieldTypes.Symbol;
    privacyNoticeNotSelectedText: EntryFieldTypes.Symbol;
    reCaptchaErrorMessageText: EntryFieldTypes.Symbol;
    unauthorizedErrorMessageText: EntryFieldTypes.Symbol;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeNewsletterSubscriptionModuleSkeleton = EntrySkeletonType<TypeNewsletterSubscriptionModuleFields, "newsletterSubscriptionModule">;
export type TypeNewsletterSubscriptionModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNewsletterSubscriptionModuleSkeleton, Modifiers, Locales>;
