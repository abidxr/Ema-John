import React, { useEffect } from 'react'

export default function About() {
    useEffect(() => {
        document.title = "About"
    });
    return (
        <div>
            <h1>About page</h1>
        </div>
    )
}
