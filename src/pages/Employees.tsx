import React from 'react'
import EmployeeList from '../components/EmployeeList'
import Title from '../components/TitleH1'

export default function Employees() {
  return (
    <>
      <Title text="Current Employees" />
      <EmployeeList />
    </>
  )
}
