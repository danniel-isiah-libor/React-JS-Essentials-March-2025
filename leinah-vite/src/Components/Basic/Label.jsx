import React from 'react'

export default function Label({ htmlFor, labelName }) {
    return (
        <label htmlFor={htmlFor}>{labelName}: </label>
    )
}
