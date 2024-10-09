import { Text, View } from "react-native";
import {useContext} from 'react';
import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen(){
    const {ids,removeFavorite}=useContext(FavoritesContext)
    return <View>
        {ids.map(id=> <Text key={id}>{id}</Text>)}
    </View>
}

export default FavoritesScreen;