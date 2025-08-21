import { useState } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import AiModal from "./AiModal"; // <-- reuse same modal

type ProfessionalSummaryProps = {
  data: string;
  setData: (data: string) => void;
};

function Summary({ data, setData }: ProfessionalSummaryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <h2 className="text-center font-bold text-xl">Professional Summary</h2>
        <h3 className="text-center text-gray-400">
          Write a short introduction for your resume or let the AI generate one from your entered data
        </h3>

        <div>
          <label>Professional Summary</label>
          <textarea
            className="border rounded-md w-full mt-5 p-2"
            rows={2}
            value={data}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setData(e.target.value)
            }
          />
        </div>

        {/* Button to open AI modal */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center p-2 border rounded-md border-gray-300 mt-4 cursor-pointer gap-2 font-bold text-gray-600"
        >
          <FaWandMagicSparkles /> Generate (AI)
        </button>

        {/* AI Modal */}
        <AiModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onGenerate={(generated) => {
            setData(generated);
            setIsOpen(false);
          }}
          type="summary"
        />
      </div>
    </div>
  );
}

export default Summary;
