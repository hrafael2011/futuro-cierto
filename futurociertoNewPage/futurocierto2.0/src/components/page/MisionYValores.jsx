import React,{useState,useEffect,useRef} from "react";
import { getMissionValue } from "../../api/futuroCiertoContentApi";
import { Link, Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "../Banner";
import Countdown from "../Countdown";

const MisionYValores = () => {

  const [missionVal, setMissionVal] = useState([])

  useEffect(()=>{
      const GetMisionVal = async () =>{
        try{
          const response =  await getMissionValue();
          setMissionVal(response.data)
        }catch(error){
          console.log('Error fetching data', error)
        }
      }
      GetMisionVal()
      
  },[]);


  const footerRef = useRef(null);
  const countdownref = useRef(null);


 const ScrollToRef =(ref) =>{
  if(ref.current){
    ref.current.scrollIntoView({behavior:'smooth'})
  }
 };

  return (
    <>
       <Header 
        onContactClick={()=>ScrollToRef(footerRef)} 
        onCoundownClick={()=>ScrollToRef(countdownref)}
      />
        <Banner/>
        <Countdown ref={countdownref}/>
      <Outlet/>



{missionVal.map((mval, i)=>(
  <section className="grid grid-cols-1  md:my-64 max-h-[70%] mb-[30%]   overflow-visible relative z-0">
        <div className="flex flex-col mb-[4%] xl:mb-[5%] sm:mb-[10%] custom1:mb-[15%] custom2:mb-[40%] w-[75%] mx-[12%]  border-t border-green-400 h-[220px] overflow-visible relative z-0">
          <div key={i} className=" ml-[45%]  xl:ml-[42%] sm:ml-[40%] custom1:ml-[30%]  custom2:ml-[35%] mb-[-25px] absolute -top-9 text-6xl font-bold relative z-10 bg-white w-48">
            {mval.Title_mission}
          </div>
          <div className="flex flex-col  ml-12 mt-8  ">
            <span className="pr-4 text-6xl ml-[45%] my-[12px] text-green-400">
              <i class="fa-solid fa-thumbtack"></i>
            </span>
            <div key={i} className="w-[75%] custom1:w-[85%]  w-[75%] custom2:w-[90%] mx-[12%] custom1:mx-[8%] custom2:mx-[4%] text-center custom1:text-justify custom2:text-justify text-2xl">
             {mval.Content_mission}
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-[4%] xl:mb-[5%] sm:mb-[10%] custom1:mb-[15%] custom2:mb-[10%] w-[75%] mx-[12%]  border-t border-green-400 h-[220px] overflow-visible relative z-0">
          <div  key={i} className=" ml-[45%] xl:ml-[39%] sm:ml-[36%] custom1:ml-[30%]  custom2:ml-[25%] mb-[-25px] absolute -top-9 text-6xl font-bold relative z-10 bg-white w-64">
          {mval.Title_objetive}
          </div>
          <div className="flex flex-col  ml-12 mt-8  ">
            <span className="pr-4 text-6xl ml-[45%] my-[12px] text-green-400">
              <i class="fa-solid fa-bullseye"></i>
            </span>
            <div className="w-[75%] custom1:w-[85%]  w-[75%] custom2:w-[90%] mx-[12%] custom1:mx-[10%] custom2:mx-[4%] text-center custom1:text-justify custom2:text-justify text-2xl">
            {mval.Content_objetive}
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-[4%] sm:mb-[10%] custom1:mb-[15%] custom2:mb-[15%] w-[75%] mx-[12%]  border-t border-green-400 h-[220px] overflow-visible relative z-0">
          <div className=" ml-[45%] xl:ml-[39%] custom1:ml-[30%]  custom2:ml-[20%] mb-[-25px] absolute -top-9 text-6xl font-bold relative z-10 bg-white w-64">
          {mval.Title_motivation}
          </div>
          <div className="flex flex-col  ml-12 mt-8  ">
            <span className="pr-4 text-6xl ml-[45%] my-[12px] text-green-400">
              <i class="fa-solid fa-certificate"></i>
            </span>
            <div className="w-[75%] custom1:w-[85%]  w-[75%] custom2:w-[90%] mx-[12%] custom1:mx-[8%] custom2:mx-[4%] text-center custom1:text-justify custom2:text-justify text-2xl">
            {mval.Content_motivation}
            </div>
          </div>
        </div>
        
        

        
      </section>

))}

      

      <Footer ref={footerRef}/>
    </>
  );
};

export default MisionYValores;
