import React from 'react'

export default function Header() {
  return (
    <header>
      <nav className="d-flex justify-content-between">
        <img src="https://reactjsexample.com/assets/favicon.png" className='img'></img>
        <ul className='d-flex list-unstyled'>
          <li className='mx-2'>Pricing</li>
          <li className='mx-2'>About</li>
          <li className='mx-2'>Contact</li>
        </ul>
      </nav>
    </header>
  )
}