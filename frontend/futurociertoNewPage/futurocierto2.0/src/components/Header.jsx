import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import { useModal } from './ModalContext ';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import contentApi from '../api/contentApi';



const Header = ({ onContactClick, onCoundownClick }) => {
  const { openModal } = useModal();
  const { t } = useTranslation(); // Inicializa el hook
  const contentData = contentApi();
  const [menuOpen, setMenuOpen] = useState(false);

  const [data, setData] = useState({
    nav: [],
    navUrl: "",
    logo: [],
  });

  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Inicializa con el ancho actual de la ventana

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          contentData.get("/navigation/"),
          contentData.get("/logo/"),
        ]);
        setData({
          nav: responses[0].data,
          navUrl: "/",
          logo: responses[1].data,
        });
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchData();
  }, [contentData]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth); // Actualiza el estado con el nuevo ancho
    };

    // Añade el listener de redimensionamiento
    window.addEventListener("resize", handleResize);

    // Limpia el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // El hook solo se ejecuta una vez al montar el componente

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  




  useEffect(()=>{
    const loadLogo =  async () =>{
      try{

        const response = await getLogo();
        setLogo(response.data);
      }catch(error){
        console.error('Error fetching')
  
      }
    };
    loadLogo();
  },[]);

  return (
    <>
      {/*<!--======= TOP BAR =========-->*/}
      <div className="top-bar">
        <div className="container">
          <ul className="left-bar-side">
            <li>
              <p className="font-lora">
                <i>
                  <img src="src/assets/images/top-bar-icon.png" alt="" />
                </i>{" "}
                {t("start_message")}{" "}
              </p>
            </li>
          </ul>
          <ul className="right-bar-side social_icons">
            <li className="padding-r-20">
              <p className="font-lora">{t("phone")} (809) 696 - 7681</p>
            </li>
            <li>
              <p className="font-lora">Mail: fundacionfututocierto@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>

      {/*<!--======= HEADER START =========-->*/}
      <header className="sticky">
        <div className="container">
          {/*<!--======= LOGO =========-->*/}
          <div className="logo">
            <Link to={data.navUrl}>
              {data.logo.map((logoItem, i) => (
                <img
                  key={logoItem.LogoID}
                  src={logoItem.Image}
                  alt={logoItem.TextAlt}
                />
              ))}
            </Link>
          </div>

          {/*<!--======= DONATE NOW BTN =========-->*/}
          <div className=" grid grid-cols-2 btn-right md:mb-8 sm:mb-8 sm:ml-32 custom:1 mb-8">
            <button onClick={openModal} className="btn popup-with-zoom-anim sm:ml-[125px]">
              <i className="fa fa-heart-o"></i>
              {t("btn_donate")}
            </button>
            <div className=" md:mt-12 sm:mt-12 custom1:mt-12 custom2:mt-1 custom2: w-[30%] custom2:ml-24 ">
              <LanguageToggle />
            </div>
          </div>
        </div>

        {/*<!--======= NAVIGATION =========-->*/}

        <nav>
          <div className="container">
            <button
              onClick={toggleMenu}
              className="text-4xl p-2  text-2xl text-white  w-24 mt-2 ml-[45%] rounded-md md:hidden"
            >
              {/* Icono de FontAwesome */}
              <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
            </button>
            <ul
              className={`ml-20 mt-4 space-y-2 md:space-x-12 md:flex md:space-y-0  p-4 rounded-md 
        ${menuOpen ? "sm:block" : "sm:hidden"} 
        ${menuOpen ? "custom1:block" : "custom1:hidden"}
         ${menuOpen ? "custom2:block" : "custom2:hidden"}
        
        `}
            >
              {data.nav.map((navItem, i) => (
                <li key={i}>
                  {navItem.PageName === "Contacto" ||
                  navItem.PageName === "Contact" ? (
                    <a
                      href="#contacto"
                      onClick={(e) => {
                        e.preventDefault();
                        onContactClick();
                      }}
                    >
                      {navItem.PageName}
                    </a>
                  ) : navItem.PageName === "Donar" ||
                    navItem.PageName === "Donate" ? (
                    <a
                      href="#donar"
                      onClick={(e) => {
                        e.preventDefault();
                        onCoundownClick(); // Llama a la función de scroll para "Donar"
                      }}
                    >
                      {navItem.PageName}
                    </a>
                  ) : (
                    <Link to={navItem.Url}>{navItem.PageName}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      {/*<!--======= HEADER END =========--> */}
    </>
  );
};

export default Header;
