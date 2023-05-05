import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Apropos from '../Apropos'
import Error from '../Error'

function Routers() {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a_propos" element={<Apropos />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
        </Router>
    )
}

export default Routers