import { auth } from "../firebase_setup/setupFirebase";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import './SignIn.css';

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    return (
        <div className="SignIn">
            <h1>FavPlaces.it</h1>
            <button className="Button-Sign-In" onClick={signInWithGoogle}>Sign-In with Google</button>
        </div>
    );
}

export default SignIn;
