import React from 'react'

const Navbar = () => {
  return (
    <div className='p-3 mt-5 nav'>
        <div className="navbar shadow-sm p-5 nav-handle rounded-xl">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Smarket</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 flex items-center gap-10 text-[18px]">
      <li><a>Products</a></li>
      <li>
      <a href="#">About</a>
      </li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar