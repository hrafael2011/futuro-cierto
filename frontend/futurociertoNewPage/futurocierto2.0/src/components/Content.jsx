import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import contentApi from "../api/contentApi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const useScrollHandler = (hash, target) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === hash) {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
        offset: -60,
      });
    }
  }, [location, hash, target]);
};

const Content = () => {
  useScrollHandler("#ComoAyudar", "howCanYouHelp");
  useScrollHandler("#Causas", "causes");

  const { t } = useTranslation(); // Inicializa el hook
  const contentData = contentApi();

  const [data, setData] = useState({
    cause: [],
    collaborator: [],
    videos: [],
    news: [],
    education: [],
    donatorSay: [],
  });

  const [visibleColloborator, setVisibleColoborator] = useState([4]);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          contentData.get("/cause/"),
          contentData.get("/colloborator/"),
          contentData.get("/video/"),
          contentData.get("/news/"),
          contentData.get("/education/"),
          contentData.get("/donatorSay/"),
        ]);
        setData({
          cause: responses[0].data,
          collaborator: responses[1].data,
          videos: responses[2].data,
          news: responses[3].data[responses[3].data.length - 1],
          education: responses[4].data[responses[4].data.length - 1],
          donatorSay: responses[5].data,
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [contentData]);

  //Handle the button to see more increase the visible elements

  const handleShowMore = () => {
    setVisibleColoborator(
      (prevVisibleitems) => prevVisibleitems + itemsPerPage
    );
  };

  const handleShowless = () => {
    setVisibleColoborator(4);
  };

  return (
    <div>
      <div className="content">
        {/* <!--======= RECENT CASES =========-->*/}
        <section className="cases">
          <div className="container">
            {/* <!--======= TITTLE =========-->*/}
            <div className="tittle">
              <h2>
                <span className="text-4xl">{t("cause")} </span>
              </h2>
              <p>
                {t("our")}{" "}
                <span className="underline">{t("organitationUnderline")}</span>{" "}
                {t("cause_message")}
              </p>
            </div>

            {/* <!--======= CASES ROW =========-->*/}
            <ul className="row" id="causes">
              {/* <!--======= CASE 1 =========-->*/}

              {/* <!--======= CASE 1 =========-->*/}
              {data.cause.map((cau) => (
                <li key={cau.CauseID} className="col-sm-4">
                  <section>
                    {" "}
                    <img
                      className="img-responsive w-[356px] h-[250px] sm:w-[250px]"
                      src={cau.Image}
                      alt={cau.TextAlt}
                    />
                    {/* <!--======= CASE PROGRESS BAR =========-->*/}
                    <div className="progress-bars">
                      <div className="progress" data-percent="42%">
                        <div className="progress-bar progress-bar-striped">
                          {" "}
                          <span className="progress-bar-tooltip">42%</span>{" "}
                        </div>
                      </div>
                    </div>
                    {/* <!--======= DONATION DETAILS =========-->*/}
                    <div className="donate-detail h-[170px] ">
                      {/* <!--======= DONATION =========-->*/}

                      {/* <!--======= LINK =========-->*/}
                      <a href="#." className="font-lora head">
                        {cau.Title}
                      </a>
                      <hr />
                      <p>{cau.Description}</p>
                    </div>
                  </section>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* <!--======= HOW CAN YOU HELP =========-->*/}
        <section className="how-can-help">
          <div className="container">
            <ul className="row">
              {/* <!--======= HOW CAN YOU HELP =========-->*/}
              <li className="col-sm-4" id="howCanYouHelp">
                {" "}
                <span className="big-text font-lora">
                  {t("how")} <small>{t("how_can_help")}</small>
                </span>
                <hr />
                <p className="text-2xl">{t("howCanHelpText")}</p>
              </li>

              {/* <!--======= FEATURED =========-->*/}
              <li className="col-sm-4">
                <ul className="help-fea">
                  <li className="font-lora">
                    <img src="src/assets/images/help-icon-1.png" alt="" />{" "}
                    {t("follow_social_network")}
                  </li>
                  <li className="font-lora">
                    <img src="src/assets/images/help-icon-2.png" alt="" />{" "}
                    {t("volunter")}
                  </li>
                  <li className="font-lora">
                    <img src="src/assets/images/help-icon-3.png" alt="" />{" "}
                    {t("gift")}
                  </li>
                  <li className="font-lora">
                    <img src="src/assets/images/help-icon-4.png" alt="" />
                    {t("donate")}
                  </li>
                </ul>
              </li>
              {/* <!--======= DONATION IMAGE =========-->*/}
              <li className="col-sm-4">
                {" "}
                <img
                  className=" w-[422px] h-[656px]"
                  src="donate-img.PNG"
                  alt=""
                />{" "}
              </li>
            </ul>
          </div>
        </section>

        <section className="donatores">
          <div className="container">
            {/* <!--======= TITTLE =========-->*/}
            <div className="tittle">
              <h2>
                <span className="text-4xl">{t("collaborators")}</span>
              </h2>
              <p className="text-2xl">{t("collaborators_text")}</p>
            </div>

            <div className="w-[100%] ">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 ">
                {data.collaborator
                  .slice(0, visibleColloborator)
                  .map((collob, i) => (
                    <ul
                      key={collob.CollaboratorID}
                      className="w-[230px] pl-4 md:pl-4 lg:ml-4  md:ml-16  sm:mx-auto custom1:ml-auto custom2:mx-auto "
                    >
                      <li key={collob.CollaboratorID} className="mb-16 ">
                        <div className="avatar">
                          {" "}
                          <img
                            key={collob.CollaboratorID}
                            className="img-responsive"
                            src={collob.Image}
                            alt={collob.AltText}
                          />{" "}
                        </div>
                        <div className="donor-details h-[200px]">
                          <h5 className="mt-4">{collob.Name}</h5>
                          <p className="font-lora">{collob.Description}</p>
                        </div>
                      </li>
                    </ul>
                  ))}
              </div>

              <div className="   blog !bg-transparent  w-[13%] sm:w-[30%] custom1:w-[35%] custom2:w-[50%]  flex  mx-auto p-0">
                {visibleColloborator < data.collaborator.length && (
                  <a href="#." className="btn " onClick={handleShowMore}>
                    {t("btn_more")}{" "}
                    <i className="fa fa-arrow-circle-o-right"></i>
                  </a>
                )}

                {visibleColloborator > 4 && (
                  <a href="#." className="btn" onClick={handleShowless}>
                    {t("less")} <i className="fa fa-arrow-circle-o-right"></i>
                  </a>
                )}
              </div>

              {/* <!--======= DONATOR ROW =========-->*/}
              <div className="col-md-6">
                <ul className="row"></ul>
              </div>
            </div>
          </div>
        </section>

        {/* <!--======= BLOG =========-->*/}
        <section className="blog">
          <div className="container">
            {/* <!--======= TITTLE =========-->*/}
            <div className="tittle">
              <h2>
                {t("last")} <span>{t("last_new")}</span>
              </h2>
              <p>{t("last_new_text")}</p>
            </div>

            {/* <!--======= BLOG ROW =========-->*/}

            <div className="row">
              {/* <!--======= BLOG BIG VIDEO =========-->*/}
              <div className="col-md-6">
                <div className="video-blog">
                  {data.videos.map((vide, i) => (
                    <video width="600" height="370" key={i} controls>
                      <source src={vide.VideoFile} type="video/mp4" />
                      <source src={vide.VideoFile} type="video/webm" />
                    </video>
                  ))}
                </div>
              </div>

              <div className="col-md-6">
                <ul className="row">
                  <li className="col-xs-4">
                    {" "}
                    <a href="#.">
                      <img
                        className="img-responsive"
                        src={data.news.Image}
                        alt=""
                      />
                    </a>{" "}
                  </li>
                  <li className="col-xs-8">
                    {" "}
                    <a className="font-lora title" href="#.">
                      {data.news.Title}
                    </a>{" "}
                    <span className="font-lora">{t("last_new_title")}</span>
                    <p>
                      <i
                        dangerouslySetInnerHTML={
                          data.news && data.news.Content
                            ? {
                                __html:
                                  data.news.formatted_text.slice(0, 200) +
                                  " [...]",
                              }
                            : null
                        }
                      />
                    </p>
                    <Link to={`noticias/${data.news.NewID}`} className="btn">
                      {t("btn_more")}{" "}
                      <i className="fa fa-arrow-circle-o-right"></i>
                    </Link>
                  </li>
                </ul>

                <ul className="row">
                  <li className="col-xs-4">
                    {" "}
                    <a href="#.">
                      <img
                        className="img-responsive"
                        src={data.education.Image}
                        alt={data.education.TextAlt}
                      />
                    </a>{" "}
                  </li>
                  <li className="col-xs-8">
                    {" "}
                    <a className="font-lora title" href="#.">
                      {data.education.Title}
                    </a>{" "}
                    <span className="font-lora">{t("education_title")}</span>
                    <p>
                      <i
                        dangerouslySetInnerHTML={
                          data.education && data.education.Content
                            ? {
                                __html:
                                  data.education.formatted_text.slice(0, 200) +
                                  " [...]",
                              }
                            : null
                        }
                      />
                    </p>
                    <Link
                      to={`educacion/${data.education.EducationID}`}
                      className="btn"
                    >
                      {t("btn_more")}{" "}
                      <i className="fa fa-arrow-circle-o-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!--======= TESTIMONIALS =========-->*/}

        {data.donatorSay.map((donator, i) => (
          <section key={donator.DonorsSayID} className="testi">
            <div className="container">
              {/* <!--======= ROW =========-->*/}
              <div className="row">
                <div className="col-md-6">
                  <h3 className="text-2xl">
                    <strong>{t("What")}</strong> {t("donors_say")}
                  </h3>

                  {/* <!--======= SLIDES =========-->*/}
                  <section>
                    {/* <!--======= SLIDER =========-->*/}
                    <div className="testi-slides">
                      {/* <!--======= SLIDER 1 =========-->*/}
                      <div className="carousel-container pb-[20px] item-slide ">
                        <Slider {...settings}>
                          <div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: donator.formatted_comment1,
                              }}
                            />
                          </div>
                          <div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: donator.formatted_comment2,
                              }}
                            />
                          </div>
                          <div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: donator.formatted_comment3,
                              }}
                            />
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="col-md-6 with-bg-drk">
                  {" "}
                  <img
                    className="img-responsive w-[556px] h-[462px]"
                    src={donator.Image}
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* <!--======= PROUND =========-->*/}
        <section className="proud text-2xl">
          <h2>
            {t("volunters_thanks")} <i className="fa fa-heart"></i>{" "}
            <strong>{t("volunters")}</strong>.
          </h2>
        </section>
      </div>
      {/*<!--Fin del content-->*/}
    </div>
  );
};

export default Content;
