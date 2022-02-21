import React, { Component } from 'react'
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Location from './Location'


class App extends Component {
    render () {
        return (
            <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/location' element={<Location />} />
            </Routes>
            </>
        )
    }
}

export default App

