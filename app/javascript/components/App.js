import React, { Component } from 'react'
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'

class App extends Component {
    render () {
        return (
            <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            </>
        )
    }
}

export default App