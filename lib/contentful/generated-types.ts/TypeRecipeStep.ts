import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeRecipeStepFields {
    internalName: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    htmlText: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
    isTitle?: EntryFieldTypes.Boolean;
}

export type TypeRecipeStepSkeleton = EntrySkeletonType<TypeRecipeStepFields, "recipeStep">;
export type TypeRecipeStep<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRecipeStepSkeleton, Modifiers, Locales>;
