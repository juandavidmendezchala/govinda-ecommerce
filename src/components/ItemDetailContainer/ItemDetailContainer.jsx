import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import json from '../../items.json'
import { useParams } from "react-router-dom";

export default function ItemDetailContainer(){

    const { productId } = useParams()

    const products = json.products

    const [product, setProductItem] = useState()

    useEffect(() => {
        if(productId) {
            const item = products.find((product) => product.index === Number(productId))
            setProductItem(item)
        }
    }, [productId, product])

    return(
        <div>
            {
                product?
                <ItemDetail product={product}></ItemDetail>
                :
                <div>No existe este producto.</div>
            }
        </div>
        
    )
}