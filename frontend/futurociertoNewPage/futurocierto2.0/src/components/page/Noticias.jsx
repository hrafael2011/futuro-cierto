import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "../Banner";
import Countdown from "../Countdown";
import ScrollToTop from "../ScrollToTop";
import contentApi from "../../api/contentApi";
import { useTranslation } from "react-i18next";

const Noticias = ({ openModal }) => {
  const { t } = useTranslation(); // Inicializa el hook
  const contentNews = contentApi();
  const [newList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await contentNews.get("/news/");
        setNewsList(response.data);
        console.log("estos son los datos de la noticia", response);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchNews();
  }, [contentNews]);

  const footerRef = useRef(null);
  const countdownref = useRef(null);

  const ScrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header
        onContactClick={() => ScrollToRef(footerRef)}
        onCoundownClick={() => ScrollToRef(countdownref)}
      />
      <Banner />
      <Countdown ref={countdownref} openModal={openModal} />
      <ScrollToTop />
      <Outlet />

      <section className="flex flex-col  max-h-[80%]  w-[90%] ml-[5%] my-32">
        <ol class="breadcrumb">
          <li>
            <Link to="/">{t("home")}</Link>
          </li>
          <li>
            <Link to="/noticias">{t("news")}</Link>
          </li>
        </ol>
        <h1 className=" text-center text-7xl font-sans  mb-[40px]">
          {t("news")}
        </h1>

        <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 md:mx-[1%] sm:grid-cols-1 custom1:grid-cols-1  custom2:grid-cols-1  sm:mx-[15%]">
          {newList.map((newsL, i) => (
            <Link to={`/noticias/${newsL.NewID}`}>
              <div
                key={i}
                className="w-[300px] pb-8 mx-[15%] md:mx-[10%] sm:mb-16 custom1:mx-[%] custom1:mb-16 custom2:mb-16  custom2:mx-[10%] hover:bg-green-400 hover:text-white hover:"
              >
                <div id="image">
                  <img
                    className="w-[300px] h-[200px]"
                    src={newsL.Image}
                    alt={newsL.TextAlt}
                  />
                </div>
                <div className="mt-6 text-3xl font-bold ml-2" id="title">
                  {newsL.Title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer ref={footerRef} />
    </>
  );
};

export default Noticias;
