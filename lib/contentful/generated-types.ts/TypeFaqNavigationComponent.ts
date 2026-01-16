import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavigationLinkGroupSkeleton } from "./TypeNavigationLinkGroup";

export interface TypeFaqNavigationComponentFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    isSingleton?: EntryFieldTypes.Symbol<"Yes">;
    title: EntryFieldTypes.Symbol;
    groups?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkGroupSkeleton>>;
}

export type TypeFaqNavigationComponentSkeleton = EntrySkeletonType<TypeFaqNavigationComponentFields, "faqNavigationComponent">;
export type TypeFaqNavigationComponent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFaqNavigationComponentSkeleton, Modifiers, Locales>;
