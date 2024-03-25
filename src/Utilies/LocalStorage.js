export const getStoredJobApplication = () => {
  const storedJobApplocation = localStorage.getItem("job-Application");
  if (storedJobApplocation) {
    return JSON.parse(storedJobApplocation);
  } else {
    return [];
  }
};

export const setJobApplication = (id) => {
  const storedData = getStoredJobApplication();

  const exits = storedData.find((data) => data == id);
  console.log(exits, typeof exits);
  if (!exits) {
    storedData.push(id);
    localStorage.setItem("job-Application", JSON.stringify(storedData));
  }
};
