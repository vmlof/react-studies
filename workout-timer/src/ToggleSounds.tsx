import { memo, type Dispatch, type SetStateAction } from "react";

interface ToggleSoundsProps {
  allowSound: boolean;
  setAllowSound: Dispatch<SetStateAction<boolean>>;
}

function ToggleSounds({ allowSound, setAllowSound }: ToggleSoundsProps) {
  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound((allow: boolean) => !allow)}
    >
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

export default memo(ToggleSounds);
