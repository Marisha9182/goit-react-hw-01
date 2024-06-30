import userData from "../src/userData.json";
import Profile from '../src/components/Profile';

const App = () => {
    return (
        <>
        <Profile user = {userData}
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
        />
        </>
    );
    };

export default App;

