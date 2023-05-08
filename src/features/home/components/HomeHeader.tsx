import { IconButton, Stack, Typography } from "@mui/material";
import SignOutButton from "../../sign-out/components/SignOutButton";
import { AddToPhotos } from "@mui/icons-material";

interface HomeHeaderProps {}

const HomeHeader = (props: any) => {
  return (
    <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
      <Typography variant="h2">FavPlaces.it</Typography>
      <IconButton size="large" color="primary" onClick={props.AddToDb}>
        <AddToPhotos />
      </IconButton>
      <SignOutButton />
    </Stack>
  );
};

export default HomeHeader;
