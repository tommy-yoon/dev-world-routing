import React from 'react'
import { useParams, Link } from 'react-router-dom'
import continents from '../../data/continents'

function NavContinent (props) {
  // @see https://stackoverflow.com/a/51598277
  const { continent } = useParams()

  console.log(continents[continent])

  const { countries, image } = continents[continent]

  console.log(countries)

  return (
    <>
      <div>
        <img src={`./images/${image}`} />

        <ul>
          {
            countries.map(country => (
              <li key={country.name}>{country.name}</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default NavContinent
