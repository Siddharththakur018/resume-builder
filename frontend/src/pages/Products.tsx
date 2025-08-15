import { BsStars } from "react-icons/bs";
import { FaApple, FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Products() {
    const navigate = useNavigate();
    return (
        <div className="max-w-[1200px] mx-auto mt-10">
            {/* Header */}
            <div className="flex flex-col items-center text-center">
                <h1 className="font-bold text-2xl flex items-center gap-1">
                    <span className="text-sm"><BsStars /></span>Products
                </h1>
                <h2 className="text-4xl font-bold">All the Tools you need to help</h2>
                <p className="max-w-2xl text-gray-500 mt-5">
                    Our suite of AI-powered career tools helps you stand out in today's competitive job market.
                    Build a professional resume, tailor it for each job, generate compelling cover letters,
                    and ensure you pass ATS scans — all in one place.
                </p>
            </div>

            {/* Products grid */}
            <div className="flex justify-center items-center min-h-screen">
                <div className="max-w-6xl grid grid-cols-2 gap-6 w-full">

                    {/* Card */}
                    <div className="flex flex-col h-96 shadow-xl rounded-t-2xl pt-4">
                        <div className="flex justify-between gap-4 h-52 relative">

                            {/* Apple Card */}
                            <div className="flex items-center w-1/2 shadow-md rounded-t-2xl p-4 flex-col">
                                <div className="flex items-center w-full">
                                    <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center">
                                        <FaApple className="text-xl" />
                                    </div>
                                    <div className="ml-4">
                                        <p>Product Designer</p>
                                        <p className="text-gray-400">Apple Inc.</p>
                                    </div>
                                </div>
                                <hr className="border-t-2 w-full mt-3 border-gray-300" />
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                            </div>

                            {/* Google Card */}
                            <div className="flex items-center w-1/2 shadow-md rounded-t-2xl p-4 flex-col">
                                <div className="flex items-center w-full">
                                    <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center">
                                        <FaGoogle className="text-xl" />
                                    </div>
                                    <div className="ml-4">
                                        <p>Software Engineer</p>
                                        <p className="text-gray-400">Google LLC</p>
                                    </div>
                                </div>
                                <hr className="border-t-2 w-full mt-3 border-gray-300" />
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                            </div>

                            <button
                            onClick={() => navigate('/resume-builder')}
                                className="absolute top-40 bg-[var(--home-buton-color)] text-white p-3 rounded-4xl cursor-pointer left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 "
                            >
                                <BsStars /> Start Building
                            </button>

                        </div>
                        <h1 className='text-xl p-2 '>Create Your AI-Powered Resume</h1>
                        <div className='text-lg p-2 text-gray-500'>
                            Instantly build a personalized, professional resume using advanced AI. Highlight your strengths and stand out to employers.
                        </div>
                    </div>

                    {/* Card */}
                    <div className="flex flex-col h-96 shadow-xl rounded-t-2xl pt-4">
                        <div className="flex justify-between gap-4 h-52">

                            {/* Apple Card */}
                            <div className="flex items-center w-1/2 shadow-md rounded-t-2xl p-4 flex-col">
                                <div className="flex items-center w-full">
                                    <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center">
                                        <FaApple className="text-xl" />
                                    </div>
                                    <div className="ml-4">
                                        <p>Product Designer</p>
                                        <p className="text-gray-400">Apple Inc.</p>
                                    </div>
                                </div>
                                <hr className="border-t-2 w-full mt-3 border-gray-300" />
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                            </div>

                            {/* Google Card */}
                            <div className="flex items-center w-1/2 shadow-md rounded-t-2xl p-4 flex-col">
                                <div className="flex items-center w-full">
                                    <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center">
                                        <FaGoogle className="text-xl" />
                                    </div>
                                    <div className="ml-4">
                                        <p>Software Engineer</p>
                                        <p className="text-gray-400">Google LLC</p>
                                    </div>
                                </div>
                                <hr className="border-t-2 w-full mt-3 border-gray-300" />
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                            </div>


                        </div>
                    </div>

                    {/* Card */}
                    <div className="flex flex-col h-96 shadow-xl rounded-t-2xl pt-4">
                        <div className="flex justify-between gap-4 h-52">

                            {/* Apple Card */}
                            <div className="flex items-center w-1/2 shadow-md rounded-t-2xl p-4 flex-col">
                                <div className="flex items-center w-full">
                                    <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center">
                                        <FaApple className="text-xl" />
                                    </div>
                                    <div className="ml-4">
                                        <p>Product Designer</p>
                                        <p className="text-gray-400">Apple Inc.</p>
                                    </div>
                                </div>
                                <hr className="border-t-2 w-full mt-3 border-gray-300" />
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                            </div>

                            {/* Google Card */}
                            <div className="flex items-center w-1/2 shadow-md rounded-t-2xl p-4 flex-col">
                                <div className="flex items-center w-full">
                                    <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center">
                                        <FaGoogle className="text-xl" />
                                    </div>
                                    <div className="ml-4">
                                        <p>Software Engineer</p>
                                        <p className="text-gray-400">Google LLC</p>
                                    </div>
                                </div>
                                <hr className="border-t-2 w-full mt-3 border-gray-300" />
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                            </div>

                        </div>
                    </div>

                    {/* Card */}
                    <div className="flex flex-col h-96 shadow-xl rounded-t-2xl pt-4">
                        <div className="flex justify-between gap-4 h-52">

                            {/* Apple Card */}
                            <div className="flex items-center w-1/2 shadow-md rounded-t-2xl p-4 flex-col">
                                <div className="flex items-center w-full">
                                    <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center">
                                        <FaApple className="text-xl" />
                                    </div>
                                    <div className="ml-4">
                                        <p>Product Designer</p>
                                        <p className="text-gray-400">Apple Inc.</p>
                                    </div>
                                </div>
                                <hr className="border-t-2 w-full mt-3 border-gray-300" />
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                            </div>

                            {/* Google Card */}
                            <div className="flex items-center w-1/2 shadow-md rounded-t-2xl p-4 flex-col">
                                <div className="flex items-center w-full">
                                    <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center">
                                        <FaGoogle className="text-xl" />
                                    </div>
                                    <div className="ml-4">
                                        <p>Software Engineer</p>
                                        <p className="text-gray-400">Google LLC</p>
                                    </div>
                                </div>
                                <hr className="border-t-2 w-full mt-3 border-gray-300" />
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                                <div className="h-6 w-56 mt-4 rounded-md shimmer"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
