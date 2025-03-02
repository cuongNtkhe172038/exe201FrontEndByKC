import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SvgIcon } from "../../common/SvgIcon";
import axios from "axios";
import {addToast} from "@heroui/react";
const API_URL = "https://localhost:7240"; // Thay bằng API thực tế

interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    
  };
  successfully: boolean;
}

// Xử lý đăng nhập
const processLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post<LoginResponse>(
      `${API_URL}/api/Users/Login`,
      { email, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Hiệu ứng hoa rơi
const Flower = ({ x, delay }: { x: number; delay: number }) => (
  <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: "90vh", opacity: 1 }}
    transition={{ duration: 4, repeat: Infinity, repeatType: "loop", delay }}
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

// Component đăng nhập
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
      console.log(email + password);
      const response = await processLogin(email, password);
      if(response.successfully == true){
       
        addToast({
          title: "Login successfully",
          description: "Welcome to Becodee",
          hideIcon: true,
          color:"danger",
        });

      }else{
        addToast({
          title: "False",
          description: "Login failed",
          hideIcon: true,
          color:"danger",
        });
      }
    
      // Lưu token vào localStorage hoặc context
    
  };

  return (
    <div className="relative hidden lg:flex bg-gray-100 h-[100vh]">
      <FallingFlowers />

      {/* Hình ảnh bên trái */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex w-1/2 bg-gray-100"
      >
        <img
          src="https://images.unsplash.com/photo-1517093372760-6f91eb1ac1e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D"
          alt="Login Illustration"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Form đăng nhập */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex w-full lg:w-1/2 flex-col justify-center px-8 py-12"
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <div className="rounded-full overflow-hidden w-[150px] h-[150px] border-4 border-sky-500 mx-auto">
            <SvgIcon src="helo1.jpg" width="140px" height="140px" />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
            onSubmit={handleLogin}
          >
            {/* Input Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>

            {/* Input Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>

            {/* Hiển thị lỗi nếu có */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Quên mật khẩu */}
            <div className="text-sm text-right">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>

            {/* Nút đăng nhập */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-2 focus:outline-indigo-600"
            >
              Sign in
            </motion.button>
          </motion.form>

          {/* Đăng ký */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
