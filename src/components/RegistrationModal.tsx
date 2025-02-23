import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";

interface RegistrationModalProps {
  isModalOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialFormData = {
  userName: "",
  contact: "",
  email: "",
  category: "",
  password: "",
};

interface FormErrors {
  userName?: string;
  contact?: string;
  email?: string;
  category?: string;
  password?: string;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isModalOpen,
  setModal,
}) => {
  const categories = ["category 1", "category 2", "category 3", "category 4"];
  const [form, setForm] = useState(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!form.userName.trim()) {
      newErrors.userName = "Username is required";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }
    if (!form.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (form.contact.toString().length !== 10) {
      newErrors.contact = "Contact number must be 10 digits";
    }
    if (!form.category.trim()) {
      newErrors.category = "Please select a category";
    }
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axiosInstance.post("/auth/register", form);

      if (response.status === 200 || response.status === 201) {
        setForm(initialFormData);
        setModal(false);
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  if (!isModalOpen) return null;

  return (
    <div
      className=" bg-black fixed inset-0 bg-opacity-50 flex items-center justify-center p-4"
      onClick={() => setModal(false)}
    >
      <div
        className="bg-white rounded-lg w-full max-w-2xl p-6 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-5">
          <div className="text-left">
            <h2
              className="text-xl font-extrabold"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Registration Form
            </h2>
            <p className="text-md" style={{ fontFamily: "Arial, sans-serif" }}>
              Fill this form to register your account.
            </p>
          </div>
          <button
            onClick={() => setModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <img
              src="/assets/images/close_modal.png"
              className="w-8 h-8"
              alt="close"
            />
          </button>
        </div>

        <form className="space-y-4 text-left" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                name="userName"
                value={form.userName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 rounded-md"
                placeholder="Username"
              />
              {errors.userName && (
                <p className="text-red-500 text-xs mt-1">{errors.userName}</p>
              )}
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Contact number
              </label>
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 rounded-md"
                placeholder="Contact number"
              />
              {errors.contact && (
                <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Id</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded-md"
              placeholder="Enter your email ID"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded-md"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Which category do you choose?
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded-md"
            >
              <option value="">Select a category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-xs mt-1">{errors.category}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors"
          >
            Submit
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center break-words">
          Submitting the form will accept the{" "}
          <a href="#" className="font-bold text-pink-600">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="font-bold text-pink-600">
            Privacy Policy
          </a>
        </p>

        <p className="text-center mt-4">
          Already have credentials?{" "}
          <button
            className="font-bold text-pink-600 hover:underline"
            onClick={() => setModal(false)}
          >
            Curator’s Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegistrationModal;
