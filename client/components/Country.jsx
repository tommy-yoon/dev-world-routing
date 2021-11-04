import React from 'react'
import { useParams, Link } from 'react-router-dom'
import continents from '../../data/continents'

function NavCountry (props) {
  // @see https://stackoverflow.com/a/51598277
  const { countryCodes } = useParams()

  console.log(continents[continent])

  const { countryCodes, image } = continents[continent]

  return (
    <>
      <ul>
        {
          countryCodes.map(countryCode => (
            <li>{countryCode}</li>
          ))
        }
      </ul>
    </>
  )
}

export default NavContinent
