import { useRef, type Dispatch, type SetStateAction } from "react";
import { useKey } from "./useKey";

type SearchProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

function Search({ query, setQuery }: SearchProps) {
  const inputEl = useRef<HTMLInputElement>(null);

  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current?.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export default Search;
