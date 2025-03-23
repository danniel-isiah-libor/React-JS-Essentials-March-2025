import { useEffect, memo, useState, useCallback } from 'react'

function Grades({ grades, setGrades }) {

    useEffect(() => {
        console.log("Grades component rendered");
    })

    useEffect(() => {
        initialize()
    }, [])


    const initialize = () => {
        setGrades([96, 97, 98])
    }

    const onDelete = useCallback((index) => {
        const newGrades = grades.filter((grade, i) => {
            return i !== index
        })
        setGrades(newGrades)
    }, [grades])

    return (
        <ul>
            {grades.map((grade, index) => {
                return (
                    <li key={index}>
                        <strong>{grade}</strong>
                        <button className='btn p-3 bg-red-400 rounded-lg text-white cursor-pointer' onClick={() => (onDelete(index))}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default memo(Grades)