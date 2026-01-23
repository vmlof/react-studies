import { useContext, useState, type FormEvent } from "react";
import type { Post } from "../types";
import { usePosts } from "./PostProvider";

// type FormAddPostProps = {
//   onAddPost: (post: Post) => void;
// };

export default function FormAddPost() {
  const { onAddPost } = usePosts()!;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = function (e: FormEvent) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
}
