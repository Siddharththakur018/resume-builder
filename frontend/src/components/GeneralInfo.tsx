import  { useState } from 'react'

function GeneralInfo() {
    const [projectName, setProjectName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
  return (
    <>
        <div>
            <h2 className='text-center font-bold  text-xl'>General Info</h2>
            <p className='text-center text-gray-400'>This will not appear in your resume</p>

            <div className='p-4'>
                <div className='mt-5'>
                    <label>Project Name</label>
                    <input 
                    type="text" 
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder='Enter project name'
                    className='border mt-2 border-gray-300 rounded-md px-3 py-2 w-full outline-none focus:ring-0' 
                    />
                </div>
                <div className='mt-5'>
                     <label>Description </label>
                    <input 
                    type="text" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Enter description'
                    className='border mt-2 border-gray-300 rounded-md px-3 py-2 w-full outline-none focus:ring-0' 
                    />
                </div>
                <p className='text-gray-400 mt-5'>Describe what this resume is for</p>
            </div>
        </div>
    </>
  )
}

export default GeneralInfo