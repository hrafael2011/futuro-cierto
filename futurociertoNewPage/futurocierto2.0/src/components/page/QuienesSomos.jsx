import React,{useState, useEffect, useRef} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getMissionValue } from '../../api/futuroCiertoContentApi'
import { getWoWeAre } from '../../api/futuroCiertoContentApi'
import Header from '../Header'
import Footer from '../Footer'
import Banner from '../Banner'
import Countdown from '../Countdown'




const QuienesSomos = () => {

  const[woWeAre,setwoWeAre] = useState([])

  useEffect(()=>{

    const GetWoWeAre = async  () =>{
      try{
        const res = await getWoWeAre()
        console.log('Estos son los datos de WoWeare', res)
        setwoWeAre(res.data)
      }catch(error){
        console.log('Error Fetching data', error)
      }
    }
    GetWoWeAre()
  },[])

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
      <Outlet/>

      {/* <!--======= HOW CAN YOU HELP =========-->*/}
      <section className="how-can-help ">
        <div className="container">
          <ul className="row md:mr-8 md:w-400" id="WoWeARe">
            {/* <!--======= HOW CAN YOU HELP =========-->*/}

            {Array.isArray(woWeAre) && woWeAre.length > 0 ? (
              woWeAre.map((value, i) => (
                <li key={i} className="col-sm-8 ">
                  {" "}
                  <span className="big-text font-lora">
                    <small className='font-sans'>{value.Title}</small>
                  </span>
                  <hr />
                  <p>{value.Content}</p>
                </li>
              ))
            ) : (
              <p>No hay datos disponibles.</p>
            )}
          </ul>
        </div>
      </section>

      <div className='flex flex-col text-center mt-16'>
        <h1 className='text-6xl text-gray-500 uppercase font-sans mb-32'>Que hacemos</h1>
        <div className="grid grid-cols-3 lg:mx-[15%] lg:grid-cols-3 ml-[250px]  md:grid-cols-2 md:w-3/4 md:ml-[50px] sm:grid-cols-1 gap-2 custom1:grid-cols-1 custom2:grid-cols-1 p-4 mx-[225px] mb-16  custom1:mx-[25%] custom2:mx-[15%] cursor-pointer">
          <div className="group p-2   w-[250px] h-[200px] flex flex-col items-center text-center hover:bg-gray-100 ">
            <i className="text-8xl   text-center text-green-400 my-[15px]  fa-solid fa-person-digging group-hover:text-green-600"></i>
            <span className="text-gray-500 uppercase text-2xl group-hover:font-bold">
              Contruir proyectos de viviendas
            </span>
          </div>
          <div className="group p-2  w-[250px] h-[200px] flex flex-col items-center text-center hover:bg-gray-100  ">
            <i className="text-8xl  text-green-400  my-[15px] fa-solid fa-leaf group-hover:text-green-600"></i>
            <span className="text-gray-500 uppercase text-2xl group-hover:font-bold">
              Cuidar el medio ambiente a lo largo y ancho de nuestra isla
            </span>
          </div>
          <div className="group p-2 w-[250px] h-[200px] flex flex-col items-center text-center hover:bg-gray-100 ">
            <i className="text-8xl  text-green-400 my-[15px] fa-solid fa-suitcase   group-hover:text-green-600 "></i>
            <span className="text-gray-500 uppercase text-2xl  group-hover:font-bold">
              Creación de micro empresas para combatir el desempleo
            </span>
          </div>
          <div className="group p-2  w-[250px] h-[200px] flex flex-col items-center text-center mt-6 hover:bg-gray-100">
            <i className="text-8xl  text-green-400 my-[15px]  fa-solid fa-house group-hover:text-green-600"></i>
            <span className="text-gray-500 uppercase text-2xl group-hover:font-bold">
              Viviendas Dignas para los pobres
            </span>
          </div>
          <div className="group p-2 w-[250px] h-[200px] flex flex-col items-center text-center mt-6 hover:bg-gray-100 ">
            <i className="text-8xl   text-green-400 my-[15px]  fa-solid fa-laptop group-hover:text-green-600"></i>
            <span className="text-gray-500 uppercase text-2xl group-hover:font-bold">
              Alfabetización digital
            </span>
          </div>
          <div className="group p-2 w-[250px] h-[200px] flex flex-col items-center text-center mt-6 hover:bg-gray-100">
            <i className="text-8xl   text-green-400 my-[15px] fa-solid fa-dollar-sign group-hover:text-green-600"></i>
            <span className="text-gray-500 uppercase text-2xl group-hover:font-bold">
              Gran colecta anual nacional e internacional
            </span>
          </div>
        </div>
      </div>

      <Footer ref={footerRef} />
    </div>
  );
}

export default QuienesSomos
