import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'



export default function error() {
    return (
        <div className="error">
            <BiErrorCircle className="erroricon" />
            <h1>Looks like the page doesnt exist.</h1>
        </div>
    )
}
