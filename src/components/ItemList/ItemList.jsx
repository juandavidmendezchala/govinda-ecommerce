import Item from "../Item/Item";
import './ItemList.css'

export default function ItemList({data}){
    return(
        <div className="item-list">
         {
            data.map((item) => (
               <Item 
               key={item.index}
               name={item.name}
               description={item.description}
               price={item.price}
               index={item.index}
               ></Item>
            ))
        }
        </div>
    )
}