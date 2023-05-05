import emptyStar from '../../assets/emptyStar.svg'
import lightStar from '../../assets/lightStar.svg'

function StarScale({ scaleValue }) {
	let range = []
	let index = 0
	
	while (++index <= 5) {

		if (scaleValue < index) {
			range.push(<img src={ emptyStar } alt="Empty star" />)
		}
		else {
			range.push(<img src={ lightStar } alt="Star " />)
		}

	}

	return range
}

export default StarScale