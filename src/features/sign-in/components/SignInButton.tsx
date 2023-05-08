import { Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { auth } from "../../../db/setupFirebase";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";

function SignInButton() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    return (
        <>
        <Button variant="contained" endIcon={<LoginIcon/>} onClick={() => signInWithGoogle()}>
                Sign In
        </Button>
        </>
    );
}

export default SignInButton;
