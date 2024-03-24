import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:bg-[#75f6c0]">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics" className="hover:bg-[#75f6c0]">
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink to="/Jobs" className="hover:bg-[#75f6c0]">
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to="/applied" className="hover:bg-[#75f6c0]">
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to="/blogs" className="hover:bg-[#75f6c0]">
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className=" mt-10">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#4FC0D0] pr-20 rounded-box w-auto"
            >
              {links}
            </ul>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">Career Hub</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
        </div>
        <div className="ml-2 navbar-end">
          {/* <div className="hidden md:block mr-5">
            <label className="input border-none flex items-center gap-3 w-full max-w-xs bg-[#150B2B0D] rounded-r-full rounded-l-full">
              <span>
                <FaMagnifyingGlass />
              </span>
              <input type="text" className="grow" placeholder="Search" />
            </label>
          </div> */}
          <button className="btn">Star Applying</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
