import { Box } from "@mui/material";

const PlaceListing = (props) => {
    const { rating, location, name } = props.data;

    return (
        <Box>
            <p>{rating}</p>
            <p>{location}</p>
            <p>{name}</p>
        </Box>
    );
}

export default PlaceListing;
