import '../Profile/profileStyle.css'

const Profile = ({name, tag, location, image, stats:{followers, views, likes}}) => {

    return(
        <div className='profileBox'>
  <div>
    <img className='profileImg'
      src={image}
      alt="User avatar"
    width = '150'
    />
    <p className='name'>{name}</p>
    <p className='info'>@{tag}</p>
    <p className='info'>{location}</p>
  </div>

  <ul className='container'>
    <li>
      <span>Followers</span>
      <span className='number'>{followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span className='number'>{views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span className='number'>{likes}</span>
    </li>
  </ul>
</div>

    )
}

export default Profile;