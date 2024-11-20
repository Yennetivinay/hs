import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import MarkDownPage from './MarkDownPage'

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:pageName" element={<MarkDownPage/>}/>
      </Routes>
  )
}

export default AppRouter
