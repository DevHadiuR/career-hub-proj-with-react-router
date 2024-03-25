const Banner = () => {
  return (
    <div className="hero h-auto bg-base-200 mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse gap-40">
        <img
          src="/src/assets/images/user.png"
          className=" max-w-lg rounded-lg"
        />
        <div className="w-[40%]">
          <h1 className="text-5xl font-bold">
            One Step Closer To Your{" "}
            <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
              Dream Job
            </span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          {/* btn */}
          <a
            href="#_"
            className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span className="relative">Get Started</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
