import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePaymentMethodFields {
    internalName: EntryFieldTypes.Symbol;
    name: EntryFieldTypes.Symbol;
    isCreditCard: EntryFieldTypes.Boolean;
    methodType: EntryFieldTypes.Symbol<"Affirm" | "Alma" | "AmericanExpress" | "ApplePay" | "Bancontact" | "BancontactQrCode" | "CartesBancaires" | "Giropay" | "Ideal" | "Klarna" | "Maestro" | "Mastercard" | "Paypal" | "Promissory" | "Visa">;
    icon: EntryFieldTypes.AssetLink;
}

export type TypePaymentMethodSkeleton = EntrySkeletonType<TypePaymentMethodFields, "paymentMethod">;
export type TypePaymentMethod<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePaymentMethodSkeleton, Modifiers, Locales>;
