import { Link } from 'react-router-dom'

import './Card.css'

export default function Card({ id, title, cover }) {	

	const background = {
		background: `url("${cover}")`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	}

	return (
		<Link className='kasa-item' to={ `/product/${ id }` } style={ background }>
			<h2>{ title }</h2>
		</Link>
)}