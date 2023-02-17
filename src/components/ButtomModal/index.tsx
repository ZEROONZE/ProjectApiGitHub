import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  children: ReactNode;
  loadUser?: (userName: string) => Promise<void>;
}
export const ButtomModal = ({ children, loading, ...rest }: ButtonProps) => {
  return (
    <button disabled={loading} {...rest}>
      {children}
    </button>
  );
};
