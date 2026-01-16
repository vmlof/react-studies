import Logo from "./Logo";

type NavBarProps = {
  children: React.ReactNode;
};

function NavBar({ children }: NavBarProps) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

export default NavBar;
