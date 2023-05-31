import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import StarScale from '../../components/StarScale'
import Host from '../../components/Host'
import Tag from '../../components/Tag'
import Carrousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'

import Data from '../../datas/Product.json'

import './Products.css'


export default function Products() {	
	const navigate = useNavigate();
    const { id } = useParams();
	const [ product ] = Data.filter(data => data.id === id);

	useEffect(() => {
        if(product === undefined) {
            navigate('/error')
        }
    })

    if(typeof product === 'object') {
		return (
			<div className='productContainer'>
				<Carrousel pictures={ product.pictures }/>
				<section>
					<div className="blocInfo">
						<div>
							<h1>{ product.title }</h1>
							<h2>{ product.location }</h2>
						</div>
						<Host name={ product.host.name } picture={ product.host.picture }/>
					</div>
					<div  className="blocList">
						<ul className='tagsList'>
						{ 
							product.tags.map(tag => <Tag  key={ `${ product.id }-${ tag }-'tags`} tag={ tag } id={ product.id } />)
						}
						</ul>
						<ul className='starsList'><StarScale scaleValue={ product.rating } /></ul>
					</div>
					<div className="blocCollapse">
						<div><Collapse key={ 'blocCollapse1' } title={`Description`} content={ product.description }/></div>
						<div><Collapse key={ 'blocCollapse2' } title={`Équipements`} content={ product.equipments }/></div>
					</div>
				</section>
			</div>
		)
	}
}