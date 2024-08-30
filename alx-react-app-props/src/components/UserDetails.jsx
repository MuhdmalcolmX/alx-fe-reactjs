// UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {/* Display other user data here */}
    </div>
  );
}

export default UserDetails;
