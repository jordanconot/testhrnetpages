import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <Link className='nav' to="/employees-list">View Current Employees</Link>
    </>
  )
}
