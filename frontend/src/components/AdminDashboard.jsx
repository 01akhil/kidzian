import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ChevronUp, ChevronDown } from "lucide-react";

const AdminDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Navigation hook
  const admin = location.state?.admin || JSON.parse(localStorage.getItem("admin"));
  const [courses, setCourses] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/courses`)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 capitalize">Welcome, {admin?.name}!</h1>
      <p className="text-gray-600">Email: {admin?.email}</p>
      <p className="text-gray-600 mb-6">Role: {admin?.role}</p>

      {/* Courses Toggle Header */}
      <div
        className="flex items-center justify-between cursor-pointer bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl font-semibold text-white">Available Courses</h2>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </div>

      {/* Slideable Courses Section */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course._id}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() =>
                  navigate(
                    `/admin-dashboard/${course.title.replace(/\s+/g, "-").toLowerCase()}`
                  )
                }
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{course.description}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                  View Course
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No courses available.</p>
        )}
      </div>

      {/* Students and Teachers Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Students Card */}
        <div
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
          onClick={() => navigate("/admin-dashboard/students")}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Students</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Manage student records, attendance, and progress.
          </p>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            View Students
          </button>
        </div>

        {/* Teachers Card */}
        <div
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
          onClick={() => navigate("/admin-dashboard/teachers")}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Teachers</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Manage teacher profiles, schedules, and courses assigned.
          </p>
          <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg">
            View Teachers
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
