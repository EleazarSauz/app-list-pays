import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../logo.svg';

function NavBar() {
    return (
    <div>
        <div className="w-full text-gray-700 bg-white">
            <div x-data="{ open: false }" className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="p-4 flex flex-row items-center justify-between">
                    <NavLink to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </NavLink>
                    <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                        <path x-show="!open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path x-show="open" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    </button>
                </div>
                <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                    {
                        [
                            {
                                text: "List pays",
                                path: "/list-pay"
                            },
                            {
                                text: "Add pay",
                                path: "/add-pay"
                            },
                            // {
                            //     text: "Add Providers",
                            //     path: "/providers"
                            // },
                            // {
                            //     text: "Add Creator",
                            //     path: "/creator"
                            // },
                            ].map((i, index) => <NavLink key={index} className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to={i.path} activeClassName="bg-gray-200 text-gray-900 bg-gray-200 mx-2">{i.text}</NavLink>
                        )
                    }
                </nav >
            </div >
        </div >
    </div>
    )
}

export default NavBar
