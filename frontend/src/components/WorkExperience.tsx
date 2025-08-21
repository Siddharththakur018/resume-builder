import  { useState } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import AiModal from "./AiModal";

type WorkExperienceProps = {
  data: {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  setData: (data: WorkExperienceProps['data']) => void;
};

function WorkExperience({ data, setData }: WorkExperienceProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleChange = (index: number, field: string, value: string) => {
    const updatedExperiences = [...data];
    updatedExperiences[index] = { ...updatedExperiences[index], [field]: value };
    setData(updatedExperiences);
  };

  const addExperience = () => {
    setData([
      ...data,
      { jobTitle: "", company: "", startDate: "", endDate: "", description: "" },
    ]);
  };

  const removeExperience = (index: number) => {
    const updatedExperiences = data.filter((_, i) => i !== index);
    setData(updatedExperiences);
  };

  return (
    <>
      <div>
        <h2 className="text-center font-bold  text-xl">Work Experience</h2>
        <h3 className="text-center text-gray-400">Add as many work experiences as you like</h3>
        <AiModal type="summary" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}   onGenerate={(text) => {
            if (activeIndex !== null) {
              handleChange(activeIndex, "description", text);
            }
          }} />
        {data.map((experience, index) => (
          <div key={index} className="w-[500px] mx-auto mt-5">
            <div className="border-1 border-gray-300 rounded-md p-4">
              <h1 className="font-bold">Work Experience {index + 1}</h1>

              <div className="flex justify-center items-center mt-4">
                <button
                  onClick={() => {
                    setIsModalOpen(true) 
                    setActiveIndex(index)
                  }}
                  
                  className="flex items-center gap-1 border border-gray-300 p-2 cursor-pointer rounded-md"
                >
                  <FaWandMagicSparkles /> Smart Fill (Ai)
                </button>
              </div>

              <div className="mt-5 max-w-md mx-auto space-y-3">
                <label className="text-sm font-bold text-gray-500">Job Title</label>
                <input
                  type="text"
                  placeholder="Job Title"
                  value={experience.jobTitle}
                  onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded outline-none"
                />

                <label className="text-sm font-bold text-gray-500">Company</label>
                <input
                  type="text"
                  placeholder="Company"
                  value={experience.company}
                  onChange={(e) => handleChange(index, "company", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded outline-none"
                />

                <div className="flex gap-2">
                  <div>
                    <label className="text-sm font-bold text-gray-500">Start date</label>
                    <input
                      type="date"
                      value={experience.startDate}
                      onChange={(e) => handleChange(index, "startDate", e.target.value)}
                      className="w-full border border-gray-300 p-2 rounded outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-500">End date</label>
                    <input
                      type="date"
                      value={experience.endDate}
                      onChange={(e) => handleChange(index, "endDate", e.target.value)}
                      className="w-full border border-gray-300 p-2 rounded outline-none"
                    />
                  </div>
                </div>

                <p className="text-sm font-bold text-gray-400">
                  Leave end date empty if you are currently working there
                </p>
                <label className="text-sm font-bold text-gray-500">Description</label>
                <textarea
                  value={experience.description}
                  onChange={(e) => handleChange(index, "description", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded outline-none"
                />
              </div>

              <button
                className="bg-red-500 text-white p-2 mt-4 rounded-md cursor-pointer"
                onClick={() => removeExperience(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-5">
        <button
          onClick={addExperience}
          className="bg-black text-white p-2 rounded-md cursor-pointer"
        >
          Add work experience
        </button>
      </div>
    </>
  );
}

export default WorkExperience;
