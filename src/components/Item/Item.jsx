import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import './Item.css'
export default function Item({name, description, price}){
    return(
        <div className='card-container'>
            <VolunteerActivismIcon className="card-icon"></VolunteerActivismIcon>
            <h2 className="card-name">{name}</h2>
            <p className="card-description">{description}</p>
            <p className="card-price">Price:{price}</p>    
        </div>
    )
}