import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../logo.svg';

function NavBar() {
    return (
    <div>
        <div className="w-full text-gray-700 bg-white">
            <div className="flex max-w-screen-xl px-4 mx-auto items-center justify-between flex-row px-6 lg:px-8">
                <div className="p-2 flex flex-row items-center justify-between">
                    <NavLink to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </NavLink>
                </div>
                <nav className="flex-grow pb-4 pb-0 flex justify-end flex-row">
                    {
                        [
                            {
                                text: "List payments",
                                path: "/list-payment"
                            },
                            {
                                text: "Add payment",
                                path: "/add-payment"
                            },
                            ].map((i, index) => <NavLink key={index} className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200" to={i.path} activeClassName="bg-gray-200 text-gray-900 bg-gray-200 mx-2">{i.text}</NavLink>
                        )
                    }
                </nav >
            </div >
        </div >
    </div>
    )
}

export default NavBar
