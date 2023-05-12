import RedeemIcon from '@mui/icons-material/Redeem';
import ItemCounter from '../ItemCounter/ItemCounter';

export default function ItemListContainer({greeting}){
    return(
        <>  
        <ItemCounter></ItemCounter>
        {greeting}
        </>
    )
}