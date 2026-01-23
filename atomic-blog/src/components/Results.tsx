import { useContext } from "react";
import type { Post } from "../types";
import { PostContext } from "../App";

// type ResultsProps = {
//   posts: Post[];
// };

export default function Results() {
  const { posts } = useContext(PostContext)!;

  return <p>🚀 {posts.length} atomic posts found</p>;
}
