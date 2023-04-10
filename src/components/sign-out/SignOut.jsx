import { auth } from "../../firebase_setup/setupFirebase";
import "./SignOut.css";

function SignOutButton() {
    return (
        auth.currentUser && (
            <button className="Button-Sign-Out" onClick={() => auth.signOut()}>
                Sign out
            </button>
        )
    );
}

export default SignOutButton;
