import type { Post } from "../types";
import FormAddPost from "./FormAddPost";
import Posts from "./Posts";

// type MainProps = {
//   posts: Post[];
//   onAddPost: (post: Post) => void;
// };

export default function Main() {
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  );
}
