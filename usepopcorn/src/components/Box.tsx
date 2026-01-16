import { useState } from "react";

type BoxProps = {
  children: React.ReactNode;
};

function Box({ children }: BoxProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

export default Box;
