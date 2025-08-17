

type EducationProps = {
  data: {
    degree: string,
    school: string,
    startDate: string,
    endDate: string
  }[];
  setData: (data: EducationProps['data']) => void;
}


function Education({data, setData}: EducationProps) {


  const handleChange = (index: number, field: string, value: string) => {
    const updatedEducation = [...data]
    updatedEducation[index] = { ...updatedEducation[index], [field]: value }
    setData(updatedEducation)
  }

  const addEducation = () => {
    setData([
      ...data,
      { degree: "", school: "", startDate: "", endDate: "" }
    ])
  }

  const removeEducation = (index: number) => {
    const updatedEducation = data.filter((_, i) => i !== index)
    setData(updatedEducation)

  }

  return (
    <>
      <div>
        <h2 className="text-center font-bold  text-xl">Education</h2>
        <h3 className='text-center text-gray-400'>Add as many education you want</h3>

        {
          data.map((edu, index) => {
            return (
              <>
                <div key={index} className="w-[500px] mx-auto mt-5">
                  <div className="border-1 border-gray-300 rounded-md p-4">
                    <h1 className="font-bold">Education {index + 1}</h1>

                    <div className="mt-5 max-w-md mx-auto space-y-3">
                      <label className="text-sm font-bold text-gray-500">Degree</label>
                      <input
                        type="text"
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) => handleChange(index, "degree", e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded outline-none"
                      />

                      <label className="text-sm font-bold text-gray-500">School/ College</label>
                      <input
                        type="text"
                        placeholder="School/ College"
                        value={edu.school}
                        onChange={(e) => handleChange(index, "school", e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded outline-none"
                      />

                      <div className="flex gap-2">
                        <div>
                          <label className="text-sm font-bold text-gray-500">Start date</label>
                          <input
                            type="date"
                            value={edu.startDate}
                            onChange={(e) => handleChange(index, "startDate", e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-bold text-gray-500">End date</label>
                          <input
                            type="date"
                            value={edu.endDate}
                            onChange={(e) => handleChange(index, "endDate", e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <button className="bg-red-500 text-white p-2 mt-4 rounded-md cursor-pointer" onClick={() => removeEducation(index)}>Remove</button>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
      <div className="flex justify-center items-center mt-5">
        <button
          onClick={addEducation}
          className="bg-black text-white p-2 rounded-md cursor-pointer"
        >
          Add education
        </button>
      </div>
    </>
  )
}

export default Education