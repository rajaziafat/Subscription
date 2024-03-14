import { useState } from "react";

function PricingCard() {

    const [activeButton, setActiveButton] = useState('monthly');

    const handleButtonClick = (buttonType, type) => {
        setActiveButton(buttonType, type);
    };





    const amount = activeButton === 'monthly' ? '€0' : '€0';
    const timePeriod = activeButton === 'monthly' ? '/month' : '/year';

    const amount2 = activeButton === 'monthly' ? '€8' : '€90';
    const timePeriod2 = activeButton === 'monthly' ? '/month' : '/year';

    return (
        <div className="w-full  mt-20 pb-20 ">
            <div className="flex justify-center">
                <div className="flex justify-center  w-full md:w-[800px] ">
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-full space-x-2">
                        <button
                            onClick={() => handleButtonClick('monthly')}
                            className={`px-4 py-3 rounded-full font-[600] w-32 text-[#22c55e] transition duration-300 ${activeButton === 'monthly' ? 'bg-[#22c55e] text-white' : 'bg-transparent text-[#22c55e]'
                                }`}
                        >
                            MONTHLY
                        </button>
                        <button
                            onClick={() => handleButtonClick('yearly')}
                            className={`px-4 py-3 rounded-full font-[600] w-32 text-[#22c55e] transition duration-300 ${activeButton === 'yearly' ? 'bg-[#22c55e] text-[#fff]' : 'bg-transparent text-[#22c55e]'
                                }`}
                        >
                            YEARLY
                        </button>
                    </div>
                </div>
            </div>


            <div className="flex justify-center">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-[26px] px-2 md:relative mt-5 md:mt-20 py-4 w-full lg:w-[900px]">
                    <div className="grid grid-cols-8 gap-2">
                        <div className=" col-span-8  md:col-span-4 md:h-[980px]">
                            <div className="flex flex-col p-6 mx-auto max-w-sm  text-gray-900 bg-transparent border md:border-none border-[#22c55e] rounded-[26px]  ">
                                <div className="flex justify-start items-baseline my-8 text-[#22c55e]">
                                    <span className=" text-5xl font-extrabold mr-2">{amount}</span>
                                    <span className="text-[#fff] text-lg font-[500]">{timePeriod}</span>
                                </div>

                                <h3 className="mb-4 text-[#fff] text-[28px] font-medium">Freemium</h3>



                                <p className="font-light text-gray-500 mb-4  sm:text-lg dark:text-gray-400">
                                    Best option for personal use &amp; for your next project.
                                </p>

                                {/* List */}
                                <ul role="list" className="mb-8 space-y-4 text-left font-[500] text-[#848199]">
                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-[#22c55e] bg-[#fff] bg-opacity-30 rounded-full"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>Bis zu 10 Bilder</span>
                                    </li>

                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-[#22c55e] bg-[#fff] bg-opacity-30 rounded-full"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>1 Banner</span>
                                    </li>

                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-[#22c55e] bg-[#fff] bg-opacity-30 rounded-full"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span> 1 Video</span>
                                    </li>

                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-[#22c55e] bg-[#fff] bg-opacity-30 rounded-full"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>  1 Zeitleisten-Eintrag für die Zukunftsplanung</span>
                                    </li>

                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-[#22c55e] bg-[#fff] bg-opacity-30 rounded-full"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>  1 Event</span>
                                    </li>

                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-[#22c55e] bg-[#fff] bg-opacity-30 rounded-full"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>  1 Job</span>
                                    </li>

                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-[#22c55e] bg-[#fff] bg-opacity-30 rounded-full"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>   1 Projekt</span>
                                    </li>

                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-[#22c55e] bg-[#fff] bg-opacity-30 rounded-full"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>   1 Location</span>
                                    </li>

                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-[#22c55e] bg-[#fff] bg-opacity-30 rounded-full"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>  Bis zu 5 Produkten</span>
                                    </li>

                                </ul>

                                <a href="#" className="text-[#fff] w-full bg-[#22c55e] max-w-xs md:absolute bottom-10  rounded-full hover:bg-[#fff] hover:bg-opacity-30 hover:text-[#fff] duration-200 ease-in-out font-medium text-lg px-5 py-2.5 text-center">
                                    Choose Plan
                                </a>

                            </div>


                        </div>

                        <div className="col-span-8  md:col-span-4 md:absolute right-10 -top-10 md:h-[950px]">
                            <div className="flex flex-col p-6 mx-auto max-w-sm text-gray-900 bg-[#22c55e] md:border-none border-[#333] rounded-[26px]  ">
                                <div className="mt-14 w-full">
                                    <div className="flex justify-start items-baseline my-8 text-[#333]">
                                        <span className=" text-5xl font-extrabold mr-2">{amount2}</span>
                                        <span className="text-[#fff] text-lg font-[500]">{timePeriod2}</span>
                                    </div>

                                    <h3 className="mb-4 text-[#fff] text-[28px] font-medium">Premium</h3>



                                    <p className="font-light text-[#fff] mb-4  sm:text-lg ">
                                        Best option for personal use &amp; for your next project.
                                    </p>

                                    {/* List */}
                                    <ul role="list" className="mb-8 space-y-4 text-[#fff] font-[500] text-left">
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>Bis zu 500 Bilder </span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>Bis zu 50 Gallerien</span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span> Bis zu 10 Banner</span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span> Bis zu 10 Videos</span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>  100 Zeitleisten-Einträge für die Zukunftsplanung</span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>  Bis zu 50 Events</span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>  Bis zu 50 Jobs</span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>  Bis zu 50 Projekte</span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>  Bis zu 50 Locations</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span> Bis zu 100 Produkten</span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span> Suche in die Zukunft & Radar Suche</span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span> Unzählige Premium Features</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>Spezielle Premium Einstellungen</span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>Privatsphäre Einstellungen</span>
                                        </li>


                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>Vimeo Integration</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#333] bg-opacity-30 rounded-full"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>Werbefrei</span>
                                        </li>

                                    </ul>

                                </div>
                                <a
                                    href="#"
                                    className="text-white bg-[#333]  w-full rounded-full hover:bg-[#fff]  hover:bg-opacity-30 duration-200 ease-in-out font-medium  text-lg  px-5 py-2.5 text-center "
                                >
                                    Choose Plan
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingCard
