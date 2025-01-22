import React, { useState, useEffect } from "react";

import contentApi from "../api/contentApi";

const Banner = () => {
  const contentBanner = contentApi();
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await contentBanner.get("/banner/");
        setBanner(response.data);
      } catch (error) {
        console.error("Error fetching Banner Data:", error);
      }
    };

    fetchEvent();
  }, [contentBanner]);

  let bannerImage = window.location.pathname;

  return (
    <div>
      {/*<!--======= BANNER =========-->*/}
      <div id="banner">
        <div className="flex-banner">
          <ul className="slides">
            {/*<!--======= BANNER SLIDE 1 =========-->*/}
            <li>
              {banner.map(
                (bannerItem, i) =>
                  bannerItem.url_name == bannerImage && (
                    <img
                      key={bannerItem.BannerID}
                      src={bannerItem.Image}
                      alt={bannerItem.TextAlt}
                    />
                  )
              )}
            </li>
            {/*<!--======= BANNER SLIDE 2 =========-->*/}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
