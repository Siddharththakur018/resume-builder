import { useState } from "react"
import { FaWandMagicSparkles } from "react-icons/fa6";

function Summary() {
  const [professioanalSummary, setProfessionalSummary] = useState<string>('')
  return (
    <>
      <div>
        <div>
          <h2 className="text-center font-bold text-xl">Professional Summary</h2>
          <h3 className='text-center text-gray-400'>Wite a short introduction for your resume or let the AI generate one from your entered data</h3>

          <div>
            <label>Professional Summary</label>
            <textarea
              className="border rounded-md w-full mt-5 p-2"
              rows={2}
              value={professioanalSummary}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setProfessionalSummary(e.target.value)
              }
            />
          </div>
          <button className="flex items-center justify-center p-2 border rounded-md border-gray-300 mt-4 cursor-pointer gap-2 font-bold text-gray-600"><FaWandMagicSparkles /> Generate (AI)</button>
        </div>
      </div>
    </>
  )
}

export default Summary