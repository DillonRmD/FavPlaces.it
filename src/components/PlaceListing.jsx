import { deleteDoc } from "firebase/firestore";
import { db } from "../firebase_setup/setupFirebase";
import "./PlaceListing.css"

function PlaceListing(props) {
    const { rating, location, name } = props.data;

    return ( 
        <div className="Place-Listing">
            <div className="Place-Listing-Content">
            <p className="Place-Listing-Name">{name}</p>
            <p className="Place-Listing-Info">{rating} - {location}</p>
            </div>
        </div>
    );
}

export default PlaceListing;
