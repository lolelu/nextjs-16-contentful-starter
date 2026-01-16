import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeInputTextSkeleton } from "./TypeInputText";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

export interface TypeProductOverviewModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    warrantiesLabel: EntryFieldTypes.Symbol;
    warrantyLabel: EntryFieldTypes.Symbol;
    includedAccessoryLabel: EntryFieldTypes.Symbol;
    includedAccessoriesLabel: EntryFieldTypes.Symbol;
    availableSoonLabel: EntryFieldTypes.Symbol;
    inStockLabel: EntryFieldTypes.Symbol;
    outOfStockCustomLabel?: EntryFieldTypes.Symbol;
    personalisationActionLabel: EntryFieldTypes.Symbol;
    personalisationDetailLabel: EntryFieldTypes.Symbol;
    priceFreeLabel: EntryFieldTypes.Symbol;
    valueAddedTaxLabel: EntryFieldTypes.Symbol;
    instalmentLabel: EntryFieldTypes.Symbol;
    addToCartLabel: EntryFieldTypes.Symbol;
    addedToCartLabel: EntryFieldTypes.Symbol;
    backInStockNotificationLabel: EntryFieldTypes.Symbol;
    storeLocatorNavigationLink: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    deliveryPromiseBeforeCutOfTimeLabel?: EntryFieldTypes.Symbol;
    deliveryPromiseAfterCutOfTimeLabel?: EntryFieldTypes.Symbol;
    backInStockPopupTitle: EntryFieldTypes.Symbol;
    backInStockPopupContentTitle: EntryFieldTypes.Symbol;
    backInStockPopupText: EntryFieldTypes.Symbol;
    backInStockPopupSelectedColorLabel: EntryFieldTypes.Symbol;
    backInStockPopupInputEmailTitle: EntryFieldTypes.Symbol;
    backInStockPopupInputEmail: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    backInStockPopupPrivacyNote: EntryFieldTypes.RichText;
    backInStockPopupSubmittedTitle: EntryFieldTypes.Symbol;
    backInStockPopupSubmittedText: EntryFieldTypes.RichText;
    backInStockPopupSubmittedLabel: EntryFieldTypes.Symbol;
    energyRatingLabel: EntryFieldTypes.Symbol;
    backInStockGeneralErrorText: EntryFieldTypes.Symbol;
    backInStockReCaptchaRobotErrorText: EntryFieldTypes.Symbol;
    yearsReparabilityLabel: EntryFieldTypes.Symbol;
    yearReparabilityLabel: EntryFieldTypes.Symbol;
    enableMarginReduction?: EntryFieldTypes.Boolean;
    customCountdownDateTime?: EntryFieldTypes.Date;
}

export type TypeProductOverviewModuleSkeleton = EntrySkeletonType<TypeProductOverviewModuleFields, "productOverviewModule">;
export type TypeProductOverviewModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductOverviewModuleSkeleton, Modifiers, Locales>;
