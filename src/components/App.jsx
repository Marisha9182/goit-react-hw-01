import userData from "./Profile/userData.json";
import Profile from "./Profile/Profile";

import friends from "./Friends/friends.json";
import Friends from "./Friends/FrinedList";

import TransactionHistory from "./Transaction/TransactionHistory";
import transaction from "./Transaction/transaction.json";


const App = () => {
  return (
    <>
      <Profile
        user={userData}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <Friends friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
};

export default App;
