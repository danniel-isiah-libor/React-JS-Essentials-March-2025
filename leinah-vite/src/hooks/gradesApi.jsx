function GradesApi(userId) {

  const fetchGrades = (userId) => {
    return [55, 32, 85];
  }

  const deleteGrades = () => {
    return true;
  }
  return { fetchGrades, deleteGrades };
}

export default GradesApi;
