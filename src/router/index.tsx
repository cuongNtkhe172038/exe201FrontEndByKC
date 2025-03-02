import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Styles } from "../styles/styles";
import { ReactNode } from "react";
import Register from "../pages/Register";
// Import các trang bằng lazy loading
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));

// Layout chứa Header & Footer
const MainLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Styles />
    <Header />
    {children}
    <Footer />
  </>
);

const Routerpages = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Routerpages;
