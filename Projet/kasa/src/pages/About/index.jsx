import Collapse from '../../components/Collapse';

import Data   from '../../datas/About.json'

import './About.css';

export default function About() {

    return (
        <main>
        { Data.map(({ index, title, content }, i) => (
            <Collapse 
                index={ i } 
                title={ title } 
                content={ content }
            />))
        }
        </main>)

}