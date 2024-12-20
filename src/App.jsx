import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HashRouter, Routes, Route } from 'react-router-dom' 
import { Report } from './ScreenComponent/Report'
import { Form } from './ScreenComponent/Form'
import { NavBar } from './Components/NavBar'

function App() {
 

  return (
    <>
      <HashRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Report />} ></Route>
          <Route path='/form' element={<Form />} ></Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
