import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAddressLabelsSkeleton } from "./TypeAddressLabels";
import type { TypeContactUsSubjectSkeleton } from "./TypeContactUsSubject";
import type { TypeInputSelectSkeleton } from "./TypeInputSelect";
import type { TypeInputSelectValueSkeleton } from "./TypeInputSelectValue";
import type { TypeInputTextSkeleton } from "./TypeInputText";
import type { TypeProfileLabelsSkeleton } from "./TypeProfileLabels";

export interface TypeContactUsModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    inputSubjectTitle: EntryFieldTypes.Symbol;
    inputSubjectPlaceholder: EntryFieldTypes.Symbol;
    inputTopicTitle: EntryFieldTypes.Symbol;
    inputTopicPlaceholder: EntryFieldTypes.Symbol;
    subjects: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContactUsSubjectSkeleton>>;
    userTitleInput: EntryFieldTypes.EntryLink<TypeInputSelectValueSkeleton>;
    profileLabels: EntryFieldTypes.EntryLink<TypeProfileLabelsSkeleton>;
    addressLabels: EntryFieldTypes.EntryLink<TypeAddressLabelsSkeleton>;
    messageWithoutSARInput: EntryFieldTypes.EntryLink<TypeInputTextSkeleton>;
    privacyNoticeText: EntryFieldTypes.RichText;
    privacyInput: EntryFieldTypes.EntryLink<TypeInputSelectSkeleton>;
    profilingConsentInput?: EntryFieldTypes.EntryLink<TypeInputSelectSkeleton>;
    sendRequestLabel: EntryFieldTypes.Symbol;
    thankYouTitle: EntryFieldTypes.Symbol;
    thankYouText: EntryFieldTypes.RichText;
    thankYouImage?: EntryFieldTypes.AssetLink;
    generalErrorText: EntryFieldTypes.Symbol;
    payloadErrorMessageText: EntryFieldTypes.Symbol;
    subjectOrTopicNotFoundErrorMessageText: EntryFieldTypes.Symbol;
    reCaptchaErrorMessageText: EntryFieldTypes.Symbol;
    unauthorizedErrorMessageText: EntryFieldTypes.Symbol;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeContactUsModuleSkeleton = EntrySkeletonType<TypeContactUsModuleFields, "contactUsModule">;
export type TypeContactUsModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContactUsModuleSkeleton, Modifiers, Locales>;
