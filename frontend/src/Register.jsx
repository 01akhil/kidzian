
import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = () => {
  const [showBox, setShowBox] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const dialogRef = useRef(null); 

  const handleButtonClick = () => {
    setShowBox(!showBox);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); 
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      toast.success("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      setShowBox(false); 
    }
  };

  const handleOutsideClick = (e) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target)) {
      setShowBox(false);
    }
  };

  useEffect(() => {
    if (showBox) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "auto"; 
    };
  }, [showBox]);

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <div
        onClick={handleButtonClick}
        className="bg-blue-500 text-[#FFFFFF] w-[25vw] h-[6vh] md:w-[15vw] md:h-[7vh] lg:w-[10vw] xl:w-[10vw] lg:h-[7vh] xl:h-[7vh] flex items-center justify-center pb-1 text-md rounded-md fixed bottom-2 right-2 hover:bg-[#0D99FF] cursor-pointer z-40"
        style={{ fontFamily: "Futura Now Headline" }}
      >
        Register
      </div>

      {showBox && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            ref={dialogRef}
            className="bg-gray-200 w-[80vw] h-[90vh]  shadow-lg rounded-xl flex items-center justify-center flex-col"
            style={{ fontFamily: "Futura Now Headline" }}
          >
            <h1 className="text-black top-0 text-4xl" style={{ fontFamily: "Futura Now Headline" }}>
              Contact us
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full p-10">
              <label className="flex flex-col text-lg text-black">
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className={`border rounded-md p-2 focus:outline-none focus:ring-2 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </label>
              <label className="flex flex-col text-lg text-black">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`border rounded-md p-2 focus:outline-none focus:ring-2 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </label>
              <label className="flex flex-col text-lg text-black">
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                  rows="5"
                  className={`border rounded-md p-2 focus:outline-none focus:ring-2 resize-none ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
              </label>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-md py-2 mt-4 hover:bg-blue-600 transition-colors w-[30vw] md:w-[10vw]
                  lg:w-[10vw] xl:w-[10vw]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
