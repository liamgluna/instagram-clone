import { useState } from "react";
import { Sun, Moon } from "lucide-react";

import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import MobileMockup from "../components/MobileMockup";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center transition-all ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="flex-grow flex items-center justify-center">
        <MobileMockup darkMode={darkMode} />
        <LoginForm darkMode={darkMode} />
      </div>
      <div className="mb-8">
        <Footer darkMode={darkMode} />
      </div>
      <button
        onClick={toggleDarkMode}
        className={`absolute right-8 top-4 rounded-full p-2 ${
          darkMode ? " text-white" : " text-black"
        }`}
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};

export default MainLayout;
