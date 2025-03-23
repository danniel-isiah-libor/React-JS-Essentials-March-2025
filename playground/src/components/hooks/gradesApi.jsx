function useGradesApi() {
  const fetchGrades = () => {
    return [75];
  };
  const deleteGrades = () => {
    return true;
  };
  return { fetchGrades, deleteGrades };
}

export default useGradesApi;
