import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Button } from "./styles";

interface IButtonProps {
  width: string;
  height?: string;
  padding?: string;
  active?: boolean;
}

export function ButtonElement({
  children,
  width,
  height,
  active,
  ...rest
}: React.PropsWithChildren &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  IButtonProps) {
  return (
    <Button $width={width} $active={active} $height={height} {...rest}>
      {children}
    </Button>
  );
}
