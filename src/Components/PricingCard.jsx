import { useState } from "react";

function PricingCard() {

    const [activeButton, setActiveButton] = useState('monthly');

    const handleButtonClick = (buttonType ,type) => {
        setActiveButton(buttonType , type);
    };





    const amount = activeButton === 'monthly' ? '€0' : '€0';
    const timePeriod = activeButton === 'monthly' ? '/month' : '/year';

    const amount2 = activeButton === 'monthly' ? '€8' : '€90';
    const timePeriod2 = activeButton === 'monthly' ? '/month' : '/year';
    
    return (
        <div className="w-full md:w-[1000px] mt-20 pb-20">
            <div className="flex justify-end w-full">
                <div className="bg-[#fff] rounded-full space-x-2">
                    <button
                        onClick={() => handleButtonClick('monthly')}
                        className={`px-4 py-3 rounded-full font-[600] w-32 text-white transition duration-300 ${activeButton === 'monthly' ? 'bg-[#BB6BD9]' : 'bg-[#fff] text-[#3B3472]'
                            }`}
                    >
                        MONTHLY
                    </button>
                    <button
                        onClick={() => handleButtonClick('yearly')}
                        className={`px-4 py-3 rounded-full font-[600] w-32 text-[#3B3472] transition duration-300 ${activeButton === 'yearly' ? 'bg-[#BB6BD9] text-[#fff]' : 'bg-[#fff] text-[#3B3472]'
                            }`}
                    >
                        YEARLY
                    </button>
                </div>
            </div>


            <div className="flex justify-center">
                <div className="bg-white bg-opacity-40 backdrop-blur-lg rounded-[26px] px-2 relative mt-20 py-4 w-full md:w-[1000px]">
                    <div className="grid grid-cols-8">
                        <div className=" col-span-8  md:col-span-4 md:h-[950px]">
                            <div className="flex flex-col p-6 mx-auto max-w-[450px]  text-gray-900 bg-transparent rounded-[26px]  ">
                                <div className="flex justify-start items-baseline my-8 text-[#231D4F]">
                                    <span className=" text-5xl font-extrabold mr-2">{amount}</span>
                                    <span className="text-[#848199] text-lg font-[500]">{timePeriod}</span>
                                </div>

                                <h3 className="mb-4 text-[#231D4F] text-2xl font-semibold">Freemium</h3>



                                <p className="font-light text-gray-500 mb-4  sm:text-lg dark:text-gray-400">
                                    Best option for personal use &amp; for your next project.
                                </p>

                                {/* List */}
                                <ul role="list" className="mb-8 space-y-4 text-left font-[500] text-[#848199]">
                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-[#BB6BD9] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#BB6BD9] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#BB6BD9] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#BB6BD9] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#BB6BD9] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#BB6BD9] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#BB6BD9] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#BB6BD9] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#BB6BD9] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                <a
                                    href="#"
                                    className="text-[#fff] bg-[#979797]  rounded-full hover:bg-[#BB6BD9] hover:text-[#fff]  duration-200 ease-in-out font-medium  text-lg  px-5 py-2.5 text-center "
                                >
                                    Choose Plan
                                </a>
                            </div>

                        </div>

                        <div className="col-span-8  md:col-span-4 md:absolute right-10 -top-10 h-[950px]">
                            <div className="flex flex-col p-6 mx-auto max-w-[450px] text-gray-900 bg-[#231D4F] rounded-[26px]  ">
                                <div className="flex justify-start items-baseline my-8 text-[#fff]">
                                    <span className=" text-5xl font-extrabold mr-2">{amount2}</span>
                                    <span className="text-[#fff] text-lg font-[500]">{timePeriod2}</span>
                                </div>

                                <h3 className="mb-4 text-[#fff] text-2xl font-semibold">Premium</h3>



                                <p className="font-light text-[#fff] mb-4  sm:text-lg ">
                                    Best option for personal use &amp; for your next project.
                                </p>

                                {/* List */}
                                <ul role="list" className="mb-8 space-y-4 text-[#fff] font-[500] text-left">
                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                            className="flex-shrink-0 w-5 h-5 text-[#fff] bg-[#5243C2] bg-opacity-30 rounded-full"
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
                                <a
                                    href="#"
                                    className="text-white bg-[#BB6BD9] rounded-full hover:bg-[#979797]  duration-200 ease-in-out font-medium  text-lg  px-5 py-2.5 text-center "
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
