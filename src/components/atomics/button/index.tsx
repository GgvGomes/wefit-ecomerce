import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Button } from "./styles";

interface IButtonProps {
  width: string;
  height?: number;
}

export function ButtonElement({
  children,
  width,
  height,
  ...rest
}: React.PropsWithChildren &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  IButtonProps) {
  return (
    <Button $width={width} $height={height} {...rest}>
      {children}
    </Button>
  );
}
