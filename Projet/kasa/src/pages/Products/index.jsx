import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import StarScale from '../../components/StarScale'
import Carrousel from '../../components/Carrousel'

import Data from '../../datas/Product.json'

import './Products.css'


export default function Products() {	
	const navigate = useNavigate();
    const { id } = useParams();

	console.log(Data)
	const [ product ] = Data.filter(data => data.id === id);
	console.log(product)

	useEffect(() => {
        if(product === undefined) {
            navigate('/error-product');
        }
    })

	return (
		<div className='kasa-item'>
			<Carrousel pictures={ product.pictures }/>
			<img className='kasa-item-cover' src={product.cover} alt={`${product.title} cover`} />
			
			<div className='blocInfo'>
                        <div>
                            <h1>{product.title}</h1>
                            <h2>{product.location}</h2>
                        </div>

						<div>
							<StarScale scaleValue={product.rating} />
						</div>
			</div>
		</div>
	)
}