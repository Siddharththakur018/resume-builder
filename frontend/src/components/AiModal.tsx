import { RxCross2 } from "react-icons/rx";

type AiModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function AiModal({ isOpen, onClose }: AiModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-black/50 z-50">
      <div className="bg-white rounded-md w-96 p-4 shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-bold">Generate your experience</h1>
          <RxCross2 onClick={onClose} className="cursor-pointer text-gray-400" />
        </div>
        <p className="text-sm text-gray-400 mb-3">
          Describe this work experience and AI will generate the optimized entry for you
        </p>
        <textarea
            placeholder='Eg: " from nov 2020 to dec 2021. I worked at google as a senior developer "'
          rows={3}
          className="w-full border border-gray-300 rounded-md p-2 mb-3 text-sm text-gray-600"
        />
        <button className="bg-black text-white p-2 rounded-md">
          Generate
        </button>
      </div>
    </div>
  );
}


export default AiModal