import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import './Item.css'
import { Link } from 'react-router-dom';

export default function Item({name, description, price, index}){
    return(
        <div className='card-container'>
            <VolunteerActivismIcon className="card-icon"></VolunteerActivismIcon>
            <Link to={`/buynow/${index}`}>
            <h2 className="card-name">{name}</h2>
            <p className="card-description">{description}</p>
            <p className="card-price"><p className="card-text-price">Price:</p>{price}</p>
            </Link>
        </div>
    )
}