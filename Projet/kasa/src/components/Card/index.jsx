import { Link } from 'react-router-dom';

import './Card.css'

function handleClick(title) {
	console.log('click' + title)
}

export default function Card({ id, title, cover }) {	
	return (
		<div className='kasa-item' onClick = { () => handleClick(title) }>
			<img className='kasa-item-cover' src={ cover } alt={`${ title } cover`} />
			<Link className='kasa-item-link' to={ `/product/${ id }` } >
            <h2>{title}</h2>
        	</Link>
		</div>
)}