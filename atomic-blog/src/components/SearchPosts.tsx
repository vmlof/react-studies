import type { Dispatch, SetStateAction } from "react";

type SearchPostsProps = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};

function SearchPosts({ searchQuery, setSearchQuery }: SearchPostsProps) {
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts;
