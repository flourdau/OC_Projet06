import StarScale from '../StarScale'
import './Card.css'

function handleClick(title) {
	console.log('click' + title)
}

function Card({ id, title, cover, pictures, description, host, rating, location, equipements, tags }) {	
	return (
		<div className='kasa-item' onClick={() => handleClick(title)}>
			<img className='kasa-item-cover' src={cover} alt={`${title} cover`} />
			<h2>{title}</h2>
			<div>
				<StarScale scaleValue={rating} />
			</div>
		</div>
	)
}

export default Card