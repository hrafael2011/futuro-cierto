import React, {useEffect, useState,useRef} from 'react'
import { useParams, Outlet, Link } from 'react-router-dom'
import { getEducationID } from '../../api/futuroCiertoContentApi'
import { format } from 'date-fns'

import Header from "../Header";
import Footer from "../Footer";
import Countdown from '../Countdown';



const EducacionDetalles = () => {

    const[EducationID, setEducationID] = useState(null);
    const {id} = useParams();

    useEffect(()=>{

        const GeteducationId = async () =>{
            try{
                const response = await getEducationID(id);
                setEducationID(response.data)
                console.log("Estos son los datos de education ID",response)
            }catch(error){
                console.log('Error Fetching data educationID', error)
            }
        }
        GeteducationId()
    }, [id]);

    const footerRef = useRef(null);
    const countdownref = useRef(null);


 const ScrollToRef =(ref) =>{
  if(ref.current){
    ref.current.scrollIntoView({behavior:'smooth'})
  }
 };

 if(!EducationID) return <div>Loading...</div>

    const formatedDate = format(new Date(EducationID.CreateAt), 'dd/MM/yyy');
  return (
    <>

        <Header 
        onContactClick={()=>ScrollToRef(footerRef)} 
        onCoundownClick={()=>ScrollToRef(countdownref)}
      />
       <Countdown ref={countdownref}/>
      <Outlet/>

       
      
       
    <section className='flex flex-col w-[90%] xl:w-[90%] sm:w-[85%] mx-[5%] sm:mx-[7%] mt-[5%] mb-[15%]' >
    <ol class="breadcrumb">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/educacion">Educación</Link></li>
        <li class="active ml-4">Publicada: {formatedDate}</li>
    </ol>

       <h1 className='font-sans font-bold lg:text-6xl sm:text-5xl custom1:text-5xl custom2:text-4xl mb-8 '  >{EducationID.Title}</h1>
       <img className='mb-8 w-[600px]' src={EducationID.Image} alt={EducationID.TextAlt} />
       <div
                    className='text-2xl lg:w-[600px] sm:w-[530px] custom1:w-[485px] pb-8'
                    dangerouslySetInnerHTML={{ __html: EducationID.formatted_text}}
                />

    </section>

    <Footer ref={footerRef}/>
    
    </>
  )
}

export default EducacionDetalles