import { Link } from 'react-router-dom';
import './Error.css';

export default function Error() {

    return (
        <div className='errorContainer'>
            <h2>404</h2>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
)}