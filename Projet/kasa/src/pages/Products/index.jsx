import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import StarScale from '../../components/StarScale'
import Host from '../../components/Host'
import Tag from '../../components/Tag'
import Carrousel from '../../components/Carrousel'
import Collapse from '../../components/Collapse'

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
			
			<section className='blocInfo'>
                        <div>
                            <h1>{ product.title }</h1>
                            <h2>{ product.location }</h2>
							<div>
                            { product.tags.map(tag => <Tag key={ `${ product.id }-${ tag }`} tag={ tag } />)}
                        </div>
                        </div>

						<div>
							<StarScale scaleValue={ product.rating } />
							<Host name={ product.host.name } picture={ product.host.picture }/>
						</div>

						<div className="">
							<Collapse title={`Description`} content={ product.description }/>
							<Collapse title={`Équipements`} content={ product.equipments }/>
						</div>
			</section>
		</div>
	)
}