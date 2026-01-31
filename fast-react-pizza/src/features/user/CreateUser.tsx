import { useState, type ChangeEvent } from "react";

function CreateUser() {
  const [username, setUsername] = useState<string>("");

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    if (!username) return;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
        className="w-72"
      />

      {username !== "" && (
        <div>
          <button type="submit">Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
