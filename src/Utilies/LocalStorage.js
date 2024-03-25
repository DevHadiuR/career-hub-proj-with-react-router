export const getStoredJobApplication = () => {
  const storedJobApplocation = localStorage.getItem("job-Application");
  if (storedJobApplocation) {
    return JSON.parse(storedJobApplocation);
  } else {
    return [];
  }
};

export const setJobApplication = (id) => {

    
  const setApplication = JSON.stringify(id);

};
