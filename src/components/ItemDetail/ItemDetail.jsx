import ItemCounter from '../ItemCounter/ItemCounter';

export default function ItemDetail({product}){
    
    const {name, description, price, category} = product

    return(
        <>
        <h3>Producto:</h3>
        <h2>{name}</h2>
        <h5>Producto:</h5>
        <h4>{description}</h4>
        <p>Precio:</p>
        <p>{price}</p>  
        <p>{category}</p>
        <ItemCounter></ItemCounter>
        </>
    )
}