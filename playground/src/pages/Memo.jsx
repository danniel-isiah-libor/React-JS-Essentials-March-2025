import React, { useState, useCallback, useEffect } from "react";
import Section from "../components/Section";
import Grades from "../components/hooks/Grades";

function Memo() {
  const [total, setTotal] = useState(0);

    
  const onCalculate = () => {
    setTotal(total + 1);
  };

//   const initialize = () => {
//     setGrades([75])
//   }



  return (
    <>
      <Section>
        <h1>{total}</h1>

        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
          onClick={onCalculate}
        >
             Calculate
        </button>

        <br />

        <Grades/>
      </Section>
    </>
  );
}

export default Memo;
