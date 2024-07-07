import style from '../Profile/profileStyle.module.css'

const Profile = ({name, tag, location, image, stats:{followers, views, likes}}) => {

    return(
        <div className={style.profileBox}>
  <div>
    <img className={style.profileImg}
      src={image}
      alt="User avatar"
    width = '150'
    />
    <p className={style.name}>{name}</p>
    <p className={style.info}>@{tag}</p>
    <p className={style.info}>{location}</p>
  </div>

  <ul className={style.container}>
    <li>
      <span>Followers</span>
      <span className={style.number}>{followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span className={style.number}>{views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span className={style.number}>{likes}</span>
    </li>
  </ul>
</div>

    )
}

export default Profile;