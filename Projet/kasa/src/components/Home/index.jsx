
import logo from '../../assets/logo.svg'
import Banner from '../Banner'
import Footer from '../Footer'
import './Home.css';
import Data from '../../data.json'
import LocationItem from '../Card'

function App() {
  // console.log(Data)
    return (
  
        <div className="App"> 

        <Banner>
          <h1><img src={logo} alt='kasa' className='kasa-logo' /></h1>
        </Banner>
        <ul>
        {Data.map(({ id, title, cover, pictures, description, host, rating, location, equipements, tags }) => (
          <li key={`${id}`}>
						<LocationItem
							title={title}
							cover={cover}
              rating={rating}
							// pictures={pictures}
							// description={description}
							// host={host}
							// location={location}
							// equipements={equipements}
							// tags={tags}
              />
						</li>
				))}
        </ul>
        <Footer>
          <img src={logo} alt='kasa' className='kasa-logo' />
        </Footer>

    </div>
  );
}

export default App;
