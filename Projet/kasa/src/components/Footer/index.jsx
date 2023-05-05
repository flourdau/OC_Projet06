import './Footer.css'

function Footer({children}) {


	return (
		<footer className='kasa-footer'>

            { children }

            <div className='kasa-footer-elem'>© 2020 Kasa. All rights reserved</div>

		</footer>
	)
}

export default Footer