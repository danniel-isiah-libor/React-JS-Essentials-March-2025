import React, { useState, useEffect, memo } from "react";
import useGradesApi from "./gradesApi";

function Grades(props) {
  const [grades, setGrades] = useState([]);
  const { fetchGradesApi } = useGradesApi();

  useEffect(() => {
    console.log("Grades component mounted");
  });

  useEffect(() => {
    initialize();
  }, []);

  const initialize = () => {
    fetchGradesApi();
    setGrades([75]);
  };

  const onDelete = (index) => {
    const newGrades = grades.filter((grade, i) => {
      return i !== index;
    });

    setGrades(newGrades);
  };
  return (
    <>
      <ul>
        {grades.map((grade, index) => {
          return (
            <li key={index}>
              <strong>{grade}</strong>
              <button onClick={() => onDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default memo(Grades);
