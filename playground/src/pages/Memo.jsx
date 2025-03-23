import React, {useCallback, useState, useMemo, useEffect} from 'react'
import Grades from '../hooks/Grades.jsx'
import useGradesApi from '../hooks/gradesApi.jsx';

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

//   const processDelete = (index) => {
//     console.log("Deleting...");
//     return index
//   }

const userId = '123'

function Memo() {
    const [grades, setGrades] = useState([])
    const [total, setTotal] = useState(0)
    const {fetchGrades} = useGradesApi(userId)

    const calculate = useMemo(() => expensiveCalculation(total), [total])

    useEffect(() => {
      // fetch api...
      fetchGrades()

      setGrades([75])
    }, [])

    const onCalculate = () => {
        setTotal(total + 1)
    }

    const onDelete = useCallback((index) =>  {
        const newGrades = grades.filter((grade, i) => {
            return i !== index
        })

        setGrades(newGrades)
    }, [grades])

    // const onDelete = useMemo((index) => (processDelete(index), [grades]))

  return (
    <>
        <div>Memo</div>

        <br />

        <h1>{total}</h1>
        <button onClick={onCalculate}>Calculate</button>

        <h2>{calculate}</h2>

        <br />

        <Grades state={{ grades, onDelete }}/>
    </>
  )
}

export default Memo