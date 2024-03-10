import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/about" },
    { id: 3, title: "newses", path: "/newses" },
  ];
  return (
    <nav className="bg-white w-full top-0 z-20">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
          <Link to="/">
            <img
              src="https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </Link>
        </div>
        <div className="flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto">
          <div>
            <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
              <li className="mt-4 lg:mt-0">
                <NavLink
                  to="/login"
                  className="py-3 px-4 text-center border text-gray-600 hover:text-indigo-600 rounded-md block lg:inline lg:border-0"
                >
                  Login
                </NavLink>
              </li>
              <li className="mt-8 lg:mt-0">
                <NavLink
                  to="/signup"
                  className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline"
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {navLinks.map((navLink, id) => {
                return (
                  <li key={id} className="text-gray-600 hover:text-indigo-600">
                    <NavLink to={navLink.path}>{navLink.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
