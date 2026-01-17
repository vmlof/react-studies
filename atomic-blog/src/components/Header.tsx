import type { Dispatch, SetStateAction } from "react";
import type { Post } from "../types";
import SearchPosts from "./SearchPosts";
import Results from "./Results";

type HeaderProps = {
  posts: Post[];
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};

export default function Header({
  posts,
  onClearPosts,
  searchQuery,
  setSearchQuery,
}: HeaderProps) {
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
