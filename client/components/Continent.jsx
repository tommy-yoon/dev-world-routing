import React from 'react'

import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import continents from '../../data/continents'

function Continent () {
  const { name } = useParams()

  const continent = continents[name]

  const sortiedCountries = continent.countries.sort((a, b) => {
    const result = a.name[0].toUpperCase().charCodeAt(0) - b.name[0].toUpperCase().charCodeAt(0)
    return result
  })

  return (
    <div className="continent">
      <h1>{name}</h1>
      <img src={'/images/' + continent.image} alt={name}></img>
      <ul className='countries'>
        {
          sortiedCountries.map((country) => {
            return <li key={country.code} className='country'>
              <Link to={`/continent/${name}/${country.code}`}>{country.name}</Link>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Continent
