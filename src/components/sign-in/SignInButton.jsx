import { auth } from "../../firebase_setup/setupFirebase";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import './SignIn.css';

function SignInButton() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    return (
        <div>
            <button className="Button-Sign-In" onClick={signInWithGoogle}>Sign-In with Google</button>
        </div>
    );
}

export default SignInButton;
