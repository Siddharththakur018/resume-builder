import  { useState } from 'react'

function GeneralInfo() {
    const [projectName, setProjectName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
  return (
    <>
        <div>
            <h2>General Info</h2>
            <p>This will not appear in your resume</p>

            <div>
                <div>
                    <label>Project Name</label>
                    <input 
                    type="text" 
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder='Enter project name'
                    className='border border-gray-300 rounded-md px-3 py-2 w-full' 
                    />
                </div>
                <div>
                     <label>Description </label>
                    <input 
                    type="text" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Enter description'
                    className='border border-gray-300 rounded-md px-3 py-2 w-full' 
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default GeneralInfo