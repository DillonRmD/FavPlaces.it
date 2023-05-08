import { auth } from "./db/setupFirebase";
import { useAuthState } from 'react-firebase-hooks/auth';

import HomePage from './features/home/components/HomePage';
import SignInPage from './features/sign-in/components/SignInPage';

import React from 'react';

function App() {
  const [user] = useAuthState(auth);

  return (
    <React.Fragment>
      {user ? <HomePage /> : <SignInPage />}
    </React.Fragment>
  );
}

export default App;
