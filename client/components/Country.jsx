import React from 'react'

import ReactCountryFlag from 'react-country-flag'

import { useParams } from 'react-router'
import { Link, useHistory } from 'react-router-dom'

import countries from '../../data/countries'
import continents from '../../data/continents'

function Country () {
  const { name, code } = useParams()
  const history = useHistory()

  const myContinent = continents[name]

  // check the myContinent has this country in it
  if (!myContinent.countries.find((country) => country.code === code)) {
    // if not find the real my continent
    const arr = Object.keys(continents)
    const index = arr.indexOf(name)
    arr.splice(index, 1)
    arr.forEach(continent => {
      if (continents[continent].countries.find((country) => country.code === code)) { history.push(`/continent/${continent}/${code}`) }
    })
  }

  const country = countries.find(ele => ele.code === code)
  return (
    <div className="country">
      <h1><ReactCountryFlag countryCode={code} svg/>{country.name}</h1>
      <div className='description'>
        <p className='bold'>Capital:</p>&nbsp;<p>{country.capital}</p>
      </div>
      <div className='description'>
        <p className='bold'>Area:</p>&nbsp;<p>{country.areaSqKms} km&sup2;</p>
      </div>
      <div className='description'>
        <p className='bold'>Population:</p>&nbsp;<p>{country.population}</p>
      </div>
      <div className='description'>
        <p className='bold'>Currency:</p>&nbsp;<p>{country.currencyName}({country.currencyCode})</p>
      </div>
      <div className='description'>
        <p className='bold'>Neighbours:</p>
      </div>
      <div className='description'>
        <ul>
          {country.neighbours !== '' && country.neighbours.split(',').map((code) => {
            const country = countries.find(ele => ele.code === code)
            return <li key={code} className='country-list'>
              <Link to={`/continent/${name}/${code}`}>{country.name}</Link>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Country
