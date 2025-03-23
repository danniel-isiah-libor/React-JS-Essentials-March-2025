function useGradesApi(userId) {
  const fetchGrades = (userId) => {
    // perform api for userId...

    console.log('fetching api....');

    return [75];
  }

  const deleteGrades = () => {
    // perform api...
    return true;
  }

  return { fetchGrades, deleteGrades };
}

export default useGradesApi;
