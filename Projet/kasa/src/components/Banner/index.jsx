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

	return (
		<section className='kasa-banner'>
			<img src={ imgPage } alt="représentatio d'un paysage"/>
			<h2>{ slogan }</h2>
		</section>
)}