import { Link } from 'react-router-dom';

import './Card.css'

export default function Card({ id, title, cover }) {	
	return (
		<div className='kasa-item'>
			<img className='kasa-item-cover' src={ cover } alt={`${ title } cover`} />
			<Link className='kasa-item-link' to={ `/product/${ id }` } >
            <h2>{title}</h2>
        	</Link>
		</div>
)}