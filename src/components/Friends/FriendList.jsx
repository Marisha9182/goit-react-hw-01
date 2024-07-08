import FriendsListItem from "./FriendListItem";
import style from"../Friends/friendsStyle.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friend}>
      {friends.map((friend) => (
        <li key={friend.id} className={style.friendBox}>
          <FriendsListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

