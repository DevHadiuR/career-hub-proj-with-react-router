import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utilies/LocalStorage";
import { useEffect, useState } from "react";

const Applied = () => {
  const jobs = useLoaderData();
  const [jobApplied, setJobApplied] = useState([]);
  const [displayJob, setDisplayJob] = useState(jobApplied);
  const handleDisplay = (filter) => {
    if (filter === "all") {
      setDisplayJob(jobApplied);
    } else if (filter === "remote") {
      const remoteJob = jobApplied.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJob(remoteJob);
    } else if (filter === "onsite") {
      const onsiteJob = jobApplied.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJob(onsiteJob);
    }
  };
  useEffect(() => {
    const storedJobs = getStoredJobApplication();

    const appliedJobs = jobs.filter((job) => storedJobs.includes(job.id));
    setJobApplied(appliedJobs);
  }, [jobs]);

  return (
    <div className="mt-10">
      <h1 className="text-4xl text-center">
        Applied Jobs : {jobApplied.length}
      </h1>
      <div className="text-end">
        <div className="dropdown dropdown-botton">
          <div tabIndex={0} role="button" className="btn m-1">
            Click
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleDisplay("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleDisplay("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleDisplay("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </div>
      </div>
      <section className="grid grid-cols-2 gap-5">
        {/* card 1 */}
        {displayJob.map((job) => (
          <div
            key={job.id}
            className="text-3xl font-semibold border border-primary p-5 space-y-4"
          >
            <div>
              <h1> {job.job_title}</h1>
              <p>{job.company_name}</p>
              <span>
                <p className="bg-secondary w-[30%] p-4 rounded-3xl">
                  {job.remote_or_onsite}
                </p>
                <p>{job.job_type}</p>
              </span>
            </div>
            <button className="btn btn-primary">View Details</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Applied;
