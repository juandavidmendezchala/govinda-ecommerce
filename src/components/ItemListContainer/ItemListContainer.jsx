import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import json from "../../items.json"
import { useParams } from 'react-router-dom';

export default function ItemListContainer(){

    const [data, setData] = useState(json.products)

    const { categoryId } = useParams()

    useEffect(() => {
        if(categoryId) {
            const categoryItems = json.products.filter((product) => product.category == categoryId)
            setData(categoryItems)            
        } else {
            setData(json.products)
        }
    }, [categoryId])


    return(
        <div>
        <ItemList data={data}></ItemList>
        </div> 
    )
}