import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeColorSkeleton } from "./TypeColor";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypeHelpMeChooseStepFields {
    name: EntryFieldTypes.Symbol;
    internalName: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol<"Choice" | "End" | "Option" | "Start">;
    twelveNc?: EntryFieldTypes.Symbol;
    backgroundColor?: EntryFieldTypes.EntryLink<TypeColorSkeleton>;
    stepTitle: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    textTitle?: EntryFieldTypes.Symbol;
    tooltipStartCashback?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
    text?: EntryFieldTypes.RichText;
    ctaButton?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
    choices?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    option1Label?: EntryFieldTypes.Symbol;
    option1Reference?: EntryFieldTypes.EntryLink<TypeHelpMeChooseStepSkeleton>;
    option1Image?: EntryFieldTypes.AssetLink;
    option2Label?: EntryFieldTypes.Symbol;
    option2Reference?: EntryFieldTypes.EntryLink<TypeHelpMeChooseStepSkeleton>;
    option2Image?: EntryFieldTypes.AssetLink;
    option3Label?: EntryFieldTypes.Symbol;
    option3Reference?: EntryFieldTypes.EntryLink<TypeHelpMeChooseStepSkeleton>;
    option3Image?: EntryFieldTypes.AssetLink;
    option4Label?: EntryFieldTypes.Symbol;
    option4Reference?: EntryFieldTypes.EntryLink<TypeHelpMeChooseStepSkeleton>;
    option4Image?: EntryFieldTypes.AssetLink;
}

export type TypeHelpMeChooseStepSkeleton = EntrySkeletonType<TypeHelpMeChooseStepFields, "helpMeChooseStep">;
export type TypeHelpMeChooseStep<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHelpMeChooseStepSkeleton, Modifiers, Locales>;
