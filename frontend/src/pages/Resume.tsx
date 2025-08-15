
import { BsPlusSquareFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Resume() {
    const navigate = useNavigate();
    return (
        <>
            <div className='mx-auto w-[1200px] mt-10'>
                <div className='flex justify-center items-center '>
                    <div onClick={() => navigate('/resume-editor')} className='gap-2 w-48 cursor-pointer flex items-center justify-center bg-black text-white py-2 rounded'>
                        <BsPlusSquareFill />
                        <p>New Resume</p>
                    </div>

                </div>
                <div className=" text-3xl font-bold mt-4">
                    Your resumes
                </div>
                <p className='text-gray-700'>Total:</p>
            </div>
        </>
    )
}

export default Resume
