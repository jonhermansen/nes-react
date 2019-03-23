import * as React from "react";
import classNames from "classnames";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: any;
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button: React.SFC<ButtonProps> = ({ children, className, primary, success, warning, error, disabled, ...other }) => (
  <button
    className={classNames(className, "nes-btn", {
      "is-primary": primary,
      "is-success": success,
      "is-warning": warning,
      "is-error": error,
      "is-disabled": disabled
    })}
    {...(disabled ? {disabled: true} : {})}
    {...other}
  >
    {children}
  </button>
)

export default Button;
