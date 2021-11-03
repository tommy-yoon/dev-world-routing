import React from 'react'

import ReactCountryFlag from 'react-country-flag'

import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import countries from '../../data/countries'

function Country () {
  const { name } = useParams()
  console.log('Country', 'name', name)
  const { code } = useParams()
  console.log('Country', 'code', code)

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
        <ul>
          {country.neighbours !== '' && country.neighbours.split(',').map((code) => {
            const country = countries.find(ele => ele.code === code)
            return <li key={code}>
              <Link to={`/continent/${name}/${code}`}>{country.name}</Link>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Country
