import './Header.css'
import { Link } from 'react-router-dom'
// import logo   from '../../assets/logo.svg'

export default function Header({ logo }) {
	return (
		<header className='kasa-banner'>
			<h1><img src={ logo } alt='kasa' className='kasa-logo' /></h1>
			{/* <h2>Chez vous, partout et ailleurs</h2> */}
			<nav>
				<Link to="/">Accueil</Link>
				<Link to="/a_propos">A propos</Link>
			</nav>
		</header>
)}