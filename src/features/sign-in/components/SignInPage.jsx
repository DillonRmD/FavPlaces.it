import { auth } from "../../../db/setupFirebase";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import SignInButton from "./SignInButton";

function SignInPage() {
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

export default SignInPage;
