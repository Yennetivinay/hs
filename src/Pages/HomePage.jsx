import React, { useEffect, useState } from 'react'
import MarkDownPage from '../components/MarkDownPage';
import Caurosal from '../components/Caurosal';

const HomePage = () => {
  return (
    
    <div>
      <Caurosal content={4}/>
          <MarkDownPage />
    </div>
  )
}

export default HomePage
