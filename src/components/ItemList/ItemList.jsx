import Item from "../Item/Item";
import './ItemList.css'

export default function ItemList({data}){
    return(
        <div                className="item-list">
         {
            data.map((item, index) => (
               <Item 
               key={index}
               name={item.name}
               description={item.description}
               price={item.price}
               ></Item>
            ))
        }
        </div>
    )
}