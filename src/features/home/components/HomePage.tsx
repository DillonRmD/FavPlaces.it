import React, { useEffect, useState } from "react";
import {
    doc,
    addDoc,
    collection,
    deleteDoc,
    getDocs,
} from "firebase/firestore";
import PlaceListing from "../../../common/listing/components/PlaceListing";
import Place from "../../../common/listing/Place";
import { db } from "../../../db/setupFirebase";
import { Box } from "@mui/material";
import HomeHeader from "./HomeHeader";
import PlaceCollection from "../../../common/listing/components/PlaceCollection";

const HomePage = () => {
    async function addEntryToDb() {
        let entry: Place = new Place('Test Place 2', 1, '123 N. Walter Street');
        let test = {name: entry.getName(), location: entry.getLocation(), rating: entry.getRating()};
        const docRef = await addDoc(collection(db, "userCollection1"), test);
        entry.setId(docRef.id);
        console.log(entry);
        setPlaces([...places, entry]);
    }

    async function getEntriesFromDb() {
        const docRef = await getDocs(collection(db, "userCollection1"));
        let tempData: any = [];
        docRef.forEach((doc) => {
            tempData.push({ id: doc.id, ...doc.data() });
        });
        console.table(tempData);
        setPlaces(tempData);
    }

    const [places, setPlaces] = useState<Place[]>([]);

    useEffect(() => {
        getEntriesFromDb();
    }, []);

    const AddToDb = () => {
        addEntryToDb();
    };

    const deletePlaceListing = async (id: string) => {
        await deleteDoc(doc(db, "userCollection1", id));
        const newPlaces = places.filter((place: Place) => {
            return place.getId() !== id;
        });
        setPlaces(newPlaces);
    };

    return (
        <Box>
            <HomeHeader AddToDb={AddToDb}/>
            <PlaceCollection places={places}/>
        </Box>
    );
};

export default HomePage;
