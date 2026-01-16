import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAlertSkeleton } from "./TypeAlert";
import type { TypeBackInStockLabelsSkeleton } from "./TypeBackInStockLabels";
import type { TypeColumnContentWrapperModuleSkeleton } from "./TypeColumnContentWrapperModule";
import type { TypeContactUsModuleSkeleton } from "./TypeContactUsModule";
import type { TypeDisclaimerModuleSkeleton } from "./TypeDisclaimerModule";
import type { TypeFaqTooltipModuleSkeleton } from "./TypeFaqTooltipModule";
import type { TypeHeroBannerOverflowingModuleSkeleton } from "./TypeHeroBannerOverflowingModule";
import type { TypeHeroColumnBannerWrapperModuleSkeleton } from "./TypeHeroColumnBannerWrapperModule";
import type { TypeHomeBannerModuleSkeleton } from "./TypeHomeBannerModule";
import type { TypeInternalHeadingModuleSkeleton } from "./TypeInternalHeadingModule";
import type { TypeLinkSliderModuleSkeleton } from "./TypeLinkSliderModule";
import type { TypeMediaModuleSkeleton } from "./TypeMediaModule";
import type { TypeMediaReviewModuleSkeleton } from "./TypeMediaReviewModule";
import type { TypeModBlockListModuleSkeleton } from "./TypeModBlockListModule";
import type { TypeNavigationLinkModuleSkeleton } from "./TypeNavigationLinkModule";
import type { TypeNewsletterSubscriptionModuleSkeleton } from "./TypeNewsletterSubscriptionModule";
import type { TypePatchworkModuleSkeleton } from "./TypePatchworkModule";
import type { TypePhotoLeftRightModuleSkeleton } from "./TypePhotoLeftRightModule";
import type { TypePhotoWallModuleSkeleton } from "./TypePhotoWallModule";
import type { TypePopUpModuleSkeleton } from "./TypePopUpModule";
import type { TypeProductComparisonTableModuleSkeleton } from "./TypeProductComparisonTableModule";
import type { TypeProductFeaturesModuleSkeleton } from "./TypeProductFeaturesModule";
import type { TypeProductOverviewModuleSkeleton } from "./TypeProductOverviewModule";
import type { TypeProductSpecificationModuleSkeleton } from "./TypeProductSpecificationModule";
import type { TypeProductWhatsInTheBoxModuleSkeleton } from "./TypeProductWhatsInTheBoxModule";
import type { TypePromoBannerModuleSkeleton } from "./TypePromoBannerModule";
import type { TypePromoHomeBannerModuleSkeleton } from "./TypePromoHomeBannerModule";
import type { TypeQuoteModuleSkeleton } from "./TypeQuoteModule";
import type { TypeReadMoreModuleSkeleton } from "./TypeReadMoreModule";
import type { TypeRelatedContentsModuleSkeleton } from "./TypeRelatedContentsModule";
import type { TypeRelatedProductsModuleSkeleton } from "./TypeRelatedProductsModule";
import type { TypeRichTextModuleSkeleton } from "./TypeRichTextModule";
import type { TypeScriptCodeModuleSkeleton } from "./TypeScriptCodeModule";
import type { TypeSearchModuleSkeleton } from "./TypeSearchModule";
import type { TypeTrackMyOrderModuleSkeleton } from "./TypeTrackMyOrderModule";
import type { TypeWarrantyPlanTextTooltipSkeleton } from "./TypeWarrantyPlanTextTooltip";

export interface TypeProductDetailCategoryPageFields {
    name: EntryFieldTypes.Symbol;
    internalName: EntryFieldTypes.Symbol;
    alerts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAlertSkeleton>>;
    category: EntryFieldTypes.Symbol;
    modules?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBackInStockLabelsSkeleton | TypeColumnContentWrapperModuleSkeleton | TypeContactUsModuleSkeleton | TypeDisclaimerModuleSkeleton | TypeFaqTooltipModuleSkeleton | TypeHeroBannerOverflowingModuleSkeleton | TypeHeroColumnBannerWrapperModuleSkeleton | TypeHomeBannerModuleSkeleton | TypeInternalHeadingModuleSkeleton | TypeLinkSliderModuleSkeleton | TypeMediaModuleSkeleton | TypeMediaReviewModuleSkeleton | TypeModBlockListModuleSkeleton | TypeNavigationLinkModuleSkeleton | TypeNewsletterSubscriptionModuleSkeleton | TypePatchworkModuleSkeleton | TypePhotoLeftRightModuleSkeleton | TypePhotoWallModuleSkeleton | TypePopUpModuleSkeleton | TypeProductComparisonTableModuleSkeleton | TypeProductFeaturesModuleSkeleton | TypeProductOverviewModuleSkeleton | TypeProductSpecificationModuleSkeleton | TypeProductWhatsInTheBoxModuleSkeleton | TypePromoBannerModuleSkeleton | TypePromoHomeBannerModuleSkeleton | TypeQuoteModuleSkeleton | TypeReadMoreModuleSkeleton | TypeRelatedContentsModuleSkeleton | TypeRelatedProductsModuleSkeleton | TypeRichTextModuleSkeleton | TypeScriptCodeModuleSkeleton | TypeSearchModuleSkeleton | TypeTrackMyOrderModuleSkeleton>>;
    warrantyPlanTextTooltip?: EntryFieldTypes.EntryLink<TypeWarrantyPlanTextTooltipSkeleton>;
}

export type TypeProductDetailCategoryPageSkeleton = EntrySkeletonType<TypeProductDetailCategoryPageFields, "productDetailCategoryPage">;
export type TypeProductDetailCategoryPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductDetailCategoryPageSkeleton, Modifiers, Locales>;
