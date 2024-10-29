import React from 'react'
import CreateEmployee from '../components/CreateEmployee'
import Nav from '../components/Nav'
import TitleH1 from '../components/TitleH1'
import TitleH2 from '../components/TitleH2'

export default function Home() {
  return (
    <>
      <TitleH1 text="HRnet" />
      <div className='container'>
        <Nav />
        <TitleH2 />
        <CreateEmployee />
      </div>
    </>
  )
}
