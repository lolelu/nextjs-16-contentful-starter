import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAlertSkeleton } from "./TypeAlert";
import type { TypeColumnContentWrapperModuleSkeleton } from "./TypeColumnContentWrapperModule";
import type { TypeContactUsModuleSkeleton } from "./TypeContactUsModule";
import type { TypeDisclaimerModuleSkeleton } from "./TypeDisclaimerModule";
import type { TypeFaqTooltipModuleSkeleton } from "./TypeFaqTooltipModule";
import type { TypeHeroBannerOverflowingModuleSkeleton } from "./TypeHeroBannerOverflowingModule";
import type { TypeHeroColumnBannerWrapperModuleSkeleton } from "./TypeHeroColumnBannerWrapperModule";
import type { TypeHomeBannerModuleSkeleton } from "./TypeHomeBannerModule";
import type { TypeInternalHeadingModuleSkeleton } from "./TypeInternalHeadingModule";
import type { TypeMediaModuleSkeleton } from "./TypeMediaModule";
import type { TypeMediaReviewModuleSkeleton } from "./TypeMediaReviewModule";
import type { TypeModBlockListModuleSkeleton } from "./TypeModBlockListModule";
import type { TypeMyOrderLabelsSkeleton } from "./TypeMyOrderLabels";
import type { TypeNavigationAnchorBarModuleSkeleton } from "./TypeNavigationAnchorBarModule";
import type { TypeNavigationLinkModuleSkeleton } from "./TypeNavigationLinkModule";
import type { TypePatchworkModuleSkeleton } from "./TypePatchworkModule";
import type { TypePhotoLeftRightModuleSkeleton } from "./TypePhotoLeftRightModule";
import type { TypePhotoWallModuleSkeleton } from "./TypePhotoWallModule";
import type { TypeProductComparisonTableModuleSkeleton } from "./TypeProductComparisonTableModule";
import type { TypeProductFeaturesModuleSkeleton } from "./TypeProductFeaturesModule";
import type { TypeProductOverviewModuleSkeleton } from "./TypeProductOverviewModule";
import type { TypeProductReferenceModalModuleSkeleton } from "./TypeProductReferenceModalModule";
import type { TypeProductSpecificationModuleSkeleton } from "./TypeProductSpecificationModule";
import type { TypeProductWhatsInTheBoxModuleSkeleton } from "./TypeProductWhatsInTheBoxModule";
import type { TypePromoBannerModuleSkeleton } from "./TypePromoBannerModule";
import type { TypeQuoteModuleSkeleton } from "./TypeQuoteModule";
import type { TypeReadMoreModuleSkeleton } from "./TypeReadMoreModule";
import type { TypeRelatedContentsModuleSkeleton } from "./TypeRelatedContentsModule";
import type { TypeRelatedProductsModuleSkeleton } from "./TypeRelatedProductsModule";

export interface TypeMyOrderPageFields {
    internalName: EntryFieldTypes.Symbol;
    name: EntryFieldTypes.Symbol;
    isSingleton?: EntryFieldTypes.Symbol<"Yes">;
    alerts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAlertSkeleton>>;
    myOrderHeader: EntryFieldTypes.Symbol;
    myOrderLabels: EntryFieldTypes.EntryLink<TypeMyOrderLabelsSkeleton>;
    modules?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeColumnContentWrapperModuleSkeleton | TypeContactUsModuleSkeleton | TypeDisclaimerModuleSkeleton | TypeFaqTooltipModuleSkeleton | TypeHeroBannerOverflowingModuleSkeleton | TypeHeroColumnBannerWrapperModuleSkeleton | TypeHomeBannerModuleSkeleton | TypeInternalHeadingModuleSkeleton | TypeMediaModuleSkeleton | TypeMediaReviewModuleSkeleton | TypeModBlockListModuleSkeleton | TypeNavigationAnchorBarModuleSkeleton | TypeNavigationLinkModuleSkeleton | TypePatchworkModuleSkeleton | TypePhotoLeftRightModuleSkeleton | TypePhotoWallModuleSkeleton | TypeProductComparisonTableModuleSkeleton | TypeProductFeaturesModuleSkeleton | TypeProductOverviewModuleSkeleton | TypeProductReferenceModalModuleSkeleton | TypeProductSpecificationModuleSkeleton | TypeProductWhatsInTheBoxModuleSkeleton | TypePromoBannerModuleSkeleton | TypeQuoteModuleSkeleton | TypeReadMoreModuleSkeleton | TypeRelatedContentsModuleSkeleton | TypeRelatedProductsModuleSkeleton>>;
}

export type TypeMyOrderPageSkeleton = EntrySkeletonType<TypeMyOrderPageFields, "myOrderPage">;
export type TypeMyOrderPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMyOrderPageSkeleton, Modifiers, Locales>;
