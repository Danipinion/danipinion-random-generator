import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <nav class="bg-white/25 backdrop-blur-sm dark:bg-gray-800  shadow fixed w-full z-50">
        <div class="px-8 mx-auto max-w-7xl">
          <div class="flex items-center justify-between h-16">
            <div class="w-full justify-between flex items-center">
              <a class="flex-shrink-0" href="/">
                <img class="w-8 h-8" src={logo} alt="Workflow" />
              </a>
              <div class="hidden md:block">
                <div class="flex items-baseline ml-10 space-x-4">
                  <Link
                    to="/"
                    class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <div>
                    <button
                      type="button"
                      class="inline-flex w-full justify-center gap-x-1.5 rounded-md text-gray-300  px-3 py-2 text-sm font-semibold  shadow-sm "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={() => setDropdown(!dropdown)}
                    >
                      Tools
                    </button>
                  </div>
                  <Link
                    to="/result"
                    class="text-gray-300 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Result
                  </Link>
                </div>
                <div
                  class={
                    dropdown
                      ? "absolute right-0 z-10 mt-5 w-56 origin-top-right rounded-md backdrop-blur-sm bg-white/25 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none -translate-x-10 transition-all"
                      : "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-non scale-0 translate-x-10  transition-all"
                  }
                >
                  <div role="none">
                    <Link
                      to="/picker"
                      className="text-gray-300 block px-4 py-2 text-sm hover:bg-slate-50/10 border-b-2"
                      onClick={() => setDropdown(false)}
                    >
                      Picker Name / Order
                    </Link>
                    <Link
                      to="/teams"
                      className="text-gray-300 block px-4 py-2 text-sm hover:bg-slate-50/10"
                      onClick={() => setDropdown(false)}
                    >
                      Teams Generator
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="flex items-center ml-4 md:ml-6"></div>
            </div>
            <div class="flex -mr-2 md:hidden">
              <button
                class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                onClick={() => {
                  setOpen(!open);
                  setDropdown(false);
                }}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          class={
            open
              ? "md:hidden  transition-all  duration-200"
              : "md:hidden h-0 overflow-y-hidden transition-all"
          }
        >
          <div class="px-0 -mt-5 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <Link
              to="/"
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <div>
              <button
                type="button"
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md text-gray-300  px-3 py-2 text-sm font-semibold  shadow-sm "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setDropdown(!dropdown)}
              >
                Tools
              </button>
            </div>
            <div
              class={
                dropdown
                  ? " right-0 z-10 mt-10 w-full origin-top-right rounded-md scale-100 transition-all"
                  : "right-0 z-10 mt-2 w-full origin-top-right rounded-md scale-0  transition-all hidden"
              }
            >
              <div role="none">
                <Link
                  to="/picker"
                  className="text-gray-300 block px-4 py-2 text-sm hover:bg-slate-50/10 "
                  onClick={() => {
                    setDropdown(false);
                    setOpen(false);
                  }}
                >
                  Picker Name / Order
                </Link>
                <Link
                  to="/teams"
                  className="text-gray-300 block px-4 py-2 text-sm hover:bg-slate-50/10"
                  onClick={() => {
                    setDropdown(false);
                    setOpen(false);
                  }}
                >
                  Teams Generator
                </Link>
              </div>
            </div>
            <Link
              to="/result"
              class="text-gray-300 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Result
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
