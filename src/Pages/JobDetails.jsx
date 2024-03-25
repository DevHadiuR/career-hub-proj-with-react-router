import { useLoaderData, useParams } from "react-router-dom";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
  const notify = () =>
    toast("Successfully Applied!!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  const jobDetails = useLoaderData();
  const { id } = useParams();
  const job = jobDetails.find((jobDetail) => jobDetail.id === parseInt(id));
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    job_title,
    salary,
    contact_information,
  } = job;
  return (
    <section className="flex flex-col md:flex-row  gap-10 mt-10 mb-10 ">
      <div className="border border-primary p-4 rounded-2xl w-2/3 space-y-6">
        <p className="opacity-80">
          <span className="font-bold">Job Description:</span> {job_description}
        </p>
        <p className="opacity-80">
          <span className="font-bold">Job Responsibility:</span>{" "}
          {job_responsibility}
        </p>
        <h1 className="font-bold opacity-80">Educational Requirments : </h1>
        <p>{educational_requirements}</p>
        <h1 className="font-bold opacity-80">Experiences : </h1>
        <p className="opacity-80">{experiences}</p>
      </div>
      <div className="w-1/3 ">
        <div className="border border-primary p-4 rounded-2xl  bg-[#F4F1FF] space-y-7">
          <h1 className="font-bold">Job Details</h1>
          <p>
            <span className="font-bold">Salary</span> : {salary}
          </p>
          <p>
            <span className="font-bold">Job Title</span> : {job_title}
          </p>
          <h1 className="font-bold">Contact Information</h1>
          <p>
            <span className="font-bold">Phone</span> :{" "}
            {contact_information.phone}
          </p>
          <p>
            <span className="font-bold">Phone</span> :{" "}
            {contact_information.email}
          </p>
          <p>
            <span className="font-bold">Address</span> :{" "}
            {contact_information.address}
          </p>
        </div>
        <div className="text-center mt-5">
          <button
            onClick={notify}
            className="btn bg-purple-400 hover:bg-purple-700 text-white w-full text-xl"
          >
            Apply Now
          </button>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
