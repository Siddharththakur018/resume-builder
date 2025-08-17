import React from "react";

type PersonalInfoProps = {
  data: {
    firstName?: string;
    lastName?: string;
    jobTitle?: string;
    city?: string;
    country?: string;
    phoneNumber?: string;
    email?: string;
    photo?: string;
  };
  setData: (data: any) => void;
};

function PersonalInfo({ data, setData }: PersonalInfoProps) {
  const handleChange = (field: string, value: string) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      handleChange("phoneNumber", value);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange("photo", reader.result as string); // Save base64 string
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div>
      <h2 className="text-center font-bold  text-xl">Personal Info</h2>
      <h3 className="text-center text-gray-400">Tell us about yourself</h3>

      <div className="p-4">
        <div className="flex flex-col gap-4">
          <label>Your photo</label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              className="border-gray-300 border w-full outline-none focus:ring-0 p-2"
              accept="image/*"
              onChange={handlePhotoChange}
            />
            <button onClick={() => handleChange("photo", "")} className="bg-gray-300 p-2 rounded-md cursor-pointer">Remove</button>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <div className="flex-1">
            <label className="block mb-2">First Name</label>
            <input
              type="text"
              value={data.firstName || ""}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="border w-full border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-0"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2">Last Name</label>
            <input
              type="text"
              value={data.lastName || ""}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="border w-full border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-0"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <div className="flex-1">
            <label className="block mb-2">Job Title</label>
            <input
              type="text"
              value={data.jobTitle || ""}
              onChange={(e) => handleChange("jobTitle", e.target.value)}
              className="border w-full border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-0"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <div className="flex-1">
            <label className="block mb-2">City</label>
            <input
              type="text"
              value={data.city || ""}
              onChange={(e) => handleChange("city", e.target.value)}
              className="border w-full border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-0"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2">Country</label>
            <input
              type="text"
              value={data.country || ""}
              onChange={(e) => handleChange("country", e.target.value)}
              className="border w-full border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-0"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex-1">
              <label className="block mb-2">Phone Number</label>
              <input
                type="text"
                value={data.phoneNumber || ""}
                onChange={handlePhoneChange}
                className="border w-full border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-0"
                inputMode="numeric"
                pattern="\d*"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex-1">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                value={data.email || ""}
                onChange={(e) => handleChange("email", e.target.value)}
                className="border w-full border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-0"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
