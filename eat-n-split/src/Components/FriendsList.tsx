import type { Friend as FriendType } from "../types/Friend";
import Friend from "./Friend";

type FriendsListProps = {
  friends: FriendType[];
  onSelection: (friend: FriendType) => void;
  selectedFriend: FriendType | null;
};

function FriendsList({
  friends,
  onSelection,
  selectedFriend,
}: FriendsListProps) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
