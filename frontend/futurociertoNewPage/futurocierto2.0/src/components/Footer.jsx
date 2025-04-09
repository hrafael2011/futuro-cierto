import React, { forwardRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DonationModal from "./DonationModal";
import { useModal } from "./ModalContext ";
import contentApi from "../api/contentApi";
import { useTranslation } from "react-i18next";

const Footer = forwardRef((props, ref) => {
  const { openModal } = useModal();

  const { t } = useTranslation(); // Inicializa el hook
  const contentData = contentApi();
 
  const [data, setData] = useState({
    contact:[0],
    navigation: [0]
  });

  useEffect(()=>{
    
      const fetchData = async () =>{
        try{
        const responses = await Promise.all([
          contentData.get('/contact/'),
          contentData.get('/navigation/')
        ])
        setData({
          contact: responses[0].data,
          navigation: responses[1].data
        })
      }
    catch(error){
      console.log('Error fecthing data', error);
    }
      };
    fetchData();
  },[contentData]);


  return (
    <div>
      <footer ref={ref}>
        <div className="container mx-[100px]">
          <div className="row">
            <div className="col-md-6">
              <ul className="row">
                {data.contact.map((conct, i) => (
                  <li key={i} className="col-sm-6 shadow">
                    <ul className="social_icons">
                      <li className="facebook">
                        <Link to={conct.LinkFacebook}>
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li className="twitter">
                        <Link to={conct.LinkTweeter}>
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li className="instagram">
                        <Link to={conct.LinkInstagram}>
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>

                    <h6>{t("contact")}</h6>

                    <p>{conct.Phone}</p>
                    <p>{conct.Email}</p>
                  </li>
                ))}

                <li className="col-sm-6 padding-l-60">
                  <h6>{t("utils_link")}</h6>
                  <ul className="links">
                    {data.navigation.map((navi, i) => (
                      <li key={i}>
                        <Link to={navi.Url}>
                          {navi.PageName != "Contacto" &&
                          navi.PageName != "Donar"
                            ? navi.PageName
                            : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <ul className="row">
              

                <li className="col-sm-6 padding-l-60 mb-8">
                  <h6>{t("donates")}</h6>
                  <ul className="links">
                    <li>
                      <Link to="/#ComoAyudar">{t("cause")}</Link>
                    </li>

                    <li>
                      <Link to="/#Causas">{t("how_can_help_full")}</Link>
                    </li>
                    <li>
                      <a href="#." onClick={openModal} className="btn">
                        {t("btn_donate")}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <DonationModal />
    </div>
  );
});

export default Footer;
