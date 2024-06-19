import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/newscontainer/News'
import Footer from './components/Footer'

const App = () => {

  //category section 
  const [category, setCategory] = useState('general')
  return (
    <>
    <Navbar setCategory= {setCategory} />
    <News category= {category} />
    <Footer />



       
    </>
  )
}

export default App
