import RedeemIcon from '@mui/icons-material/Redeem';
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import json from "../../items.json"

export default function ItemListContainer({greeting}){

    const [data, setData] = useState(json.products)


    return(
        <div>
        <ItemList data={data}></ItemList>
        </div> 
    )
}