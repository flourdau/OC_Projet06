import emptyStar from '../../assets/emptyStar.svg'
import lightStar from '../../assets/lightStar.svg'

import './StarScale.css'

export default function StarScale({ scaleValue }) {

    let range = []
    let index = 0

    while (++index <= 5) {

        if (scaleValue < index) {
            range.push(<li><img key={ index } src={ emptyStar } alt="Empty star" /></li>)
        }
        else {
            range.push(<li><img key={ index } src={ lightStar } alt="Star" /></li>)
        }

    }

    return range

}