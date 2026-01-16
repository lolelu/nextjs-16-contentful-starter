import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeEnumLabelSkeleton } from "./TypeEnumLabel";

export interface TypeRecipeDetailPageLabelsFields {
    internalName: EntryFieldTypes.Symbol;
    totalLabel: EntryFieldTypes.Symbol;
    difficultyLabel?: EntryFieldTypes.Symbol;
    cookingLabel: EntryFieldTypes.Symbol;
    preparationLabel: EntryFieldTypes.Symbol;
    restLabel: EntryFieldTypes.Symbol;
    settingLabel: EntryFieldTypes.Symbol;
    toolsLabel: EntryFieldTypes.Symbol;
    ingredientsLabel: EntryFieldTypes.Symbol;
    overviewLabel: EntryFieldTypes.Symbol;
    servingLabel: EntryFieldTypes.Symbol;
    copyIngredientLabel: EntryFieldTypes.Symbol;
    stepByStepLabel: EntryFieldTypes.Symbol;
    relatedRecipesLabel?: EntryFieldTypes.Symbol;
    enjoyLabel: EntryFieldTypes.Symbol;
    enumToolLabels: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeEnumLabelSkeleton>>;
    enumAttachmentLabels: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeEnumLabelSkeleton>>;
    enumCourseLabels: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeEnumLabelSkeleton>>;
    enumSeasonAndEventLabel: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeEnumLabelSkeleton>>;
    enumSpecificLabels: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeEnumLabelSkeleton>>;
    enumInspirationLabels: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeEnumLabelSkeleton>>;
    enumDifficultyLabels: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeEnumLabelSkeleton>>;
    enumCookingTimeLabels: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeEnumLabelSkeleton>>;
    recipesCountSingularLabel: EntryFieldTypes.Symbol;
    recipesCountPluralLabel: EntryFieldTypes.Symbol;
    nextLabel: EntryFieldTypes.Symbol;
    previousLabel: EntryFieldTypes.Symbol;
    filterLabel: EntryFieldTypes.Symbol;
    clearFiltersLabel: EntryFieldTypes.Symbol;
    applySelectedFiltersLabel: EntryFieldTypes.Symbol;
    resultsShowingLabel?: EntryFieldTypes.Symbol;
    filtersAppliedLabel?: EntryFieldTypes.Symbol;
}

export type TypeRecipeDetailPageLabelsSkeleton = EntrySkeletonType<TypeRecipeDetailPageLabelsFields, "recipeDetailPageLabels">;
export type TypeRecipeDetailPageLabels<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRecipeDetailPageLabelsSkeleton, Modifiers, Locales>;
