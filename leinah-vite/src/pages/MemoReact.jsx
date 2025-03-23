import { useState, useEffect, useMemo } from 'react'
import Container from '../Components/Basic/Container'
import Grades from '../hooks/Grades'
import GradesApi from '../hooks/gradesApi';

const userID = 123;
export default function MemoReact() {
    const [grades, setGrades] = useState([])
    const [total, setTotal] = useState(0)
    const { fetchGrades } = GradesApi(userID)

    useEffect(() => {
        fetchGrades()
    })

    const onCalculate = () => {
        setTotal(total + 1)
    }

    return (
        <Container>
            <p className="text-xl font-semibold">Memo</p>

            <br />
            <p className='text-xl font-semibold text-green-500'>{total}</p>
            <button
                className="btn p-3 bg-green-400 rounded-lg text-white cursor-pointer"
                onClick={onCalculate}
            >
                Calculate
            </button>
            <br />
            <Grades grades={grades} setGrades={setGrades} />
        </Container>
    )
}
