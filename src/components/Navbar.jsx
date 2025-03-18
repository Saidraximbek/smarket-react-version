import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='ml-auto mr-auto nav container max-w-[1100px] mt-5'>
        <div className="navbar shadow-sm p-5 rounded-xl bg-[rgb(62,62,62)]">
  <div className="flex-1">
    <Link to={`/`} className="btn btn-ghost text-xl">Smarket</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 flex items-center gap-10 text-[18px]">
      <li><Link to="">Contact</Link></li>
      <li>
      <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar