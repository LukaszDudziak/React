import React from "react";
import "./UsersList.css";

const UsersList = (props) => {
  //zmapowanie przesłanego propsem stejtowego obiektu user
  const users = props.users.map((user) => (
    <li key={user.login.uuid}>
      <img src={user.picture.large} alt={user.name.last} />
      <h4>{`${user.name.title} ${user.name.last}`}</h4>
      <p>{user.email}</p>
    </li>
  ));
  return <ul className='users'>{users}</ul>;
};

export default UsersList;
