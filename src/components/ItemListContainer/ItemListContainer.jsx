import RedeemIcon from '@mui/icons-material/Redeem';
import { useState } from 'react';
import json from "../../items.json"

export default function ItemListContainer({greeting}){

    const [data, setData] = useState(json.products)


    return(
        <div>
        {
            data.map((item, index) => (
                <div key={index}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
            ))
        }
        </div> 
    )
}