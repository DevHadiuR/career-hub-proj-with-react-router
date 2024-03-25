import { useEffect, useState } from "react";
import Job from "./Job";

const Featured = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <section className="mt-16 mb-16">
      <div className="text-center space-y-5">
        <h1 className="text-5xl font-extrabold">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </section>
  );
};

export default Featured;
