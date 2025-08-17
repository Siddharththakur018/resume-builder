import { useState, useEffect } from "react"

type SkillsProps = {
  data: string[];
  setData: (data: string[]) => void;
}

function Skills({ data, setData }: SkillsProps) {
  const [input, setInput] = useState("")

  // Keep input in sync with parent `data`
  useEffect(() => {
    setInput(data.join(", "))
  }, [data])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInput(value)

    const separatedSkills = value
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill.length > 0)

    setData(separatedSkills)
  }

  return (
    <div>
      <h2 className="text-center font-bold text-xl">Skills</h2>
      <h3 className="text-center text-gray-400">What are you good at?</h3>

      <div>
        <textarea
          className="border rounded-md w-full mt-5 p-2"
          rows={3}
          value={input}
          onChange={handleChange}
        />
        <p className="text-sm font-bold text-gray-400">
          Separate each skill with comma
        </p>
      </div>
    </div>
  )
}

export default Skills
