import { useState } from 'react'
import propTypes from 'prop-types'

import Previous from '../../assets/previous.svg'
import Next from '../../assets/next.svg'

import './Carrousel.css'

// function handleClick (switchPicture) {
//     console.log(switchPicture)
// }

export default function Carousel({ pictures }) {

    const [ id, setId ] = useState(1)
    const lenPictures = pictures.length

    const handleClick = switchPicture => (
        switchPicture === 'next'
            ? (setId(id === lenPictures ? 1 : id + 1))
            : (setId(id === 1 ? lenPictures : id - 1))
    )

    return (

        <section className='carrousel'>

            <div>
                <img src={ Previous } alt={ Previous } onClick={() => handleClick('previous', pictures)} />
                <img src={ Next } alt={ Next } onClick={() => handleClick('next', pictures)}/>
            </div>
            <p className="carousel_cnt"> {id}/{lenPictures}</p>
            <img className="carousel_pic" src={pictures[id - 1]} alt="Représentation du logement" />
            {/* <ul>{ pictures.map((element) => (
                <li><img key={ `${element}` } src={ `${element}` } alt={` ${element}` } /></li>)) }
            </ul> */}

        </section>

    )

}

Carousel.propTypes = {
    pictures: propTypes.arrayOf(propTypes.string)
}