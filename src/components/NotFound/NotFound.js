import React from 'react'
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <h1>This page is not available</h1>
            <Link to="/">Go to home page</Link>
        </div>
    )
}
