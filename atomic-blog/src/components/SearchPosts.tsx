import { useContext, type Dispatch, type SetStateAction } from "react";
import { usePosts } from "./PostProvider";

// type SearchPostsProps = {
//   searchQuery: string;
//   setSearchQuery: Dispatch<SetStateAction<string>>;
// };

function SearchPosts() {
  const { searchQuery, setSearchQuery } = usePosts()!;

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts;
