import React from 'react'
import { useParams, Link } from 'react-router-dom'
import countries from '../../data/countries'

function Country (props) {
  const { continent, countryCode } = useParams()

  // Find the match from the country list
  const country = countries.find(country => country.code === countryCode)

  const neighborCountryCodes = country.neighbours.split(',')

  // If a country on the list belongs to the neighbour countries, include it;
  const neighborCountries = countries.filter(country => {
    return neighborCountryCodes.indexOf(country.code) !== -1
  })

  console.log(neighborCountries)

  // Example object:
  //   {
  //     "code": "BI",
  //     "name": "Burundi",
  //     "capital": "Gitega",
  //     "areaSqKms": "27830",
  //     "population": "11175378",
  //     "currencyCode": "BIF",
  //     "currencyName": "Franc",
  //     "neighbours": "TZ,CD,RW",
  //     "flag": "🇧🇮"
  //   }

  return (
    <div className="countryClass">
      <h2>{country.flag}{country.name}</h2>
      <table>
        <tr>
          <th>Capital</th>
          <td>{country.capital}</td>
        </tr>
        <tr>
          <th>Area</th>
          <td>{country.areaSqKms}km<sup>2</sup></td>
        </tr>
        <tr>
          <th>Population</th>
          <td>{country.population}</td>
        </tr>
        <tr>
          <th>Currency</th>
          <td>{country.currencyName}</td>
        </tr>
        <tr>
          <th className="neighbor-th">Neighbors</th>
          {
            neighborCountries.map(country => (
              <tr key={country.name}><Link to={`/continents/${continent}/${country.code}`}>{country.name}</Link></tr>
            ))
          }
        </tr>
      </table>
    </div>
  )
}

export default Country
