import { Stack } from "@mui/material";
import Place from "../Place";
import PlaceListing from "./PlaceListing";

interface PlaceCollectionProps {
  places: Place[];
}

const PlaceCollection: React.FunctionComponent<PlaceCollectionProps> = (
  props
) => {
  const { places } = props;

  return (
    <Stack direction="row" spacing={2}>
      {places.map((place: Place, index: number) => (
        <PlaceListing key={index} item={place} />
      ))}
    </Stack>
  );
};

export default PlaceCollection;
