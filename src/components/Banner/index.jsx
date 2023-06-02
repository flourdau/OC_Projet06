import './Banner.css'

import imgHome from '../../assets/background_01.png';
import imgAbout from '../../assets/background_02.png';

export default function Banner({ page, slogan }) {

	let imgPage = false

	if (page === 'home') {
		imgPage = imgHome
	}
	else if (page === 'about') {
		imgPage = imgAbout
	}

	const background = {
		background: `url("${imgPage}")`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	}

	return (
		<section className='kasa-banner' style={ background }>
			<div><h2>{ slogan }</h2></div>
		</section>
)}