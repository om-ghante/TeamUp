import React, { useEffect, useState } from "react";
import axios from "axios";
import userimg from "../assets/user.png";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          setError("Unauthorized access. Please log in.");
          return;
        }

        const response = await axios.get(`${import.meta.env.VITE_SERVER_API}/read-api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("API Response:", response.data);
        setUserData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch profile data.");
      }
    };

    fetchProfileData();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white text-black">
        <p>{error}</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white text-black">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black overflow-auto">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg">
        <div className="flex flex-col items-center mb-8">
          <img
            src={userimg}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h1 className="text-3xl font-semibold text-gray-800">
            {userData.fullName || "Name not available"}
          </h1>
          <p className="text-md text-gray-600">{userData.email}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Profile Details</h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              <strong className="text-indigo-600">Full Name:</strong> {userData.fullName || "Not provided"}
            </p>
            <p className="text-lg text-gray-700">
              <strong className="text-indigo-600">Email:</strong> {userData.email}
            </p>
          </div>
        </div>

        {/* Render skills */}
        {userData.skills && userData.skills.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Skills</h2>
            <div className="space-y-2">
              {userData.skills.map((skill, index) => (
                <p key={index} className="text-lg text-gray-700">
                  <strong className="text-indigo-600">- </strong>{skill}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Render languages */}
        {userData.languages && userData.languages.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Languages</h2>
            <div className="space-y-2">
              {userData.languages.map((language, index) => (
                <p key={index} className="text-lg text-gray-700">
                  <strong className="text-indigo-600">- </strong>{language}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
