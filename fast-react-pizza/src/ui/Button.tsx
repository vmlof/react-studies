import { Link } from "react-router";

type ButtonVariant = "primary" | "small" | "secondary" | "round";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  to?: string;
  type: ButtonVariant;
  onClick?: () => void;
};

function Button({ children, disabled, to, type, onClick }: ButtonProps) {
  const base =
    "inline-block rounded-full bg-yellow-400 font-semibold tracking-wide uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 text-sm",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:text-stone-800 focus:outline-none disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 text-sm",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
