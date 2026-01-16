import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeEnumLabelFields {
    internalName: EntryFieldTypes.Symbol;
    enumValue: EntryFieldTypes.Symbol<"30mnOrLess" | "Above1h" | "AmericanCuisine" | "Amusebouche" | "AsianCuisine" | "Bakery" | "Blender" | "BreadBowl" | "Breakfast" | "Chips" | "CoffeeMachine" | "Cold" | "ComfortFood" | "CookProcessor" | "CookiePress" | "Desserts" | "Difficult" | "Dips" | "Dressing" | "Drinks" | "Easy" | "EnglishCuisine" | "Fall" | "Festivities" | "Fish" | "FoodProcessor" | "FoodProcessorAttachment" | "FoodStrainer" | "FrenchCuisine" | "GlutenFree" | "GrainMill" | "HandBlender" | "HandMixer" | "HealtyAndFresh" | "Hot" | "IceCreamMaker" | "IceShaver" | "Intermediate" | "InternationalCuisine" | "ItalianCuisine" | "Juicer" | "Kettle" | "Kids" | "LactoseFree" | "LatinAmericanCuisine" | "Maincourse" | "Meat" | "MeatGrinder" | "MiddleEastCuisine" | "OrangeJuicer" | "Pasta" | "PastaCutters" | "PastaPress" | "PastaRoller" | "Poultry" | "QuickAndEasy" | "Sauces" | "SausageStuffer" | "SheetCutter" | "Sides" | "Sifter" | "SlowJuicer" | "Spiralizer" | "Spring" | "StandMixer" | "Starters" | "Starters_Cold" | "Streetfood" | "Summer" | "Toaster" | "UpTo1h" | "Vegan" | "VegetableSlicerAndShredder" | "Vegetarian" | "Vegetarian" | "Winter">;
    valueLabel: EntryFieldTypes.Symbol;
    icon?: EntryFieldTypes.AssetLink;
}

export type TypeEnumLabelSkeleton = EntrySkeletonType<TypeEnumLabelFields, "enumLabel">;
export type TypeEnumLabel<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeEnumLabelSkeleton, Modifiers, Locales>;
