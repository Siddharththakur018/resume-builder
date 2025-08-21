import { useState } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";

type AiModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (text: string) => void;
  type: "summary" | "job";
};

function AiModal({ isOpen, onClose, onGenerate, type }: AiModalProps) {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  // Prompt generator based on modal type
  const getPrompt = (input: string) => {
    if (type === "job") {
      return `The user will describe a job role or experience. 
Return ONLY a concise list of 3–5 responsibilities or achievements, each on a new line, 
starting with a dash (-). 
Do not include any introduction or explanation, only the bullet points. 

User input:
${input}`;
    }

    if (type === "summary") {
      return `The user will provide career background. 
Return a concise, professional summary in 3–4 sentences suitable for the top of a resume. 
Keep it impactful and achievement-focused.

User input:
${input}`;
    }

    return input;
  };

  // API call
  const aiModal = async () => {
    if (!input.trim()) return;
    setLoading(true);

    try {
      const res = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [
            {
              parts: [{ text: getPrompt(input) }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": import.meta.env.VITE_GEMINI_API_KEY,
          },
        }
      );

      const aiText =
        res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

      onGenerate(aiText);
      onClose();
    } catch (err) {
      console.error(err);
      onGenerate("Error generating response.");
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-md w-96 p-4 shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-bold">
            {type === "job" ? "Generate your experience" : "Generate your summary"}
          </h1>
          <RxCross2 onClick={onClose} className="cursor-pointer text-gray-400" />
        </div>
        <p className="text-sm text-gray-400 mb-3">
          {type === "job"
            ? "Describe this work experience and AI will generate the optimized entry for you"
            : "Describe your career background and AI will generate a professional summary for you"}
        </p>
        <textarea
          placeholder={
            type === "job"
              ? 'Eg: "From Nov 2020 to Dec 2021, I worked at Google as a Senior Developer"'
              : 'Eg: "5 years of experience in software development, specializing in frontend and backend..."'
          }
          rows={3}
          className="w-full border border-gray-300 rounded-md p-2 mb-3 text-sm text-gray-600"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={aiModal}
          className="bg-black cursor-pointer text-white p-2 rounded-md w-full disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>
    </div>
  );
}

export default AiModal;
