import React, { FormEvent, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { isAuthenticated, setToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import RegistrationModal from "../components/RegistrationModal";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setModal] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  const validateForm = (): boolean => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      console.log({ response });

      const token = response.data.token;
      if (!token) {
        alert("Wrong credentials.");
        return;
      }
      setToken(token);
      navigate("/home");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <div className="w-screen h-dvh flex justify-center items-center">
        <div className="w-full h-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Login
          </h5>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
              <div className="mb-5 flex flex-col items-start">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="test1@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-5 flex flex-col items-start">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={password}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-pink-600 hover:bg-pink-700 rounded-lg px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
            <div className="flex items-center gap-1 mt-5">
              <p className="m-0">Don't have an account?</p>
              <button
                className="text-pink-600 hover:text-pink-700 hover:underline p-0 m-0 bg-transparent border-none cursor-pointer"
                onClick={() => setModal(true)}
              >
                Register here
              </button>
            </div>
          </div>
        </div>
      </div>
      <RegistrationModal isModalOpen={isModalOpen} setModal={setModal} />
    </>
  );
};

export default Login;
