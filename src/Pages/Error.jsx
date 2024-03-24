import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-8">
      <h1 className="text-5xl font-bold">OOoopps !!</h1>
      <button className="btn bg-primary text-white text-3xl px-10">
        {" "}
        <Link to="/">Back</Link>{" "}
      </button>
    </div>
  );
};

export default Error;
