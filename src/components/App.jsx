import FriendList from "./Friendlist/FriendList.jsx";
import Profile from "./Profile/Profile.jsx";
import transactionData from "../json/transactionData.json"
import userData from "../json/userData.json"
import statsData from "../json/data.json"
import friendData from "../json/friends.json"
import Statistics from "./Statistics/Statistics.jsx";
import TransactionHistory from "./Transactionhistory/TransactionHistory.jsx";
import css from "./Container/Container.module.css"

export const App = () => {

return (
    <div>
 <section className={css.container}>
       <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      </section>

      <section className={css.container}>
      <Statistics title='Upload stats' stats={statsData}/>
      </section>
      <section className={css.container}>
      <FriendList friends={friendData}/>
      </section>
      <section className={css.container}>
      <TransactionHistory items={transactionData}/>
      </section>
    </div>
  );
};

