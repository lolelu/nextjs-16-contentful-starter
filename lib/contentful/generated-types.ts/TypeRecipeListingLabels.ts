import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeRecipeListingLabelsFields {
    internalName: EntryFieldTypes.Symbol;
    recipesCountSingularLabel?: EntryFieldTypes.Symbol;
    recipesCountPluralLabel?: EntryFieldTypes.Symbol;
    nextLabel?: EntryFieldTypes.Symbol;
    previousLabel?: EntryFieldTypes.Symbol;
    filterLabel?: EntryFieldTypes.Symbol;
    clearFiltersLabel?: EntryFieldTypes.Symbol;
    applySelectedFiltersLabel?: EntryFieldTypes.Symbol;
}

export type TypeRecipeListingLabelsSkeleton = EntrySkeletonType<TypeRecipeListingLabelsFields, "recipeListingLabels">;
export type TypeRecipeListingLabels<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRecipeListingLabelsSkeleton, Modifiers, Locales>;
