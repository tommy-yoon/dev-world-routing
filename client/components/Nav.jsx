import React from 'react'

import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

import continents from '../../data/continents'

function Nav () {
  const { name } = useParams()
  return (
    <div>
      <h2>Nav</h2>
      <Link to='/'>Home</Link>
      <ul>
        {
          Object.keys(continents).map(continent => {
            return <li key={continent} className={continent === name ? 'selected' : ''}>
              <Link to={`/continents/${continent}`}><p className={continent === name ? 'selected' : ''}>{continent}</p></Link>
            </li>
          })}
      </ul>
    </div>
  )
}

export default Nav
