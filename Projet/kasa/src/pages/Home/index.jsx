import Banner from '../../components/Banner'
import Card from '../../components/Card'

import Data from '../../datas/Product.json'

import './Home.css'

export default function App() {
    return (

        <div className="App"> 

            <Banner />

            <main>
                <ul>
                { Data.map(({ id, title, cover }) => (
                    <li key={`${ id }`}>
                        <Card
                            id={ id }
                            title={ title }
                            cover={ cover }
                        />
                    </li>
                ))}
                </ul>
            </main>

        </div>

)}