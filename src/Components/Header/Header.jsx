import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="shadow-xl mb-12">
      <div className="flex justify-between container mx-auto py-5 ">
        <Logo></Logo>
        <nav className="flex list-none gap-5">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-green-500" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-green-500" : ""
            }
          >
            Favorites
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-green-500" : ""
            }
          >
            Login
          </NavLink>

          {/* <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li> */}
        </nav>
      </div>
    </div>
  );
};

export default Header;
