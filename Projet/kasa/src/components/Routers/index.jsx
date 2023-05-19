import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'
import logo   from '../../assets/logo.svg'

// PAGES:
import Home from '../../pages/Home'
import About from '../../pages/About'
import Error from '../../pages/Error'
import Product from '../../pages/Products'

export default function Routers() {

    return (

    <Router>

        <Header logo={logo} />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path="/a_propos" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
        <Footer logo={logo} />

    </Router>

)}