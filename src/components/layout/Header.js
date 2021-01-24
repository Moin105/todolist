import React from 'react';
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header className={'headerStyle'}>
            <h1>TODOLIST</h1>
            <div className={'link'}>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </div>
        </header>

    )
}
