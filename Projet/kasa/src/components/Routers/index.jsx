import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '../../pages/Home'
import Apropos from '../../pages/Apropos'

import Error from '../Error'
import Header from '../Header'
import Footer from '../Footer'

function Routers() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a_propos" element={<Apropos />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                </main>
            <Footer/>
        </Router>
    )
}

export default Routers