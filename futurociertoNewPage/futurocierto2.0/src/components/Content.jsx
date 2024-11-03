import React, { useEffect, useState } from "react";
import { getCause } from "../api/futuroCiertoContentApi";

const Content = () => {
  const [cause, setCause] = useState([]);

  useEffect(() => {
    const GetCause = async () => {
      try {
        const response = await getCause();
        setCause(response.data);
      } catch (error) {
        console.log("Error Fetching data Cause", error);
      }
    };
    GetCause();
  }, []);

  return (
    <div>
      <div className="content">
        {/* <!--======= RECENT CASES =========-->*/}
        <section className="cases">
          <div className="container">
            {/* <!--======= TITTLE =========-->*/}
            <div className="tittle">
              <h2>
                Recent <span>Causes </span>
              </h2>
              <p>
                Our <span className="underline">charity helps</span> those
                people who have no hope
              </p>
            </div>

            {/* <!--======= CASES ROW =========-->*/}
            <ul className="row">
              {/* <!--======= CASE 1 =========-->*/}

              

              {/* <!--======= CASE 1 =========-->*/}
              {cause.map((cau, i) => (
                <li className="col-sm-4">
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
                      

                      {/* <!--======= LINK =========-->*/}aa
                      <a href="#." className="font-lora head">
                     {cau.Title}
                      </a>
                      <hr />
                      <p>
                       {cau.Description}
                      </p>
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
              <li className="col-sm-4">
                {" "}
                <span className="big-text font-lora">
                  How <small>Can You Help?</small>
                </span>
                <hr />
                <p>
                  Enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea cmodo conse quat. Duis aute
                  irure dolor in reprehenderit inas voluptate velit esse
                  cillum...
                </p>
                <a href="#." className="btn">
                  Learn More <i className="fa fa-arrow-circle-o-right"></i>
                </a>{" "}
              </li>

              {/* <!--======= FEATURED =========-->*/}
              <li className="col-sm-4">
                <ul className="help-fea">
                  <li className="font-lora">
                    <img src="src/assets/images/help-icon-1.png" alt="" /> Media
                  </li>
                  <li className="font-lora">
                    <img src="src/assets/images/help-icon-2.png" alt="" />{" "}
                    Become Volunteer
                  </li>
                  <li className="font-lora">
                    <img src="src/assets/images/help-icon-3.png" alt="" /> Make
                    a Gift
                  </li>
                  <li className="font-lora">
                    <img src="src/assets/images/help-icon-4.png" alt="" /> Send
                    Donation
                  </li>
                  <li className="font-lora">
                    <img src="src/assets/images/help-icon-5.png" alt="" /> Give
                    Helping Hand
                  </li>
                </ul>
              </li>
              {/* <!--======= DONATION IMAGE =========-->*/}
              <li className="col-sm-4">
                {" "}
                <img
                  className="img-responsive"
                  src="src/assets/images/donate-img.png"
                  alt=""
                />{" "}
              </li>
            </ul>
          </div>
        </section>

        {/* <!--======= DONATION COUNTER =========-->*/}
        <section className="don-counter">
          <div className="overlay">
            <div className="container">
              {/* <!--======= COUNTER ROWS =========-->*/}
              <div className="row" id="counters">
                <div className="col-md-6">
                  <ul className="row">
                    {/* <!--======= NO OF CASES =========-->*/}
                    <li className="col-sm-6">
                      <div className="row">
                        {/* <!--======= ICON =========-->*/}
                        <div className="col-xs-3">
                          <i className="fa fa-heart-o"></i>
                        </div>
                        <div className="col-xs-9">
                          <span className="count1"></span>
                          <p>No of Causes solved</p>
                        </div>
                      </div>
                    </li>

                    {/* <!--======= VOLUNTEERS HAVE =========-->*/}
                    <li className="col-sm-6">
                      <div className="row">
                        {/* <!--======= ICON =========-->*/}
                        <div className="col-xs-3">
                          <i className="fa fa-users"></i>
                        </div>
                        <div className="col-xs-9">
                          {" "}
                          <span className="count2"></span>
                          <p>volunteers have</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* <!--======= ROWS 2 =========-->*/}
                <div className="col-md-6">
                  <ul className="row">
                    {/* <!--======= ACHRIVED  =========-->*/}
                    <li className="col-sm-6">
                      <div className="row">
                        {/* <!--======= ICON =========-->*/}
                        <div className="col-xs-3">
                          <i className="fa fa-thumbs-o-up"></i>
                        </div>
                        <div className="col-xs-9">
                          {" "}
                          <span className="count3"></span>
                          <p>achived donators</p>
                        </div>
                      </div>
                    </li>
                    {/* <!--======= SAVED CHILDRESNS =========-->*/}
                    <li className="col-sm-6">
                      <div className="row">
                        {/* <!--======= ICON =========-->*/}
                        <div className="col-xs-3">
                          <i className="fa fa-smile-o"></i>
                        </div>
                        <div className="col-xs-9">
                          {" "}
                          <span className="count4"></span>
                          <p>Saved Childrens</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--======= LATEST DONATORES =========-->*/}
        <section className="donatores">
          <div className="container">
            {/* <!--======= TITTLE =========-->*/}
            <div className="tittle">
              <h2>
                Latest <span>Donaters</span>
              </h2>
              <p>Our charity helps those people who have no hope</p>
            </div>

            {/* <!--======= DONATOR ROWS =========-->*/}
            <div className="row">
              {/* <!--======= DONATOR 1 =========-->*/}
              <div className="col-md-6">
                <ul className="row">
                  {/* <!--======= DONATOR 1 =========-->*/}
                  <li className="col-sm-6">
                    <div className="avatar">
                      {" "}
                      <img
                        className="img-responsive"
                        src="src/assets/images/avatar-1.jpg"
                        alt=""
                      />{" "}
                    </div>
                    <div className="donor-details">
                      <h5>Chris Binva</h5>
                      <p className="font-lora">Nikan Manager, Sydney</p>
                      <span className="font-lora">
                        Donated : <strong>$1052</strong>
                      </span>{" "}
                    </div>
                  </li>

                  {/* <!--======= DONATOR 2 =========-->*/}
                  <li className="col-sm-6">
                    <div className="avatar">
                      {" "}
                      <img
                        className="img-responsive"
                        src="src/assets/images/avatar-2.jpg"
                        alt=""
                      />{" "}
                    </div>
                    <div className="donor-details">
                      <h5>Jenny Rose</h5>
                      <p className="font-lora">Nikan Manager, Sydney</p>
                      <span className="font-lora">
                        Donated : <strong>$252</strong>
                      </span>{" "}
                    </div>
                  </li>
                </ul>
              </div>

              {/* <!--======= DONATOR ROW =========-->*/}
              <div className="col-md-6">
                <ul className="row">
                  {/* <!--======= DONATOR 1 =========-->*/}
                  <li className="col-sm-6">
                    <div className="avatar">
                      {" "}
                      <img
                        className="img-responsive"
                        src="src/assets/images/avatar-3.jpg"
                        alt=""
                      />{" "}
                    </div>
                    <div className="donor-details">
                      <h5>Benny Doe</h5>
                      <p className="font-lora">Nikan Manager, Sydney</p>
                      <span className="font-lora">
                        Donated : <strong>$1052</strong>
                      </span>{" "}
                    </div>
                  </li>

                  {/* <!--======= DONATOR 2 =========-->*/}
                  <li className="col-sm-6 become-donor">
                    <div className="donor-details">
                      <h4>
                        Become <strong>Donator</strong>
                      </h4>
                      <hr />
                      <p className="font-lora">
                        {" "}
                        Quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea cmodo conse quat.{" "}
                      </p>
                      <a href="#." className="btn">
                        JOIN NOW!
                      </a>{" "}
                    </div>
                  </li>
                </ul>
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
                Fresh From The <span>Blog</span>
              </h2>
              <p>Every charitable act is a stepping stone toward heaven</p>
            </div>

            {/* <!--======= BLOG ROW =========-->*/}

            <div className="row">
              {/* <!--======= BLOG BIG VIDEO =========-->*/}
              <div className="col-md-6">
                <div className="video-blog">
                  {" "}
                  <img
                    className="img-responsive"
                    src="src/assets/images/blog-1.jpg"
                    alt=""
                  />{" "}
                  <a href="#.">
                    <i className="fa fa-caret-right"></i>
                  </a>{" "}
                </div>
              </div>

              {/* <!--======= BLOG RIGTH =========-->*/}

              <div className="col-md-6">
                {/* <!--======= BLOG 2 =========-->*/}

                <ul className="row">
                  <li className="col-xs-4">
                    {" "}
                    <a href="#.">
                      <img
                        className="img-responsive"
                        src="src/assets/images/blog-2.jpg"
                        alt=""
                      />
                    </a>{" "}
                  </li>
                  <li className="col-xs-8">
                    {" "}
                    <a className="font-lora title" href="#.">
                      The New Charity psd TemplateDesign
                    </a>{" "}
                    <span className="font-lora">
                      MAy 14, 2015 | By Admin | 4 comments
                    </span>
                    <p>
                      Perspiciatis unde omnis iste natus error sit ametsan
                      voluptatem accusantium[...]{" "}
                    </p>
                    <a href="#." className="btn">
                      Read More <i className="fa fa-arrow-circle-o-right"></i>
                    </a>{" "}
                  </li>
                </ul>
                {/* <!--======= BLOG 3 =========-->*/}

                <ul className="row">
                  <li className="col-xs-4">
                    {" "}
                    <a href="#.">
                      <img
                        className="img-responsive"
                        src="src/assets/images/blog-3.jpg"
                        alt=""
                      />
                    </a>{" "}
                  </li>
                  <li className="col-xs-8">
                    {" "}
                    <a className="font-lora title" href="#.">
                      The New Charity psd TemplateDesign
                    </a>{" "}
                    <span className="font-lora">
                      MAy 14, 2015 | By Admin | 4 comments
                    </span>
                    <p>
                      Perspiciatis unde omnis iste natus error sit ametsan
                      voluptatem accusantium[...]{" "}
                    </p>
                    <a href="#." className="btn">
                      Read More <i className="fa fa-arrow-circle-o-right"></i>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <!--======= TESTIMONIALS =========-->*/}
        <section className="testi">
          <div className="container">
            {/* <!--======= ROW =========-->*/}
            <div className="row">
              <div className="col-md-6">
                <h3>
                  <strong>WHAT</strong> Our Donaters Say
                </h3>

                {/* <!--======= SLIDES =========-->*/}
                <section>
                  {/* <!--======= SLIDER =========-->*/}
                  <div className="testi-slides">
                    {/* <!--======= SLIDER 1 =========-->*/}
                    <div className="item-slide">
                      <p>
                        Cum sociis natoque penatibus et magnis dis parturient
                        salos montes ascetur ridiculus. mus. Morbi nunc odio
                        gravida at cursus. Nultl dui. Fusce feugiat male suada
                        odio. Morbi nunc odio gravida at cursus.
                      </p>
                      <h6>
                        <strong className="font-lora">William Smith </strong>
                        (new world marketing director)
                      </h6>
                    </div>

                    {/* <!--======= SLIDER 1 =========-->*/}
                    <div className="item-slide">
                      <p>
                        Cum sociis natoque penatibus et magnis dis parturient
                        salos montes ascetur ridiculus. mus. Nultl dui. Fusce
                        feugiat male suada odio. Morbi nunc odio gravida at
                        cursus. Morbi nunc odio gravida at cursus.
                      </p>
                      <h6>
                        <strong className="font-lora">William Smith </strong>
                        (new world marketing director)
                      </h6>
                    </div>

                    {/* <!--======= SLIDER 1 =========-->*/}
                    <div className="item-slide">
                      <p>
                        Cum sociis natoque penatibus et magnis dis Morbi nunc
                        odio gravida at cursus. parturient salos montes ascetur
                        ridiculus. mus. Nultl dui. Fusce feugiat male suada
                        odio. Morbi nunc odio gravida at cursus.
                      </p>
                      <h6>
                        <strong className="font-lora">William Smith </strong>
                        (new world marketing director)
                      </h6>
                    </div>
                  </div>
                </section>
              </div>

              {/* <!--======= RIGHT IMAGES =========-->*/}
              <div className="col-md-6 with-bg-drk">
                {" "}
                <img
                  className="img-responsive"
                  src="src/assets/images/feed-img.png"
                  alt=""
                />{" "}
              </div>
            </div>
          </div>
        </section>

        {/* <!--======= PROUND =========-->*/}
        <section className="proud">
          <h1>27,514</h1>
          <h2>
            We are Really Proud of Our Kind <i className="fa fa-heart"></i>{" "}
            <strong>Voluntaries</strong>.
          </h2>
        </section>
      </div>
      {/*<!--Fin del content-->*/}
    </div>
  );
};

export default Content;
