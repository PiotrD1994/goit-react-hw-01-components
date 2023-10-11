import React from "react";
import PropTypes from 'prop-types'

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li>
            <span></span>
            <img src={avatar} alt='User avatar' width='48'/>
            <p>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };

  const FriendList = ({friends}) => {
    return (
     <ul>
        {friends.map((friend) => (
            <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}/>

        ))}
     </ul>
    )
  }
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };

  export default FriendList