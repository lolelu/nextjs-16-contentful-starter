import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAlertSkeleton } from "./TypeAlert";
import type { TypeContentCardSkeleton } from "./TypeContentCard";
import type { TypeProductListingComponentLabelsSkeleton } from "./TypeProductListingComponentLabels";

export interface TypeProductListingComponentFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    productCategory?: EntryFieldTypes.Symbol;
    labels: EntryFieldTypes.EntryLink<TypeProductListingComponentLabelsSkeleton>;
    overrideTitle?: EntryFieldTypes.Symbol;
    alerts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAlertSkeleton>>;
    contentCards?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContentCardSkeleton>>;
}

export type TypeProductListingComponentSkeleton = EntrySkeletonType<TypeProductListingComponentFields, "productListingComponent">;
export type TypeProductListingComponent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductListingComponentSkeleton, Modifiers, Locales>;
