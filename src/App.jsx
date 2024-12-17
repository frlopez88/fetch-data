import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { Report } from './ScreenComponent/Report'
import { Form } from './ScreenComponent/Form'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Report />} ></Route>
          <Route path='/form' element={<Form />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
