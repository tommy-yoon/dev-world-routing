import React from 'react'
import continents from '../../data/continents'
import { Link } from 'react-router-dom'

function Nav () {
  const continentNames = Object.keys(continents)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        {
          continentNames.map(continentName => (
            <li key={continentName}><Link to={`/continents/${continentName}`}>{continentName}</Link></li>
          ))
        }
      </ul>
    </div>
  )
}

export default Nav
