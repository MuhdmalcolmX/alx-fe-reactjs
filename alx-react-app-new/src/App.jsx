// App.jsx
import React from 'react';
import UserContext from './components/UserContext';
import ProfilePage from './components/ProfilePage';

const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  // Add other user data here
};

function App() {
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
