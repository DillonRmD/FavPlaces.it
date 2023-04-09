import './App.css';

import { auth } from "../src/firebase_setup/setupFirebase";
import { useAuthState } from 'react-firebase-hooks/auth';

import Home from './components/Home';
import SignIn from './components/SignIn';


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;1,200&family=Raleway:wght@675&display=swap');
      </style>
      {user ? <Home /> : <SignIn />}

    </div>
  );
}

export default App;
