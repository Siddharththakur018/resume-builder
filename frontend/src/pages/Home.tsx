import { FaRegStar } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className='bg-[var(--home-bg-color)] h-screen'>
        <div className='w-[1200px] mx-auto'>
          <div>

            <div className='flex items-center justify-center text-7xl font-semibold'>
              Beat the Bots. Land the Job.
            </div>

            <div className='flex justify-center items-center flex-col mt-5'>
              <p className='text-xl'>
                Get a resume that passes ATS
              </p>
              <p className='text-xl'>
                and impresses recruiters — in minutes.
              </p>
            </div>

            <div className='flex justify-between w-80 mx-auto mt-5'>
              <button className='p-2  border-1 rounded-md cursor-pointer font-bold border-blue-800'>Request Demo</button>
              <button className='bg-blue-800 p-4 cursor-pointer rounded-md text-white font-bold'>Start Tracking Now</button>
            </div>

            <div className='flex justify-center mt-10 items-center gap-2'>
              <FaRegStar />
              <p>Used by <span className='font-bold'>Linkedln</span> 1,00,000 job seekers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

