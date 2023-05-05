import { Link } from 'react-router-dom'
import './Banner.css'

function Banner({ children }) {
	return (
	<header className='kasa-banner'>
		
		{children}

		<nav>
            <Link to="/">Accueil</Link>
            <Link to="/a_propos">A propos</Link>
		</nav>
		
	</header>
	)
}

export default Banner