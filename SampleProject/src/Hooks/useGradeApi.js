import React from 'react'

function useGradeApi() {
    const fetchGrades = () => {
        return [75]
    }

    return {fetchGrades}
}

export default useGradeApi