import FriendsListItem from "../Friends/FriendListItem";
import '../Friends/friendsStyle.css';

const FriendsList = ({friends}) => {

    return(
        <ul className="friend">
            {friends.map((friend) => (
                <li key = {friend.id} className='friendBox'>
                <FriendsListItem friend={friend} />
                </li>
            ))
            }
</ul>
    )
};

export default FriendsList;

