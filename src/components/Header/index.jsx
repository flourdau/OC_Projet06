import { Link } from 'react-router-dom'

import './Header.css'

export default function Header({ logo }) {

	return (
		<header className='kasa-header'>
			<h1><img src={ logo } alt='kasa' className='kasa-logo' /></h1>
			<nav>
				<Link to="/">Accueil</Link>
				<Link to="/a_propos">A propos</Link>
			</nav>
		</header>
)}