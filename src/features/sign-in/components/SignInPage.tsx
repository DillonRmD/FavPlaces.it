import { auth } from "../../../db/setupFirebase";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import SignInButton from "./SignInButton";

function SignInPage() {
    return (
        <div className="SignIn">
            <h1>FavPlaces.it</h1>
            <SignInButton/>
        </div>
    );
}

export default SignInPage;
