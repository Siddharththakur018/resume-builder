import React, { useState } from "react";
import { IoIosHelpCircleOutline, IoIosArrowForward } from "react-icons/io";
import GeneralInfo from "../components/GeneralInfo";
import PersonalInfo from "../components/PersonalInfo";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Summary from "../components/Summary";
import ResumePreview from "../components/ResumePreview";

// -----------------
// Type Definitions
// -----------------
type ResumeData = {
  generalInfo: Record<string, any>;
  personalInfo: Record<string, any>;
  workExperience: any[];
  education: any[];
  skills: string[];
  summary: string;
};

type StepProps<T> = {
  data: T;
  setData: (data: T) => void;
};

// -----------------
// Component
// -----------------
function ResumeEditor() {
  const [activeStep, setActiveStep] = useState(0);
  const [resumeData, setResumeData] = useState<ResumeData>({
    generalInfo: {},
    personalInfo: {},
    workExperience: [],
    education: [],
    skills: [],
    summary: "",
  });

  // Steps array holds component references only (not JSX)
  const steps = [
    { name: "General info", component: GeneralInfo },
    { name: "Personal info", component: PersonalInfo },
    { name: "Work experience", component: WorkExperience },
    { name: "Education", component: Education },
    { name: "Skills", component: Skills },
    { name: "Summary", component: Summary },
  ];

  const stepKeyMap = [
    "generalInfo",
    "personalInfo",
    "workExperience",
    "education",
    "skills",
    "summary",
  ] as const;

  // Render the component for the current step and pass data/setData props dynamically
  const renderStepContent = () => {
    const ActiveComponent =
      steps[activeStep].component as React.FC<StepProps<any>>;
    const currentKey = stepKeyMap[activeStep];

    return (
      <ActiveComponent
        data={resumeData[currentKey]}
        setData={(newData: any) =>
          setResumeData((prev) => ({
            ...prev,
            [currentKey]: newData,
          }))
        }
      />
    );
  };

  const prevStep = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const nextStep = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Main Container */}
      <div className="mt-10 mb-4 h-[calc(100vh-200px)] border rounded-lg shadow-sm overflow-hidden">
        <div className="flex h-full">
          {/* Left Side - Form Section */}
          <div className="w-1/2 flex flex-col border-r">
            {/* Breadcrumbs */}
            <div className="p-4 bg-white">
              <div className="flex items-center text-sm whitespace-nowrap overflow-x-auto">
                {steps.map((step, index) => (
                  <React.Fragment key={index}>
                    <button
                      onClick={() => setActiveStep(index)}
                      className={`${
                        index === activeStep
                          ? "text-black font-medium cursor-pointer"
                          : "text-gray-400 hover:text-gray-600 cursor-pointer"
                      }`}
                    >
                      {step.name}
                    </button>
                    {index < steps.length - 1 && (
                      <IoIosArrowForward className="w-4 h-4 text-gray-400 mx-2" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 bg-white">
              {renderStepContent()}
            </div>
          </div>

          {/* Right Side - Resume Preview */}
          <div className="w-1/2 flex flex-col relative">
            {/* Help icon */}
            <div className="absolute top-4 right-4">
              <IoIosHelpCircleOutline className="w-5 h-5 text-gray-400" />
            </div>

            {/* Preview */}
            <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
              <div className="text-center text-gray-400">
                <ResumePreview resumeData={resumeData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around ">
        <div className="w-52 flex justify-around">
          <button
            onClick={prevStep}
            className={`text-lg p-2 w-20 rounded-md ${
              activeStep === 0
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-black text-white cursor-pointer"
            }`}
          >
            Prev
          </button>
          <button
            onClick={nextStep}
            className={`text-lg p-2 w-20 rounded-md ${
              activeStep === steps.length - 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-black text-white cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
        <div>
          <button className="text-lg">Close</button>
        </div>
      </div>
    </div>
  );
}

export default ResumeEditor;
