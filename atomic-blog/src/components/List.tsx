import { useContext } from "react";
import type { Post } from "../types";
import { PostContext } from "../App";

// type ListProps = {
//   posts: Post[];
// };

export default function List() {
  const { posts } = useContext(PostContext)!;

  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
