// Provide big cards to navigate to interior pages
import React from 'react';
import {Link} from "react-router-dom";

export default function Home () {
    return <main>
        <h2 className="page-title">Home</h2>
        <div className="hero">
            <Link to="/notes-add">Add a new note</Link>
            <div className="spacer"></div>
            <Link to="/notes">View all my notes</Link>
        </div>
    </main>
}