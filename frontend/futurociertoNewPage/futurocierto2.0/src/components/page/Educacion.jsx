import React , { useState, useEffect, useRef} from 'react'
import { Outlet, Link } from 'react-router-dom'
import { getEducation } from '../../api/futuroCiertoContentApi'
import Header from '../Header'
import Footer from '../Footer'
import Banner from '../Banner'
import Countdown from '../Countdown'
import ScrollToTop from '../ScrollToTop'


const Educacion = () => {

  const [education, setEducation] = useState([]);

  useEffect(() => {
    const GetEducation = async () => {
      try {
        const response = await getEducation  ();
        setEducation(response.data);
        console.log('Estos son los datos de Education',response)
      } catch (error) {
        console.log("Error Fetching Data", error);
        
      }
    };
    GetEducation();
  }, []);


  const footerRef = useRef(null);
  const countdownref = useRef(null);


 const ScrollToRef =(ref) =>{
  if(ref.current){
    ref.current.scrollIntoView({behavior:'smooth'})
  }
 };



  return (
    <div>
        <Header 
        onContactClick={()=>ScrollToRef(footerRef)} 
        onCoundownClick={()=>ScrollToRef(countdownref)}
      />
        <Banner/>
        <Countdown ref={countdownref}/>
        <ScrollToTop/>
      <Outlet/>

      <section className="flex flex-col  max-h-[80%]  w-[90%] ml-[5%] my-32">
      <ol class="breadcrumb">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/educacion">Educación</Link></li>
       
    </ol>
        <h1 className=" text-center text-7xl font-sans  mb-[40px]">Educación</h1>
       
        <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 md:mx-[1%] sm:grid-cols-1 custom1:grid-cols-1  custom2:grid-cols-1  sm:mx-[15%]">
                {education.map((edu, i) => (
              
              <Link to={`/educacion/${edu.EducationID}`}>
              <div key={i}  className="w-[300px] pb-8 mx-[15%] md:mx-[10%] sm:mb-16 custom1:mx-[%] custom1:mb-16 custom2:mb-16  custom2:mx-[10%] hover:bg-green-400 hover:text-white hover:underline">
                <div id="image">
                  <img className="w-[300px] h-[200px]" src={edu.Image} alt={edu.TextAlt} />
                </div>
                <div className="mt-6 text-3xl font-bold ml-2" id="title">{edu.Title}</div>
              </div>
              </Link>
            ))}
        </div>
     
      </section>
 
      <Footer ref={footerRef}/>
      
    </div>
  )
}

export default Educacion