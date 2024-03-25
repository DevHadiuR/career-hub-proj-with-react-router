import { useEffect, useState } from "react";
import Job from "./Job";

const Featured = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
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
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="text-center  mt-14">
        <button
          onClick={() => setDataLength(jobs.length)}
          className={`btn text-white bg-purple-500 px-5 
          text-xl
          ${jobs.length === dataLength && "hidden"}
          `}
        >
          See All Jobs
        </button>
      </div>
    </section>
  );
};

export default Featured;
