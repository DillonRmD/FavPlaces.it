import './App.css';

import { auth } from "../src/db/setupFirebase";
import { useAuthState } from 'react-firebase-hooks/auth';

import Home from './features/home/components/Home';
import SignInPage from './features/sign-in/components/SignInPage';


function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? <Home /> : <SignInPage />}
    </>
  );
}

export default App;
