export interface ButtonProps {
  onClick: () => void;
  className: string;
  disabled: boolean;
  type: "button" | "reset" | "submit";
}
