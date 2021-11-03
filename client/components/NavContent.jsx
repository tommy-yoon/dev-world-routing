import React from 'react'
import { useParams } from 'react-router-dom'

function NavContent (props) {
  const { name } = useParams()
  // OR const { name } = props.match.param
  return (
    <>
      <p>{name}</p>
    </>
  )
}

export default NavContent
