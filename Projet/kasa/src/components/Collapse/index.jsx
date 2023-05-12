import { useState } from 'react';
import propTypes from 'prop-types'

import Arrow from '../../assets/arrow.svg'

import './Collapse.css'

export default function Collapse({index, title, content}) {
    const [ rotate, setRotate ] = useState(false);

    return (
        <li key={index} className={rotate ? 'collapse light-bg ' : 'collapse white-bg'}>
            <h3 className='collapse-bar' onClick={() => setRotate(!rotate)} >{title}
                <img className={rotate ? 'arrowUp' : 'arrowDown' } src={Arrow} alt={rotate ? "Up" : "Down" } />
            </h3>
            <div className={rotate ? 'collapse-content-open' : 'collapse-content-close' }>{content}</div>
        </li>
)}

Collapse.propTypes = {
    title: propTypes.string,
    content: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.string])
}
  
Collapse.defaultProps = {
    title: 'Title',
    content: "Content"
}