import { useState } from 'react'
import propTypes from 'prop-types'

import Previous from '../../assets/previous.svg'
import Next from '../../assets/next.svg'

import './Carousel.css'

export default function Carousel({ pictures }) {

    const [ id, setId ] = useState(1)
    const lenPictures = pictures.length
    let myClassName ='carousel_btn'

    if (lenPictures <= 1) {
        myClassName = 'hiddenBtn'
    }

    const handleClick = switchPicture => (

        switchPicture === 'next'
            ? (setId(id === lenPictures ? 1 : id + 1))
            : (setId(id === 1 ? lenPictures : id - 1))

    )

    return (

        <section className='carousel'>
            <img className="carousel_pic" src={ pictures[id - 1] } alt="Représentation du logement" />
            <div className={ myClassName }>
                <img src={ Previous } alt={ Previous } onClick={() => handleClick('previous', pictures)} />
                <p className="carousel_cnt"> { id }/{ lenPictures }</p>
                <img src={ Next } alt={ Next } onClick={() => handleClick('next', pictures)}/>
            </div>
        </section>

    )

}

Carousel.propTypes = {
    pictures: propTypes.arrayOf(propTypes.string)
}