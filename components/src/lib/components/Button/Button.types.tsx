import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  color?: "light" | "dark";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}
