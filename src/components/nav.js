// Main navigation menu
import React from 'react';
import {
    //BrowserRouter as Router,
    //Switch,
    //Route,
    Link
  } from "react-router-dom";

const menuItems = [
    {
        title: 'Add note',
        path: '/notes-add'
    },
    {
        title: 'My notes',
        path: '/notes'
    }
]

export default function Nav() {
    return (<nav className="site-nav">
        <h1>
            <Link to="/">Yes We CANvass</Link>
            </h1>
        <ul>
            { menuItems.map((item, i) => (
            <li key={i}>
                <Link to={item.path}>{item.title}</Link>
            </li>
            ))
        }
        </ul>
    </nav>)
}