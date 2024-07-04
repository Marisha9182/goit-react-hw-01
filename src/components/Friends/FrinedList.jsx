import FriendsListItem from "../Friends/FriendListItem";

const FriendsList = ({friends}) => {

    return(
        <ul>
            {friends.map((friend) => (
                <li key = {friend.id}>
                <FriendsListItem friend={friend} />
                </li>
            ))
            }
</ul>
    )
};

export default FriendsList;

