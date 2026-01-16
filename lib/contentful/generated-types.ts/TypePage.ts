import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBlogCategoryPageSkeleton } from "./TypeBlogCategoryPage";
import type { TypeBlogDetailPageSkeleton } from "./TypeBlogDetailPage";
import type { TypeBlogListingPageSkeleton } from "./TypeBlogListingPage";
import type { TypeCartPageSkeleton } from "./TypeCartPage";
import type { TypeCheckoutPageSkeleton } from "./TypeCheckoutPage";
import type { TypeCustomListingPageSkeleton } from "./TypeCustomListingPage";
import type { TypeFaqDetailPageSkeleton } from "./TypeFaqDetailPage";
import type { TypeFaqListingPageSkeleton } from "./TypeFaqListingPage";
import type { TypeGenericPageSkeleton } from "./TypeGenericPage";
import type { TypeHelpMeChoosePageSkeleton } from "./TypeHelpMeChoosePage";
import type { TypeMyAccountDetailsPageSkeleton } from "./TypeMyAccountDetailsPage";
import type { TypeMyAccountNewsletterPreferencesPageSkeleton } from "./TypeMyAccountNewsletterPreferencesPage";
import type { TypeMyAccountOrdersPageSkeleton } from "./TypeMyAccountOrdersPage";
import type { TypeMyAccountOverviewPageSkeleton } from "./TypeMyAccountOverviewPage";
import type { TypeMyAccountRegisteredProductsPageSkeleton } from "./TypeMyAccountRegisteredProductsPage";
import type { TypeMyAccountSubscriptionsPageSkeleton } from "./TypeMyAccountSubscriptionsPage";
import type { TypeMyAccountWishlistPageSkeleton } from "./TypeMyAccountWishlistPage";
import type { TypeMyOrderPageSkeleton } from "./TypeMyOrderPage";
import type { TypeNotFoundPageSkeleton } from "./TypeNotFoundPage";
import type { TypeProductDetailCategoryPageSkeleton } from "./TypeProductDetailCategoryPage";
import type { TypeProductListingPageSkeleton } from "./TypeProductListingPage";
import type { TypeProductPersonalisationPageSkeleton } from "./TypeProductPersonalisationPage";
import type { TypeQrCodeSplashPageSkeleton } from "./TypeQrCodeSplashPage";
import type { TypeRecipeDetailPageSkeleton } from "./TypeRecipeDetailPage";
import type { TypeRecipeListingPageSkeleton } from "./TypeRecipeListingPage";
import type { TypeSearchResultsPageSkeleton } from "./TypeSearchResultsPage";
import type { TypeSeoSkeleton } from "./TypeSeo";

export interface TypePageFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    seo?: EntryFieldTypes.EntryLink<TypeSeoSkeleton>;
    layoutType?: EntryFieldTypes.Symbol<"NoHeader" | "Standard">;
    content: EntryFieldTypes.EntryLink<TypeBlogCategoryPageSkeleton | TypeBlogDetailPageSkeleton | TypeBlogListingPageSkeleton | TypeCartPageSkeleton | TypeCheckoutPageSkeleton | TypeCustomListingPageSkeleton | TypeFaqDetailPageSkeleton | TypeFaqListingPageSkeleton | TypeGenericPageSkeleton | TypeHelpMeChoosePageSkeleton | TypeMyAccountDetailsPageSkeleton | TypeMyAccountNewsletterPreferencesPageSkeleton | TypeMyAccountOrdersPageSkeleton | TypeMyAccountOverviewPageSkeleton | TypeMyAccountRegisteredProductsPageSkeleton | TypeMyAccountSubscriptionsPageSkeleton | TypeMyAccountWishlistPageSkeleton | TypeMyOrderPageSkeleton | TypeNotFoundPageSkeleton | TypeProductDetailCategoryPageSkeleton | TypeProductListingPageSkeleton | TypeProductPersonalisationPageSkeleton | TypeQrCodeSplashPageSkeleton | TypeRecipeDetailPageSkeleton | TypeRecipeListingPageSkeleton | TypeSearchResultsPageSkeleton>;
    parentPage?: EntryFieldTypes.EntryLink<TypePageSkeleton>;
    childPage?: EntryFieldTypes.EntryLink<TypePageSkeleton>;
    redirectionPage?: EntryFieldTypes.EntryLink<TypePageSkeleton>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;
