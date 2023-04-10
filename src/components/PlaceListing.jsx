import "./PlaceListing.css";

function PlaceListing(props) {
    const { rating, location, name } = props.data;

    return (
        <div className="Place-Listing">
            <figure>
                <img src='https://picsum.photos/id/1011/800/450' alt=""/>
            </figure>
            <div className="Place-Listing-Content">
                <h2>{name}</h2>
                <p>
                    {rating} - {location}
                </p>
                <a href="#" class="read-more">
                    View Place
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default PlaceListing;
