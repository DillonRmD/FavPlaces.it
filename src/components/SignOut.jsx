import { auth } from "../firebase_setup/setupFirebase";
import "./SignOut.css";

function SignOut() {
    return (
        auth.currentUser && (
            <button className="Button-Sign-Out" onClick={() => auth.signOut()}>
                Sign out
            </button>
        )
    );
}

export default SignOut;
