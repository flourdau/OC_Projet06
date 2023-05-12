// import React, { useState } from 'react';
import './Carrousel.css';
import Previous from '../../assets/previous.svg';
import Next from '../../assets/next.svg';

function handleClick(title) {
	console.log('click' + title)
}

export default function Carousel({pictures}) {

    return (

        <section className='carrousel'>
            <img src={ Previous } alt={ Previous } onClick={() => handleClick('previous')} />
            <img src={ Next } alt={ Next } onClick={() => handleClick('next')}/>
            <ul>
            { pictures.map((element) => (
                <li>
                    <img key={`${element}`} src={`${element}`} alt={`${element}`} />
                </li>
            )) }
            </ul>
        </section>
    )

}