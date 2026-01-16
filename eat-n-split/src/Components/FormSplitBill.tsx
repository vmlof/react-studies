import { useState } from "react";
import type { Friend } from "../types/Friend";
import Button from "./Button";

type FormSplitBillProps = {
  selectedFriend: Friend;
  onSplitBill: (value: number) => void;
};

function FormSplitBill({ selectedFriend, onSplitBill }: FormSplitBillProps) {
  const [bill, setBill] = useState<string | number>("");
  const [paidByUser, setPaidByUser] = useState<string | number>("");

  const billValue = Number(bill);
  const paidByUserValue = Number(paidByUser);
  const paidByFriend = bill ? billValue - paidByUserValue : "";

  const [whoIsPaying, setWhoIsPaying] = useState<"user" | "friend">("user");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(
      whoIsPaying === "user" ? Number(paidByFriend) : -paidByUserValue
    );
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name} </h2>

      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧑‍🦰Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > billValue
              ? paidByUser
              : Number(e.target.value)
          )
        }
      />

      <label>😃{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value as "user" | "friend")}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
