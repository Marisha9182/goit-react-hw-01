
import style from '../Friends/friendsStyle.module.css';

const FriendsListItem = ({friend: {avatar, name, isOnline}}) => {

    const statusText = isOnline ? 'Online' : 'Offline';
    const statusColor = isOnline ? 'green' : 'red';

    return(
        <div className={style.information}>
    <img className = {style.friendImg} src={avatar} alt="Avatar" width="70px" />
    <p className={style.nameOfFriend}>{name}</p>
    <p className={style.status} style={{ color: statusColor }}>{statusText}</p>
        </div>
    )
};

export default FriendsListItem;
