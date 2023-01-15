import { Link, NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCartContext();
  return (
    <div className="shadow-sm mb-3">
      <nav className="containerbg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between">
          <ul className="flex border border-gray-100 rounded-lg bg-gray-50 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 dark:text-white p-3"
                    : "block text-gray-700 rounded hover:bg-gray-100 p-3"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="store"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 dark:text-white p-3"
                    : "block text-gray-700 rounded hover:bg-gray-100 p-3"
                }
              >
                Store
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 dark:text-white p-3"
                    : "block text-gray-700 rounded hover:bg-gray-100 p-3"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
          {cartQuantity > 0 && (
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              aria-controls="navbar-default"
              className="relative md:hidden text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={openCart}
              data-drawer-target="drawer-right-example"
              data-drawer-show="drawer-right-example"
              data-drawer-placement="right"
              aria-controls="drawer-right-example"
            >
              <BsFillCartFill />
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                {cartQuantity}
              </div>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}
