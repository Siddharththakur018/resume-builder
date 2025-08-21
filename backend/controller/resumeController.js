const Resume = require('../model/resumeModel')

const createResume = async (req, res) => {
    try {
        const {
            projectName,
            projectDescription,
            firstName,
            lastName,
            jobTitle,
            city,
            country,
            phoneNumber,
            email,
            photo
        } = req.body

        const newResume = new Resume({
            projectName,
            projectDescription,
            firstName,
            lastName,
            jobTitle,
            city,
            country,
            phoneNumber,
            email,
            photo
        })

        await newResume.save();

        res.status(201).json({ message: "Resume created successfully", success: true, data: newResume })
    } catch (error) {
        console.error("Error occured", error)
    }
}

module.exports = {createResume}