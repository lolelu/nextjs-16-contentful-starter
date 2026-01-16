import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeRecipeListingFilterFields {
    internalName: EntryFieldTypes.Symbol;
    filterType: EntryFieldTypes.Symbol<"CookingTime" | "Course" | "Default" | "Difficulty" | "Inspiration" | "SeasonAndEvent" | "Specific" | "Tool">;
    courseTypeCategory?: EntryFieldTypes.Symbol<"Appetizers" | "Appetizers_Amusebouche" | "Appetizers_Chips" | "Appetizers_Dips" | "Basics" | "Basics_Bakery" | "Basics_Dressing" | "Basics_Sauces" | "Breakfast" | "Desserts" | "Drinks" | "Maincourse" | "Maincourse_Babyfood" | "Maincourse_Fish" | "Maincourse_Meat" | "Maincourse_Pasta" | "Maincourse_Poultry" | "Maincourse_Sides" | "Maincourse_Streetfood" | "Maincourse_Vegetarian" | "Starters" | "Starters_Cold" | "Starters_Hot">;
    toolTypeCategory?: EntryFieldTypes.Symbol<"Blender" | "BreadBowl" | "CoffeeMachine" | "CookProcessor" | "CookiePress" | "FoodProcessor" | "FoodProcessorAttachment" | "FoodStrainer" | "GrainMill" | "HandBlender" | "HandMixer" | "IceCreamMaker" | "IceShaver" | "Juicer" | "Kettle" | "MeatGrinder" | "OrangeJuicer" | "PastaCutters" | "PastaPress" | "PastaRoller" | "PersonalJar" | "SausageStuffer" | "SheetCutter" | "Sifter" | "SlowJuicer" | "SmallJars" | "Spiralizer" | "StandMixer" | "Toaster" | "VegetableSlicerAndShredder">;
    cookingTimeTypeCategory?: EntryFieldTypes.Symbol<"Above1h30mn" | "From40mnTo1h30mn" | "Under40mn">;
    difficultyTypeCategory?: EntryFieldTypes.Symbol<"Difficult" | "Easy" | "Intermediate">;
    inspirationTypeCategory?: EntryFieldTypes.Symbol<"AroundTheWorld" | "AroundTheWorld_AmericanCuisine" | "AroundTheWorld_AsianCuisine" | "AroundTheWorld_EnglishCuisine" | "AroundTheWorld_FrenchCuisine" | "AroundTheWorld_ItalianCuisine" | "AroundTheWorld_MiddleEastCuisine" | "ComfortFood" | "HealtyAndFresh" | "Kids" | "QuickAndEasy">;
    seasonAndEventTypeCategory?: EntryFieldTypes.Symbol<"Fall" | "Festivities" | "Spring" | "Summer" | "Winter">;
    specificTypeCategory?: EntryFieldTypes.Symbol<"GlutenFree" | "LactoseFree" | "Vegan" | "Vegetarian">;
}

export type TypeRecipeListingFilterSkeleton = EntrySkeletonType<TypeRecipeListingFilterFields, "recipeListingFilter">;
export type TypeRecipeListingFilter<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRecipeListingFilterSkeleton, Modifiers, Locales>;
