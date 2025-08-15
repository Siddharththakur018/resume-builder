import React, { useState } from "react";
import { IoIosHelpCircleOutline, IoIosArrowForward } from "react-icons/io";
import GeneralInfo from "../components/GeneralInfo";
import PersonalInfo from "../components/PersonalInfo";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Summary from "../components/Summary";

// -----------------
// Type Definitions
// -----------------
type GeneralInfoType = {
  name?: string;
  email?: string;
  phone?: string;
};

type PersonalInfoType = {
  address?: string;
  linkedin?: string;
  github?: string;
};

type WorkExperienceType = {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
};

type EducationType = {
  school: string;
  degree: string;
  startDate: string;
  endDate?: string;
};

type ResumeData = {
  generalInfo: GeneralInfoType;
  personalInfo: PersonalInfoType;
  workExperience: WorkExperienceType[];
  education: EducationType[];
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

  const steps = [
    { name: "General Info", component: GeneralInfo },
    { name: "Personal Info", component: PersonalInfo },
    { name: "Work Experience", component: WorkExperience },
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

  const renderStepContent = () => {
  const ActiveComponent = steps[activeStep].component as React.FC<StepProps<any>>;
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

  return (
    <div className="w-[1200px] mx-auto">
      <h2 className="font-bold text-center text-xl mt-10">
        Design your resume
      </h2>
      <h3 className="text-gray-500 text-center">
        Follow the steps below to create your resume. Your progress will be
        saved automatically.
      </h3>

      <div className="border-2 mt-10 h-screen">
        <div className="flex h-full">
          {/* Left Side - Navigation */}
          <div className="w-1/2 border-r">
            {/* Breadcrumb Navigation */}
            <div className="p-4 border-b">
              <div className="flex items-center text-sm whitespace-nowrap overflow-x-auto">
                {steps.map((step, index) => (
                  <React.Fragment key={index}>
                    <button
                      onClick={() => setActiveStep(index)}
                      className={`${
                        index === activeStep
                          ? "text-black font-medium"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      {step.name}
                    </button>
                    {index < steps.length - 1 && (
                      <IoIosArrowForward className="w-4 h-4 text-gray-500 mx-2" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div>{renderStepContent()}</div>
          </div>

          {/* Right Side - Help and Preview */}
          <div className="w-1/2 relative">
            <div className="absolute top-4 right-4">
              <IoIosHelpCircleOutline className="w-5 h-5 text-gray-400" />
            </div>

            <div className="p-8 pt-16">
              <div className="text-center text-gray-400">
                Resume preview will appear here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeEditor;
