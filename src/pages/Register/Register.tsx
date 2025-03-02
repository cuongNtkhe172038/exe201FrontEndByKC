
import { Alert } from '@material-tailwind/react';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ErrorResponse, Link, useNavigate } from 'react-router-dom'
import Input from "../../components/Input"
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from '@tanstack/react-query';
import authApi from '../../api/auth.api';
import { omit } from 'lodash';
import { ErrorResponseApi  } from '../../types/util.type';
import {  useAuth } from '../../context/app.context';
import Button from '../../components/Button';
import { SvgIcon } from '../../common/SvgIcon';
import { motion } from "framer-motion";
import axios from "axios";
import { addToast } from "@heroui/react";

const API_URL = "https://localhost:7240"; // Thay bằng API thực tế

interface RegisterResponse {
  successfully: boolean;
  
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}


// Xử lý đăng ký
const processRegister = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post<RegisterResponse>(
      `${API_URL}/api/Users/Registration`,
      { firstName, lastName, email, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
};



  // Component hiệu ứng hoa rơi
const Flower = ({ x, delay }: { x: number; delay: number }) => (
  <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: "90vh", opacity: 1 }} // Giảm chiều cao rơi xuống để tránh giật trang
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      delay,
    }}
    className="absolute w-4 h-4 bg-pink-500 rounded-full"
    style={{ left: `${x}%` }}
  />
);

export function FallingFlowers() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <Flower key={i} x={Math.random() * 100} delay={Math.random() * 2} />
      ))}
    </div>
  );
}



export default function Register() {
  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [error, setError] = useState("");

    const handleRePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setRePassword(value);
      
      // Kiểm tra mật khẩu có khớp không
      setError(value !== password ? "Passwords do not match" : "");
    };
    const navigate = useNavigate(); // Khai báo điều hướng
    const handleRegister = async (e: React.FormEvent) => {
      e.preventDefault();
    
      if (password !== rePassword) {
        setError("Passwords do not match");
        return;
      }
    
      try {
        const response = await processRegister(firstName, lastName, email, password);
    
        if (response.successfully) {
          addToast({
            title: "Registration Successful",
            description: "Welcome to Becodee",
            hideIcon: true,
            color: "success",
          });
          // Điều hướng về trang đăng nhập sau khi đăng ký thành công
        navigate('/login');
        } else {
          addToast({
            title: "Registration Failed",
            description: "Please check your details and try again",
            hideIcon: true,
            color: "danger",
          });
        }
      } catch (err) {
        const error = err as { response?: { data?: string } };
        addToast({
          title: "Error",
          description: error.response?.data || "Something went wrong",
          hideIcon: true,
          color: "danger",
        });
      }
    };
    
    
    
  return (
    
    <div className="hidden lg:flex bg-gray-100 h-[100vh]">
       <FallingFlowers/>
      {/* Form đăng ký bên trái */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        className="flex w-full lg:w-1/2 flex-col justify-center px-6 py-12 lg:px-8"
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center">
          <div className="rounded-full overflow-hidden w-[150px] h-[150px] border-4 border-sky-500 mx-auto">
            <SvgIcon src="helo1.jpg" width="140px" height="140px" />
          </div>
          </div>

          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        >
          <form action="#" method="POST" className="space-y-6" onSubmit={handleRegister}>
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
>
  <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">
    First Name
  </label>
  <div className="mt-2">
    <input
      id="firstName"
      name="firstName"
      type="text"
      required
      autoComplete="given-name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
    />
  </div>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
>
  <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">
    Last Name
  </label>
  <div className="mt-2">
    <input
      id="lastName"
      name="lastName"
      type="text"
      required
      autoComplete="family-name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
    />
  </div>
</motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label htmlFor="re-password" className="block text-sm font-medium text-gray-900">
                Re-Password
              </label>
              <div className="mt-2">
                <input
                  id="re-password"
                  name="re-password"
                  type="password"
                  required
                  value={rePassword}
                  onChange={handleRePasswordChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
              {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </motion.div>

            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs"
              >
                Sign up
              </button>
            </motion.div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Login
            </a>
          </p>
        </motion.div>
      </motion.div>

      {/* Hình ảnh bên phải */}
      <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }} // Đổi sang easeInOut
  className="hidden lg:flex w-1/2 bg-gray-100"
>
  <img
    src="https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Login Illustration"
    className="object-cover w-full h-auto"
  />
</motion.div>

    </div>
  )
}
