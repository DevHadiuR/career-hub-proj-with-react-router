import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="border-2 border-primary border-dotted p-10 text-3xl font-bold space-y-5 shadow-xl rounded-2xl">
      <img src={logo} alt="logo" />
      <h1 className="text-2xl font-bold">{job_title}</h1>
      <p className="text-xl font-semibold"> {company_name}</p>
      <div className="flex gap-5">
        <button
          type="button"
          className="px-8 py-3 font-semibold border rounded border-primary text-secondary"
        >
          {remote_or_onsite}
        </button>
        <button
          type="button"
          className="px-8 py-3 font-semibold border rounded border-primary text-secondary"
        >
          {job_type}
        </button>
      </div>
      <div className="flex gap-5 text-xl opacity-85">
        <p className="flex gap-2">
          <span>
            <img src="/src/assets/icons/Location2.png" alt="" />
          </span>{" "}
          {location}
        </p>
        <p className="flex gap-2 items-center">
          <span>
            <img src="/src/assets/icons/money.png" alt="" />
          </span>{" "}
          Salary : {salary}
        </p>
      </div>
      <Link
        to={`/jobDetails/${id}`}
        className="px-5 py-2.5 relative rounded group font-medium text-white  inline-block"
      >
        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
        <span className="relative">View Details</span>
      </Link>
    </div>
  );
};

export default Job;
