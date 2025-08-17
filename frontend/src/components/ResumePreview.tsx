import { LuDot } from "react-icons/lu"

type WorkExperience = {
    jobTitle?: string
    company?: string
    description?: string
    startDate?: string
    endDate?: string
}

type Education = {
    degree?: string
    school?: string
    startDate?: string
    endDate?: string
}

type Skill = {
    skill: string
}

type PersonalInfo = {
    firstName?: string
    lastName?: string
    photo?: string
    jobTitle?: string
    city?: string
    country?: string
    phoneNumber?: string
    email?: string
}

type ResumeData = {
    personalInfo?: PersonalInfo
    workExperience?: WorkExperience[]
    education?: Education[]
    skills?: (Skill | string)[]
}

type ResumeProps = {
    resumeData: ResumeData
}

function ResumePreview({ resumeData }: ResumeProps) {
    if (!resumeData || !resumeData.personalInfo) {
        return <div>No resume data available</div>
    }

    const { firstName, lastName, photo, jobTitle, city, country, phoneNumber, email } =
        resumeData.personalInfo
    const workExperiences = resumeData.workExperience || []
    const education = resumeData.education || []
    const skills = resumeData.skills || []

    const hasWorkExperience = workExperiences.some(
        (exp: WorkExperience) =>
            exp.jobTitle?.trim() ||
            exp.company?.trim() ||
            exp.description?.trim() ||
            exp.startDate?.trim() ||
            exp.endDate?.trim()
    )

    const hasEducation = education.some(
        (edu: Education) =>
            edu.degree?.trim() ||
            edu.school?.trim() ||
            edu.startDate?.trim() ||
            edu.endDate?.trim()
    )

    const hasSkills = skills.some((sk: Skill | string) =>
        typeof sk === "string" ? sk.trim() : sk.skill?.trim()
    )

    return (
        <div className="bg-white h-screen border border-gray-300 rounded-md p-4">
            <div className="flex items-center gap-5">
                {photo && (
                    <div className="border rounded-md">
                        <img
                            className="h-18 w-18 object-cover text-sm"
                            src={photo}
                            alt={`${firstName} ${lastName}`}
                        />
                    </div>
                )}
                <div className="text-left">
                    <h1 className="font-bold text-black text-2xl">
                        {firstName} {lastName}
                    </h1>
                    <p className="text-black">{jobTitle}</p>
                    <div className="flex text-sm">
                        {(city || country) && (
                            <p className="text-gray-400">
                                {city}
                                {city && country ? ", " : ""}
                                {country}
                            </p>
                        )}
                        <div className="flex items-center gap-1 text-gray-400">
                            {phoneNumber && (
                                <span className="flex items-center">
                                    <LuDot />
                                    {phoneNumber}
                                </span>
                            )}
                            {phoneNumber && email && <LuDot />}
                            {email && <span>{email}</span>}
                        </div>
                    </div>
                </div>
            </div>

            {/* ✅ Work Experience */}
            {hasWorkExperience && (
                <div className="mt-6 border-t-2">
                    <h2 className="font-bold text-lg mt-3 text-left text-black">Work Experience</h2>
                    {workExperiences.map((exp, idx) => {
                        const isEmpty = !(
                            exp.jobTitle?.trim() ||
                            exp.company?.trim() ||
                            exp.description?.trim() ||
                            exp.startDate?.trim() ||
                            exp.endDate?.trim()
                        )
                        if (isEmpty) return null

                        return (
                            <div key={idx} className="mb-4 text-left">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-lg text-black">{exp.jobTitle}</h3>
                                    <p className="text-sm text-black">
                                        {exp.startDate
                                            ? `${exp.startDate} ${exp.endDate ? `- ${exp.endDate}` : "- Present"}`
                                            : exp.endDate || ""}
                                    </p>
                                </div>

                                <p className="text-sm text-black">{exp.company}</p>
                                {exp.description && <p className="text-sm">{exp.description}</p>}
                            </div>
                        )
                    })}
                </div>
            )}

            {/* ✅ Education */}
            {hasEducation && (
                <div className="mt-6 border-t-2">
                    <h2 className="font-bold text-lg mt-3 text-left text-black">Education</h2>
                    {education.map((edu, index) => {
                        const isEmpty = !(
                            edu.degree?.trim() ||
                            edu.school?.trim() ||
                            edu.startDate?.trim() ||
                            edu.endDate?.trim()
                        )
                        if (isEmpty) return null

                        return (
                            <div key={index} className="mb-4 text-left">
                                <h3 className="font-semibold text-lg text-black">{edu.degree}</h3>
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-sm text-black">{edu.school}</h3>
                                    <p className="text-sm text-black">
                                        {edu.startDate
                                            ? `${edu.startDate} ${edu.endDate ? `- ${edu.endDate}` : "- Present"}`
                                            : edu.endDate || ""}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}

            {/* ✅ Skills as Buttons */}
            {hasSkills && (
                <div className="mt-6 border-t-2">
                    <h2 className="font-bold text-lg mt-3 text-left text-black">Skills</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {skills.map((skill, idx) => {
                            const skillName = typeof skill === "string" ? skill : skill.skill
                            if (!skillName?.trim()) return null
                            return (
                                <button
                                    key={idx}
                                    className="px-3 py-1 bg-black text-white rounded-md text-sm "
                                >
                                    {skillName}
                                </button>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ResumePreview
