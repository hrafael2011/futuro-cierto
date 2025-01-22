import React, { useEffect, useState, forwardRef } from "react";
import { useModal } from "./ModalContext ";
import contentApi from "../api/contentApi";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Countdown = forwardRef((props, ref) => {
  const { t } = useTranslation(); // Inicializa el hook
  const { openModal } = useModal();
  const contentData = contentApi();
  const [eventDate, setEventDate] = useState(null);
  const [eventName, setEventName] = useState([]);
  const [timeLeft, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await contentData.get("/event/");
        const eventDate = new Date(response.data[0].EventDate);
        //const id = new Date(response.data.EventID);

        setEventDate(eventDate); // Guardar la fecha del evento
        setEventName(response.data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEvent();
  }, [contentData]);

  useEffect(() => {
    if (eventDate) {
      startCountdown(eventDate); // Iniciar el contador cuando haya una fecha válida
    }
  }, [eventDate]);

  const startCountdown = (eventDate) => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = eventDate.getTime() - now.getTime();
      console.log("Diferencia de tiempo (ms):", timeDifference);

      if (timeDifference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calcular días, horas, minutos y segundos restantes
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  };

  return (
    <div>
      <div className="content">
        <div className="container">
          <ul className="row white-bg enevtii">
            <li className="col-md-6 no-padding-l">
              <div className="event-in">
                {timeLeft.days > 0 ? (
                  <div className="up-com-event">
                    <p className="font-lora">{t('next_event')}</p>
                    <div className="row">
                      <div className="col-xs-5">
                        {eventName.map((eventIte, i) => (
                          <img
                            key={eventIte.EventID}
                            className="img-responsive"
                            src={eventIte.Image}
                            alt={eventIte.TextAlt}
                          />
                        ))}
                      </div>

                      <div className="col-xs-7">
                        <p className="font-lora">
                          {eventName.map((eventItem, i) => (
                            <span key={eventItem.EventID}>
                              {" "}
                              {eventItem.Event}
                            </span>
                          ))}
                        </p>

                        <span>
                          <i className="fa fa-clock-o"></i>
                          {eventDate
                            ? eventDate.toLocaleString()
                            : "Cargando..."}
                        </span>
                        <span>
                          {eventName.map((eventItem, i) => (
                            <div key={eventItem.EventID}>
                              {" "}
                              <i className="fa fa-map-marker"></i>
                              {eventItem.Address}
                            </div>
                          ))}
                        </span>
                        <ul className="countdown">
                          <li>
                            <span className="days">{timeLeft.days}</span>
                            <p>{t("days")}</p>
                          </li>
                          <li>
                            <span className="hours">{timeLeft.hours}</span>
                            <p>{t("hours")}</p>
                          </li>
                          <li>
                            <span className="minutes">{timeLeft.minutes}</span>
                            <p>{t("minutes")}</p>
                          </li>
                          <li>
                            <span className="seconds">{timeLeft.seconds}</span>
                            <p>{t("seconds")}</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-sm-12 mt-12">
                    {" "}
                    <span className="big-text font-lora text-4xl">
                      {t("how")}{" "}
                      <small className="text-4xl font-bold">
                        {t("how_can_help")}
                      </small>
                    </span>
                   
                    <p className="mt-4">{t("howCanHelpText")}</p>
                    <div className="blog p-8">
                    <Link to="/#ComoAyudar" className="btn">
                    
                      {t("btn_more")}{" "}
                      <i className="fa fa-arrow-circle-o-right"></i>
                    </Link>{" "}
                    </div>
                  </div>
                )}
              </div>
            </li>
            {/* <!--======= DONATE AMOUNT =========-->*/}
            <li className="col-md-2 amount">
              <h1 className="font-lora">RD$ 50</h1>
              <p>{t("50peso_message")}</p>
            </li>

            {/* <!--======= DONATE SLIDER =========-->*/}
            <li ref={ref} className="col-md-4 mt-10">
              <div className="donate-price">
                <div id="year-slider" className="no-ui-slider"></div>
              </div>
              <button
                onClick={openModal}
                className="btn popup-with-zoom-anim w-[300px] md:mx-[2%]   sm:mx-[25%] custom1:mx-[21%] custom2:mx-[10%]"
              >
                {t("btn_donate")}
              </button>
            </li>
          </ul>
        </div>
        
      </div>
    
    </div>
  );
});

export default Countdown;
