import { Button } from "@mui/material";
import { auth } from "../../../db/setupFirebase";
import LogoutIcon from '@mui/icons-material/Logout';

function SignOutButton() {
    return (
        auth.currentUser && (
            <Button variant="contained" endIcon={<LogoutIcon/>} onClick={() => auth.signOut()}>
                Sign Out
            </Button>
        )
    );
}

export default SignOutButton;
