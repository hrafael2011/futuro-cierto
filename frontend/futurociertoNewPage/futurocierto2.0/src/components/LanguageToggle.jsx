

import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // Contexto de idioma

const LanguageToggle = () => {
  const { toggleLanguage, language } = useLanguage();

  return (
    <div className="flex justify-center items-center mt-4">
      {language === 'es' ? (
        <button
          onClick={toggleLanguage}
          className="flex items-center bg-transparent rounded-lg px-4 py-2 hover:text-gray-600 transition duration-300"
        >
          <img
            src="/flags/us.svg"
            alt="English"
            className="w-7 h-7 mr-2"
          />
          <span className="text-[#7b7b7b] font-medium"> - En</span>
        </button>
      ) : (
        <button
          onClick={toggleLanguage}
          className="flex items-center bg-transparent rounded-lg px-4 py-2 hover:text-gray-600 transition duration-300"
        >
          <img
            src="/flags/es.svg"
            alt="Español"
            className="w-7 h-7 mr-2"
          />
          <span className="text-[#7b7b7b] font-medium"> - Es</span>
        </button>
      )}
    </div>
  );
};

export default LanguageToggle;

/*import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext'; // Contexto de idioma

const LanguageToggle = () => {
  const { toggleLanguage, language } = useLanguage();
  const [isLoading, setIsLoading] = useState(false); // Estado para mostrar el GIF de carga

  const handleLanguageChange = () => {
    setIsLoading(true); // Mostrar el GIF de carga

    // Ejecuta el cambio de idioma y asegura que el estado se actualice correctamente
    Promise.resolve(toggleLanguage())
      .finally(() => {
        setIsLoading(false); // Ocultar el GIF de carga
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      {isLoading && (
        <img
          src="/loading.gif" // Ruta al GIF de carga
          alt="Cargando"
          className="w-10 h-10 mb-4"
        />
      )}

      {language === 'es' ? (
        <button
          onClick={handleLanguageChange}
          className="flex items-center bg-transparent rounded-lg px-4 py-2 hover:text-gray-600 transition duration-300"
          disabled={isLoading} // Desactiva el botón mientras carga
        >
          <img
            src="/flags/us.svg"
            alt="English"
            className="w-7 h-7 mr-2"
          />
          <span className="text-[#7b7b7b] font-medium"> - En</span>
        </button>
      ) : (
        <button
          onClick={handleLanguageChange}
          className="flex items-center bg-transparent rounded-lg px-4 py-2 hover:text-gray-600 transition duration-300"
          disabled={isLoading} // Desactiva el botón mientras carga
        >
          <img
            src="/flags/es.svg"
            alt="Español"
            className="w-7 h-7 mr-2"
          />
          <span className="text-[#7b7b7b] font-medium"> - Es</span>
        </button>
      )}
    </div>
  );
};

export default LanguageToggle;*/






/*import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // Contexto de idioma

const LanguageToggle = () => {
  const { toggleLanguage, language } = useLanguage();

  return (
    <div className="flex justify-center items-center mt-4">
      {language === 'es' ? (
        <button
          onClick={toggleLanguage}
          className="flex items-center bg-transparent rounded-lg px-4 py-2 hover:text-gray-600 transition duration-300"
        >
          <img
            src="/flags/us.svg"
            alt="English"
            className="w-7 h-7 mr-2"
          />
          <span className="text-[#7b7b7b] font-medium"> - En</span>
        </button>
      ) : (
        <button
          onClick={toggleLanguage}
          className="flex items-center bg-transparent rounded-lg px-4 py-2 hover:text-gray-600 transition duration-300"
        >
          <img
            src="/flags/es.svg"
            alt="Español"
            className="w-7 h-7 mr-2"
          />
          <span className="text-[#7b7b7b] font-medium"> - Es</span>
        </button>
      )}
    </div>
  );
};

export default LanguageToggle;*/

