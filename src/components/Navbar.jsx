import React, { useState } from 'react'

const Navbar = ({ setCategory }) => {

    // nav list store in variables
    const navItems = 
    <>
    <li className='hover:scale-105 duration-200'><a onClick={() => setCategory('business')}>Business</a></li>
                            <li className='hover:scale-105 duration-200'><a onClick={() => setCategory('entertainment')}>Entertainment</a></li>
                            <li className='hover:scale-105 duration-200'><a onClick={() => setCategory('health')}>Health</a></li>
                            <li className='hover:scale-105 duration-200'><a onClick={() => setCategory('science')}>Science</a></li>
                            <li className='hover:scale-105 duration-200'><a onClick={() => setCategory('sports')}>Sports</a></li>
                            <li className='hover:scale-105 duration-200'><a onClick={() => setCategory('technology')}>Technology</a></li>
    </>

    // impliment search function
    const [search, setSearch] = useState([])
    const filterNews = (e) => {
        setSearch(search.filter(f => f.title.toLowerCase().includes(e.target.value)));
       
    }
    
    return (
        <>
            <div className="navbar bg-slate-800 md:px-10">
                <div className="navbar-start">
                    {/* mobile view */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className=" md:text-2xl text-xl">News <span className='bg-green-400 px-3 text-black rounded-xl'>App</span></a>
                </div>
                {/* desk top view */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 dropdown-content">
                    {navItems}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="form-control">
                        <input type="text" 
                        placeholder="Search yours news"
                        disabled={true}
                        onChange={(e)=> filterNews(e)} 
                        className="input border input-bordered md:w-64 w-32" />
                    </div>
                    <a className="btn btn-outline btn-success btn-sm ml-2" 
                    disabled={true}
                    >Search</a>
                </div>
            </div>

        </>
    )
}

export default Navbar
