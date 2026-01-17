import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

// Types for CTA button data
interface ICtaButtonData {
  label?: string;
  navigationLink?: string;
  buttonColor?: string;
  textColor?: string;
  additionalBehaviours?: any[]; // Adjust this type based on your LinkWithBehaviours implementation
}

interface ICtaButtonProps {
  children?: ReactNode;
  ctaData: ICtaButtonData;
  onClick?: () => void;
  className?: string;
}

export function CtaButton({
  children,
  ctaData,
  onClick,
  className,
}: ICtaButtonProps) {
  const buttonContent = children || ctaData.label;

  // If there's a navigation link, render as Link using Base UI's render prop
  if (ctaData.navigationLink) {
    return (
      <Button asChild variant="cta" onClick={onClick} className={className}>
        <Link href={ctaData.navigationLink}>{buttonContent}</Link>
      </Button>
    );
  }

  // Regular button without navigation
  return (
    <Button
      variant="cta"
      onClick={onClick}
      className={className}
      style={{
        backgroundColor: ctaData.buttonColor,
        color: ctaData.textColor,
      }}
    >
      {buttonContent}
    </Button>
  );
}

export default CtaButton;
