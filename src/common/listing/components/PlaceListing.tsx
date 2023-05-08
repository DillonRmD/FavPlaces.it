import { Box, Card, CardHeader, CardMedia, IconButton, Rating, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Place from "../Place";

interface PlaceListingProps {
  item: Place;
}

const PlaceListing: React.FunctionComponent<PlaceListingProps> = (props) => {
  const place: Place = props.item;

  return (
    <Box>
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardHeader
          title={place.name}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardMedia component="img" height="194" src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
        <Rating value={place.rating} readOnly/>
        <Typography>{place.location}</Typography>
      </Card>
    </Box>
  );
};

export default PlaceListing;
