type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return <div className="main">{children}</div>;
}

export default Main;
