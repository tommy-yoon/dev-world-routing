import React from 'react'
import { Link } from 'react-router-dom'

import continents from '../../data/continents'

function Nav () {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {
          Object.keys(continents).map(continent => {
            return <li key={continent}>
              <Link to={'/continents/' + continent}>{continent}</Link>
            </li>
          })}
      </ul>
    </div>
  )
}

export default Nav
