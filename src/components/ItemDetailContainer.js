import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/CustomFetch";
import ItemDetail from "./ItemDetail";
import products from '../utils/products';
import { firestoreFetchOne } from "../utils/fetchFirestore";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;