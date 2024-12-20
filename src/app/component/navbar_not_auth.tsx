"use client";
import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Navbar_not_auth: React.FC = () => {
  return (
    <nav className="bg-[#CDB278] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex-auto p-4">
        <ul className="flex flex-row items-center justify-between font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#CDB278] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#CDB278] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="#"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              aria-current="page"
            >
              <img
                src="/pijarLogo2.png"
                alt="Pijar Logo"
                className="h-8 w-auto"
              />
            </a>
          </li>
          <div className="relative inline-flex">
            <Menu as="div" className="relative inline-block pr-3">
              <MenuButton className="inline-flex w-full justify-center  gap-x-1.5 rounded-md bg-white px-3 py-2.5  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Kategori
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div>
                  <MenuItem>
                    <Menu
                      as="div"
                      className="relative inline-block text-left w-full"
                    >
                      <MenuButton className="inline-flex w-full justify-between px-3 py-1 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-100 my-1">
                        <span>Grafik Desain</span>
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-400"
                        />
                      </MenuButton>
                      <MenuItems
                        transition
                        className="absolute left-full top-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt1
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt1
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt2
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt3
                          </a>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </MenuItem>
                  <MenuItem>
                    <Menu
                      as="div"
                      className="relative inline-block text-left w-full"
                    >
                      <MenuButton className="inline-flex w-full justify-between px-3 py-1 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-100 my-1">
                        <span>Grafik Desain</span>
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="h- w-5 text-gray-400"
                        />
                      </MenuButton>
                      <MenuItems
                        transition
                        className="absolute left-full top-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt1
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt2
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt3
                          </a>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </MenuItem>
                  <MenuItem>
                    <Menu
                      as="div"
                      className="relative inline-block text-left w-full"
                    >
                      <MenuButton className="inline-flex w-full justify-between px-3 py-1 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-100 my-1">
                        <span>Grafik Desain</span>
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-400"
                        />
                      </MenuButton>
                      <MenuItems
                        transition
                        className="absolute left-full top-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt1
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt2
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt3
                          </a>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <li>
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative shrink w-80">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth=""
                        d="M19 19l-4-4m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Cari kelas, mentor, dan topik keahlian"
                    required
                    onChange={(e) => {
                      const searchValue = e.target.value.toLowerCase();
                      const suggestionBox = e.target
                        .nextElementSibling as HTMLElement;

                      if (suggestionBox) {
                        const listItems =
                          suggestionBox.getElementsByTagName("li");

                        if (searchValue.length > 0) {
                          suggestionBox.style.display = "block";
                          let hasResults = false;

                          Array.from(listItems).forEach((item) => {
                            const text = item.textContent?.toLowerCase() || "";
                            if (text.includes(searchValue)) {
                              item.style.display = "block";
                              hasResults = true;
                            } else {
                              item.style.display = "none";
                            }
                          });

                          // Show no results message if nothing matches
                          const noResults =
                            suggestionBox.querySelector(".no-results");
                          if (!hasResults) {
                            if (!noResults) {
                              const message = document.createElement("li");
                              message.className =
                                "no-results px-4 py-2 text-gray-500";
                              message.textContent = "No results found";
                              suggestionBox
                                .querySelector("ul")
                                ?.appendChild(message);
                            }
                          } else if (noResults) {
                            noResults.remove();
                          }
                        } else {
                          suggestionBox.style.display = "none";
                        }
                      }
                    }}
                  />
                  <div
                    className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
                    style={{ display: "none" }}
                  >
                    <ul className="py-2">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Belajar UI/UX Design
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Adobe Photoshop Basic
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Web Development
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Digital Marketing
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  type="submit"
                  className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 19l-4-4m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </li>
          </div>
          <div className="flex">
            <li>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-sky-700 rounded-lg hover:bg-blue-700 focus:outline-none mr-5 focus:ring-2 focus:ring-blue-500"
                onClick={() => (window.location.href = "/signin")}
              >
                Sign In
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => (window.location.href = "/signup")}
              >
                Sign Up
              </button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar_not_auth;
