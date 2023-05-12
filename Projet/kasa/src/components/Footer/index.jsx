import './Footer.css'

export default function Footer({ logo }) {
	const myDate	= new Date()
	const year		= myDate.getFullYear()

	return (
		<footer className='kasa-footer'>
			<img src={ logo } alt='kasa' className='kasa-logo' />
            <p className='kasa-footer-elem'>© { year } Kasa. All rights reserved</p>
		</footer>
)}