import React from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './EducationInfo'
import Work from './Work'
import "../styles/App.scss"

function App() {
  return (
  <div>
    <GeneralInfo/>
    <Education />
    <Work />
  </div>
  )
}

export default App
