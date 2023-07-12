import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-primary",
        "text-white",
        "border-transparent",
        "hover:brightness-150",
        "w-fit"
      ],

    },
    size: {
      medium: ["text-base", "py-2.5", "px-12"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
        children: React.ReactNode
    }

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props}>
    {children}
</button>