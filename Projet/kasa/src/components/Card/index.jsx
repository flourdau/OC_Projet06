import { Link } from 'react-router-dom'

import './Card.css'

export default function Card({ id, title, cover }) {	
	return (
		<Link className='kasa-item' to={ `/product/${ id }` } >
            <h2>{title}</h2>
		</Link>
)}