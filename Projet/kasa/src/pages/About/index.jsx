import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse';

import Data   from '../../datas/About.json'

import './About.css';

export default function About() {

    return (

        <div className="aboutContainer"> 
            <Banner page="about" />
            <ul>
            { Data.map(({ index, title, content }, i) => (
                <Collapse 
                    index={ i } 
                    title={ title } 
                    content={ content }
                />))
            }
            </ul>
        </div>
)}