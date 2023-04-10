import { auth } from "../../firebase_setup/setupFirebase";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import './SignIn.css';
import SignInButton from "./SignInButton";

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    return (
        <div className="SignIn">
            <h1>FavPlaces.it</h1>
            <SignInButton onClick={signInWithGoogle} />
        </div>
    );
}

export default SignIn;
