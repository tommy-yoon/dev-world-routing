import React from 'react'

import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

import continents from '../../data/continents'

function Nav () {
  const { name } = useParams()
  return (
    <div className='nav'>
      <h2></h2>
      <Link className='home' to='/'>
        <span className='fa-stack fa-lg'>
          <i className='fas fa-circle fa-stack-2x'></i>
          <i className='fas fa-home fa-stack-1x fa-inverse'></i>
        </span>
        Home
      </Link>
      <ul>
        {
          Object.keys(continents).map(continent => {
            return <li key={continent} className={continent === name ? 'continent selected' : 'continent not-selected'}>
              <Link to={`/continents/${continent}`}><p className={continent === name ? 'selected' : 'not-selected'}>{continent}</p></Link>
            </li>
          })}
      </ul>
    </div>
  )
}

export default Nav
