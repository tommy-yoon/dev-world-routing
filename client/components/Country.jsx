import React from 'react'
import { useParams, Link } from 'react-router-dom'
import countries from '../../data/countries'

function Country (props) {
  const { countryCode } = useParams()

  // Find the match from the country list
  const country = countries.find(country => country.code === countryCode)

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
          <th>Neighbors</th>
          <td>{country.neighbours}</td>
        </tr>
      </table>
    </div>
  )
}

export default Country
