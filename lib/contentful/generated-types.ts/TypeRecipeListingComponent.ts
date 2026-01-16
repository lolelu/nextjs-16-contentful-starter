import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentCardSkeleton } from "./TypeContentCard";
import type { TypeFacetsClusterSkeleton } from "./TypeFacetsCluster";
import type { TypeRecipeDetailPageLabelsSkeleton } from "./TypeRecipeDetailPageLabels";
import type { TypeRecipeListingFilterSkeleton } from "./TypeRecipeListingFilter";

export interface TypeRecipeListingComponentFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    recipeLabels: EntryFieldTypes.EntryLink<TypeRecipeDetailPageLabelsSkeleton>;
    filter: EntryFieldTypes.EntryLink<TypeRecipeListingFilterSkeleton>;
    contentCards?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContentCardSkeleton>>;
    clusters: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFacetsClusterSkeleton>>;
}

export type TypeRecipeListingComponentSkeleton = EntrySkeletonType<TypeRecipeListingComponentFields, "recipeListingComponent">;
export type TypeRecipeListingComponent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRecipeListingComponentSkeleton, Modifiers, Locales>;
