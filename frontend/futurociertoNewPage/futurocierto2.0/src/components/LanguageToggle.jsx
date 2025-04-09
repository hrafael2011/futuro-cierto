import React from "react";
import { useLanguage } from "../context/LanguageContext"; // language Context

const LanguageToggle = () => {
  const { toggleLanguage, language } = useLanguage();

  return (
    <div className="flex justify-center items-center mt-4">
      {language === "es" ? (
        <button
          onClick={toggleLanguage}
          className="flex items-center bg-transparent rounded-lg px-4 py-2 hover:text-gray-600 transition duration-300"
        >
          <img src="/flags/us.svg" alt="English" className="w-7 h-7 mr-2" />
          <span className="text-[#7b7b7b] font-medium"> - En</span>
        </button>
      ) : (
        <button
          onClick={toggleLanguage}
          className="flex items-center bg-transparent rounded-lg px-4 py-2 hover:text-gray-600 transition duration-300"
        >
          <img src="/flags/es.svg" alt="Español" className="w-7 h-7 mr-2" />
          <span className="text-[#7b7b7b] font-medium"> - Es</span>
        </button>
      )}
    </div>
  );
};

export default LanguageToggle;
