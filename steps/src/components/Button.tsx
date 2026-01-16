type ButtonProps = {
  textColor: string;
  bgColor: string;
  onClick: () => void;
  children: React.ReactNode;
};

function Button({ textColor, bgColor, onClick, children }: ButtonProps) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
