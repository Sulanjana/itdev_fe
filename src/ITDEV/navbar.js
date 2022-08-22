import React from "react";

const Navbar=()=>{
    return(
        <>
        <nav className="bg-sky-600 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <div className="hidden m-auto w-full md:block md:w-auto" id="navbar-default">
                <div className="p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <div className="text-lg block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Bantuan Sosial</div>
                </div>
            </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar