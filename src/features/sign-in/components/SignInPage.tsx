import { Box, Typography } from "@mui/material";
import { auth } from "../../../db/setupFirebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import SignInButton from "./SignInButton";

function SignInPage() {
  return (
    <Box justifyContent={"center"} alignContent={"center"}>
      <Typography variant="h1">FavPlaces.it</Typography>
      <SignInButton />
    </Box>
  );
}

export default SignInPage;
