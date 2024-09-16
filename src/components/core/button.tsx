import { ButtonHTMLAttributes } from "react";
import { Link, LinkProps } from "react-router-dom";

type PropsType = ButtonHTMLAttributes<HTMLButtonElement> & LinkProps & {
  variant?: "solid" | "outlined" | "link";
  color?: string;
  text?: string;
  children?: unknown;
  className?: string;
};
export default function Button({
  variant = "solid",
  color = "blue",
  text = "Button",
  className = "",
  to,
  children,
  ...attrs
}: PropsType) {
  const buttonVariantClasses = {
    solid: `text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-${color}-300 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`,
    outlined:
      "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
    link: "hover:underline text-secondary px-2"
  };
  const Comp = to ? Link : "button";
  return (
    <Comp
      className={"btn " + buttonVariantClasses[variant] + ` ${className} `}
      to={to}
      {...attrs}
    >
      {children ? children : text}
    </Comp>
  );
}
