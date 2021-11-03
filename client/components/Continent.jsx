import React from 'react'

import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import continents from '../../data/continents'

function Continent () {
  const { name } = useParams()
  console.log(name)

  const continent = continents[name]

  const sortiedCountries = continent.countries.sort((a, b) => {
    return a.name[0] - b.name[0]
  })

  return (
    <div className="continent">
      <h1>{name}</h1>
      <img src={'/images/' + continent.image} alt={name}></img>
      <ul>
        {
          sortiedCountries.map((country) => {
            return <li key={country.code}>
              <Link to={`/continent/${name}/${country.code}`}>{country.name}</Link>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Continent
