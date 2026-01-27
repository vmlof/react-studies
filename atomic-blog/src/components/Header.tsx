import { useContext, type Dispatch, type SetStateAction } from "react";
import type { Post } from "../types";
import SearchPosts from "./SearchPosts";
import Results from "./Results";
import { usePosts } from "./PostContext";

// type HeaderProps = {
//   posts: Post[];
//   onClearPosts: () => void;
//   searchQuery: string;
//   setSearchQuery: Dispatch<SetStateAction<string>>;
// };

export default function Header() {
  // 3) CONSUMING CONTEXT VALUE
  const { onClearPosts } = usePosts()!;

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
