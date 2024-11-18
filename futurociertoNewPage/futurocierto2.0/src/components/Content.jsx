import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { getCause, getColloborator, getvideo, getNews, getEducation,getReflection } from "../api/futuroCiertoContentApi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};




const Content = () => {
  const [cause, setCause] = useState([]);
  const [colloborator, setColloborater] = useState([]);
  const [videos, setVideos] = useState([]) 
  const [news, setNews] = useState([]) 
  const [education, SetEducation] = useState([])
  const [refletion, Setrefletion] = useState([])
  const [visibleColloborator, setVisibleColoborator] = useState([4])
  const itemsPerPage = 4;


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


  useEffect(() => {
    const GetColloborator = async () => {
      try {
        const response = await getColloborator();
        setColloborater(response.data);
      } catch (error) {
        console.log("Error Fetching colloborator", error);
      }
    };
    GetColloborator();
  }, []);


  useEffect(()=>{
    const GetVideo = async ()=>{
      try{
        const response = await getvideo()
        setVideos(response.data)
        console.log("Respuesta de video", response)
      }catch(error){
        console.log('Error Feching Data video', error)
      }
      
    }
    GetVideo()
  },[]);
  
  useEffect(()=>{
    const Getnew = async ()=>{
      try{
        const response = await getNews()
        setNews(response.data[response.data.length -1])
       }catch(error){
        console.log('Error Feching Data News', error)
      }
      
    }
    Getnew()
  },[]);


  useEffect(()=>{
    const GetEducaction = async ()=>{
      try{
        const response = await getEducation()
        SetEducation(response.data[response.data.length -1])
       }catch(error){
        console.log('Error Feching Data education', error)
      }
      
    }
    GetEducaction()
  },[]);

  useEffect(()=>{
    const GetReflection = async ()=>{
      try{
        const response = await getReflection()
        Setrefletion(response.data)
        console.log('Estos son lo datos de reflection', response)
       }catch(error){
        console.log('Error Feching Data reflection', error)
      }
      
    }
    GetReflection()
  },[]);
  
// maneja el boton ver mas para aumentar los elementos visibles

const handleShowMore =() =>{
  setVisibleColoborator((prevVisibleitems) => prevVisibleitems + itemsPerPage)
}

const handleShowless =() =>{
  setVisibleColoborator(4)
}


const location = useLocation();

useEffect(()=>{
  if(location.hash === "#ComoAyudar"){
    scroller.scrollTo("howCanYouHelp", {
        smooth: true,
        duration: 500,
        offset: -70
   });
  }
},[location])


const locationCause = useLocation();

useEffect(()=>{
  if(locationCause.hash === "#Causas"){
    scroller.scrollTo("causes", {
        smooth: true,
        duration: 500,
        hashSpy: false,
        offset: -70
   });
  }
},[locationCause])

 


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
            <ul className="row" id="causes">
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
              <li className="col-sm-4" id='howCanYouHelp'>
                {" "}
                <span  className="big-text font-lora">
                  Como <small>¿Puedo ayudar?</small>
                </span>
                <hr />
                <p>
                  Enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea cmodo conse quat. Duis aute
                  irure dolor in reprehenderit inas voluptate velit esse
                  cillum...
                </p>
               
              </li>

              {/* <!--======= FEATURED =========-->*/}
              <li className="col-sm-4">
                <ul className="help-fea">
                  <li className="font-lora">
                    <img src="src/assets/images/help-icon-1.png" alt="" /> Siguendo Nuestras Redes Sociales
                  </li>
                  <li className="font-lora">
                    <img src="src/assets/images/help-icon-2.png" alt="" />{" "}
                    Convertiendote en Voluntario
                  </li>
                  <li className="font-lora">
                    <img src="src/assets/images/help-icon-3.png" alt="" /> Haciendo
                    un regalo
                  </li>
                  <li className="font-lora">
                    <img src="src/assets/images/help-icon-4.png" alt="" /> 
                    Donando
                  </li>
                  
                </ul>
              </li>
              {/* <!--======= DONATION IMAGE =========-->*/}
              <li className="col-sm-4">
                {" "}
                <img 
                  className=" w-[422px] h-[656px]"
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
            <div className="w-[100%] ">
              {/* <!--======= DONATOR 1 =========-->*/}
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 ">
                {colloborator.slice(0, visibleColloborator).map((collob, i)=>(

                  <ul className="w-[230px] pl-4 md:pl-4 lg:ml-4  md:ml-16  sm:ml-8 custom1:ml-48 custom2:ml-10 ">
                      <li key={i} className="mb-16 ">
                    <div className="avatar">
                      {" "}
                      <img
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

                    <div className=" blog flex justify-center">
                            {visibleColloborator < colloborator.length && (
                              
                              <a href="#." className="btn" onClick={handleShowMore}>
                                  Ver mas <i className="fa fa-arrow-circle-o-right"></i>
                              </a>
                                )}    

                            {visibleColloborator > 4 && (
                                    

                                    <a href="#." className="btn" onClick={handleShowless}>
                                        Ver Menos <i className="fa fa-arrow-circle-o-right"></i>
                                     </a>
                                )}

                    </div>
                                  

             {/* <!--======= DONATOR ROW =========-->*/}
              <div className="col-md-6">
                <ul className="row">
                  {/* <!--======= DONATOR 1 =========-->*/}
                 

                  {/* <!--======= DONATOR 2 =========-->*/}
                 
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
               
                  {videos.map((vide, i)=>(
                    <video width="600" height="370" key={i} controls >
                      <source src={vide.VideoFile} type="video/mp4"/>
                      <source src={vide.VideoFile} type="video/webm"/>
                    </video>
                    
                  ))}
                
                  
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
                        src={news.Image}
                        alt=""
                      />
                    </a>{" "}
                  </li>
                  <li className="col-xs-8">
                    {" "}
                    <a className="font-lora title" href="#.">
                      {news.Title}
                    </a>{" "}
                    <span className="font-lora">
                      Ultima noticia
                    </span>
                    <p>
                     
                     
                      <div dangerouslySetInnerHTML={news && news.Content?{ __html: news.formatted_text.slice(0,200)+' [...]'}:null} />
                      
                    </p>
                    <Link to={`noticias/${news.NewID}`} className="btn">
                      Leer Mas <i className="fa fa-arrow-circle-o-right"></i>
                    </Link>
                  </li>
                </ul>
                {/* <!--======= BLOG 3 =========-->*/}

                <ul className="row">
                  <li className="col-xs-4">
                    {" "}
                    <a href="#.">
                      <img
                        className="img-responsive"
                        src={education.Image}
                        alt={education.TextAlt}
                      />
                    </a>{" "}
                  </li>
                  <li className="col-xs-8">
                    {" "}
                    <a className="font-lora title" href="#.">
                     {education.Title}
                    </a>{" "}
                    <span className="font-lora">
                    Educación
                    </span>
                    <p>
                    <div dangerouslySetInnerHTML={education && education.Content?{ __html: education.formatted_text.slice(0,200)+' [...]'}:null} />
                    </p>
                    <Link to={`educacion/${education.EducationID}`} className="btn">
                      Leer Mas <i className="fa fa-arrow-circle-o-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
       

       
       

        {/* <!--======= TESTIMONIALS =========-->*/}

        {refletion.map((refle,i)=>(
           <section className="testi">
           <div className="container">
             {/* <!--======= ROW =========-->*/}
             <div className="row">
               <div className="col-md-6">
                 <h3>
                   <strong>Que</strong> Dicen nuestros Donadores 
                 </h3>
 
                 {/* <!--======= SLIDES =========-->*/}
                 <section>
                   {/* <!--======= SLIDER =========-->*/}
                   <div className="testi-slides">
                     {/* <!--======= SLIDER 1 =========-->*/}
                     <div className="carousel-container pb-[20px] item-slide ">
                      
                        <Slider {...settings}>
                          <div >
                            <div dangerouslySetInnerHTML={{ __html: refle.formatted_comment1}}/>
                          </div>
                          <div>
                          <div dangerouslySetInnerHTML={{ __html: refle.formatted_comment2}}/>
                          </div>
                          <div>
                          <div dangerouslySetInnerHTML={{ __html: refle.formatted_comment3}}/>
                          </div>
                        </Slider>
    </div>
       
 
                     {/* <!--======= SLIDER 1 =========-->*/}
                     
 
                     {/* <!--======= SLIDER 1 =========-->*/}
                    
                   </div>
                 </section>
               </div>
 
               {/* <!--======= RIGHT IMAGES =========-->*/}
               <div className="col-md-6 with-bg-drk">
                 {" "}
                 <img
                   className="img-responsive w-[556px] h-[462px]"
                   src={refle.Image}
                   alt=""
                 />{" "}
               </div>
             </div>
           </div>
         </section>
        ))}
       

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
