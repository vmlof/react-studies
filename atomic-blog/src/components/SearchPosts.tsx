import { useContext, type Dispatch, type SetStateAction } from "react";
import { PostContext } from "../App";

// type SearchPostsProps = {
//   searchQuery: string;
//   setSearchQuery: Dispatch<SetStateAction<string>>;
// };

function SearchPosts() {
  const { searchQuery, setSearchQuery } = useContext(PostContext)!;

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts;
