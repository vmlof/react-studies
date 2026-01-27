import { useContext } from "react";
import type { Post } from "../types";
import { usePosts } from "./PostContext";

// type ResultsProps = {
//   posts: Post[];
// };

export default function Results() {
  const { posts } = usePosts()!;

  return <p>🚀 {posts.length} atomic posts found</p>;
}
