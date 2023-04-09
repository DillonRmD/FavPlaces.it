import React, { useEffect, useState } from "react";
import { db } from "../firebase_setup/setupFirebase";
import PlaceListing from "./PlaceListing";
import { doc, addDoc, collection, deleteDoc, getDocs } from "firebase/firestore";
import SignOut from "./SignOut";
import "./Home.css"

function Home() {
    async function addEntryToDb() {
        let entry = {
            name: `Test Place 2`,
            rating: 1,
            location: "123 N. Walter Street",
        };
        const docRef = await addDoc(collection(db, "places"), entry);
        console.log(docRef.id);
        entry.id = docRef.id;
        setPlaces([...places, entry]);
    }

    async function getEntriesFromDb() {
        const docRef = await getDocs(collection(db, 'places'));
        let tempData = [];
        docRef.forEach((doc) => {
            tempData.push({"id": doc.id, ...doc.data()});
        });
        console.table(tempData);
        setPlaces(tempData);
    }

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        getEntriesFromDb();
    }, []);

    const AddToDb = () => {
        addEntryToDb();
    };

    const deletePlaceListing = async (id) => {
        await deleteDoc(doc(db, 'places', id));
        const newPlaces = places.filter((place) => {
            return place.id !== id;
        })
        setPlaces(newPlaces);
    }

    return (
        <div className="Home">
            <header className="Home-Header">
                <h1>FavPlaces.it</h1>
                <SignOut />
            </header>
            <h1>Home Page</h1>
            <button onClick={AddToDb}>Add</button>
            <div className="Home-Places-Container">
            {places.map((place, index) => (
                        <div onClick={() => deletePlaceListing(place.id)}>
                            <PlaceListing key={index} data={place} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Home;
