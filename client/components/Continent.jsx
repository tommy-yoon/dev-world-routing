import React from 'react'

import { useParams } from 'react-router'

import continents from '../../data/continents'

function Continent () {
  const { name } = useParams()
  console.log(name)

  const continent = continents[name]

  return (
    <img src={'/images/' + continent.image} alt={name}></img>
  )
}

export default Continent
