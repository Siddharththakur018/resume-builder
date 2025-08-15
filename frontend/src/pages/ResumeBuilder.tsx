import logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";

function ResumeBuilder() {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-[1200px] mx-auto">
                <div className="flex justify-center items-center h-screen">
                    <div className="w-1/2">
                        <img className="h-52 w-52" src={logo} alt="logo-image" />
                        <p className="text-4xl font-bold">Create the <span className="text-[var(--home-buton-color)]">Perfect Resume</span> in</p>
                        <p className="text-4xl font-bold">Minutes</p>
                        <p className="text-lg text-gray-600 mt-6 ">
                            Effortlessly build a professional, job-winning resume—no design skills or writing expertise needed.
                            Our AI-powered Resume Builder guides you step by step, optimizes every section for impact, and helps you secure more interviews.
                        </p>
                        <p className="text-lg text-gray-600 mt-2 ">
                            Instantly choose from modern templates, tailor content for any job, and beat ATS filters with one-click enhancements.
                        </p>
                        <button onClick={() => navigate('/resume')} className="bg-[var(--home-buton-color)] text-white font-semibold px-8 py-3 mt-8 rounded-md shadow-md cursor-pointer">
                            Start Your Resume Now
                        </button>

                    </div>
                    <div className="w-1/2">

                    </div>

                </div>
            </div>
        </>
    )
}

export default ResumeBuilder