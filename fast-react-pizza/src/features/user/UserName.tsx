import { useSelector } from "react-redux";
import type { RootState } from "../../store";

function UserName() {
  const userName = useSelector((state: RootState) => state.user.username);

  if (!userName) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default UserName;
