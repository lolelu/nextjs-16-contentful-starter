import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAbandonedCartPopupSkeleton } from "./TypeAbandonedCartPopup";
import type { TypeInputSkeleton } from "./TypeInput";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";
import type { TypeNewsletterSubscriptionModuleSkeleton } from "./TypeNewsletterSubscriptionModule";
import type { TypeWeAcceptComponentSkeleton } from "./TypeWeAcceptComponent";

export interface TypeFooterComponentFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    pageType: EntryFieldTypes.Symbol<"Main Website" | "Shared Homepage">;
    newsletterTitle?: EntryFieldTypes.Symbol;
    newsletterText?: EntryFieldTypes.RichText;
    newsletterNote?: EntryFieldTypes.RichText;
    newsletterImages?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    newsletterBackgroundImage?: EntryFieldTypes.AssetLink;
    newsletterInputEmail?: EntryFieldTypes.EntryLink<TypeInputSkeleton>;
    newsletterCtaLink?: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    newsletterSubscriptionModule?: EntryFieldTypes.EntryLink<TypeNewsletterSubscriptionModuleSkeleton>;
    registerProductTitle: EntryFieldTypes.Symbol;
    registerProductText?: EntryFieldTypes.RichText;
    registerProductCtaLink: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    sitemapColumnOneTitle?: EntryFieldTypes.Symbol;
    sitemapColumnOneLinks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    sitemapColumnTwoTitle?: EntryFieldTypes.Symbol;
    sitemapColumnTwoLinks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    sitemapColumnThreeTitle?: EntryFieldTypes.Symbol;
    sitemapColumnThreeLinks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    findStoreCtaLink?: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    needHelpText: EntryFieldTypes.RichText;
    weAcceptComponent: EntryFieldTypes.EntryLink<TypeWeAcceptComponentSkeleton>;
    socialMediaTitle: EntryFieldTypes.Symbol;
    socialMediaLinks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    legalLinks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    manageMyCookiesLinkLabel: EntryFieldTypes.Symbol;
    logo: EntryFieldTypes.AssetLink;
    trademarksText: EntryFieldTypes.RichText;
    abandonedCartPopup?: EntryFieldTypes.EntryLink<TypeAbandonedCartPopupSkeleton>;
    floatingButtonCtaLink?: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    ourBrands?: EntryFieldTypes.Symbol;
    ourBrandsLinks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
}

export type TypeFooterComponentSkeleton = EntrySkeletonType<TypeFooterComponentFields, "footerComponent">;
export type TypeFooterComponent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFooterComponentSkeleton, Modifiers, Locales>;
