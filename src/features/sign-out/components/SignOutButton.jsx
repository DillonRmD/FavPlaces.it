import { auth } from "../../../db/setupFirebase";

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
