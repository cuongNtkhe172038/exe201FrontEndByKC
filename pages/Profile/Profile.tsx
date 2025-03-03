import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const API_URL = "https://localhost:7240"; // Thay bằng API thực tế
interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isActive: number;
  createOn: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [updatedUser, setUpdatedUser] = useState<Partial<User>>({});
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser.userId) {
      setUser(storedUser);
      setUpdatedUser({ firstName: storedUser.firstName, lastName: storedUser.lastName, password: "" });
      setLoading(false);
      return;
    }
    setLoading(false);
  }, [token, navigate]);
// Xử lý update
const handleUpdateProfile = async () => {
  if (!user) return alert("User data is missing!");

  const { firstName, lastName, password } = updatedUser;

  if (!firstName || !lastName) {
    return alert("First name and last name cannot be empty!");
  }

  try {
    const response = await fetch(`${API_URL}/api/Users/UpdateProfile/${user.userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName, lastName, password }),
    });
    // Kiểm tra response có nội dung hay không
    let result;
    const text = await response.text();
    if (text) {
      result = JSON.parse(text); // Chỉ parse JSON khi có nội dung
    }

    if (!response.ok) {
      throw new Error(result?.message || "Failed to update profile.");
    }

    const updatedData = { ...user, firstName, lastName };
    setUser(updatedData);
    localStorage.setItem("user", JSON.stringify(updatedData));
    setEditMode(false);
    alert("Profile updated successfully!");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error updating profile:", error.message);
      alert(error.message);
    } else {
      console.error("Unexpected error:", error);
      alert("An unknown error occurred.");
    }
  }
};




  if (loading) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="/videos/1828452-uhd_3840_2160_24fps.mp4" type="video/mp4" />
      </video>
      
      <div className="relative bg-white shadow-2xl rounded-2xl p-8 max-w-2xl w-full backdrop-blur-lg bg-opacity-75 border border-gray-200">
        <div className="flex items-center space-x-6">
          <motion.img
            src={`https://i.pravatar.cc/150?u=${user?.email}`} 
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg hover:scale-110"
          />
          <div>
            <input
              type="text"
              className="text-2xl font-semibold text-gray-800 border rounded p-1"
              value={updatedUser.firstName}
              onChange={(e) => setUpdatedUser({ ...updatedUser, firstName: e.target.value })}
              disabled={!editMode}
            />
            <input
              type="text"
              className="text-2xl font-semibold text-gray-800 border rounded p-1 mt-1"
              value={updatedUser.lastName}
              onChange={(e) => setUpdatedUser({ ...updatedUser, lastName: e.target.value })}
              disabled={!editMode}
            />
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
            <span className="text-gray-600">Password:</span>
            <div className="flex items-center space-x-2">
              <input
                type={showPassword ? "text" : "password"}
                className="font-mono text-lg border rounded p-1"
                value={updatedUser.password || ""}
                onChange={(e) => setUpdatedUser({ ...updatedUser, password: e.target.value })}
                disabled={!editMode}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="text-blue-500 hover:text-blue-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
            <span className="text-gray-600">Status:</span>
            <span className={`px-3 py-1 text-sm rounded-full ${user?.isActive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
              {user?.isActive ? "✅ Active" : "❌ Inactive"}
            </span>
          </div>
        </div>

        {editMode ? (
          <motion.button
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg w-full font-medium"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleUpdateProfile}
          >
            Save Changes
          </motion.button>
        ) : (
          <motion.button
            className="mt-6 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg w-full font-medium"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </motion.button>
        )}

        <div className="mt-4 flex space-x-4">
          <motion.button
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg w-full font-medium"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Logout
          </motion.button>

          
        </div>
      </div>
    </div>
  );
};

export default Profile;
