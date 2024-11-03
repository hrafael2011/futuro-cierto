import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
//import { getNavigation } from '../JS/ApiService';
import { getNav,getLogo } from '../api/futuroCiertoContentApi';



const Header = ({onContactClick, onCoundownClick}) => {

  const[nav, setNav] = useState([])
  const[logo, setLogo] = useState([])
  const[navUrl, setNavURL] = useState('')
 

  useEffect(() => {
    const loadNav = async () => {
      try {
        const res = await getNav();
        setNav(res.data);  // Actualizar el estado con los datos recibidos
        setNavURL(res.data[0].Url)
        console.log('Estos son los datos del nav', res)
      } catch (error) {
        console.error("Error fetching navigation data:", error);
        // Aquí podrías manejar el error, mostrar un mensaje o hacer otra acción.
      }
    };
  
    loadNav();
  }, []);


  useEffect(()=>{
    const loadLogo =  async () =>{
      try{

        const response = await getLogo();
        setLogo(response.data);
      }catch(error){
        console.error('Error fetching')
  
      }
    };
    loadLogo();
  },[]);

  
  return (
    <>
      
      {/*<!--======= TOP BAR =========-->*/}
  <div className="top-bar">
    <div className="container">
      <ul className="left-bar-side">
        <li>
          <p className="font-lora"><i><img src="src/assets/images/top-bar-icon.png" alt=""/></i> No one has Ever Become Poor from Giving! </p>
        
        </li>
      </ul>
      <ul className="right-bar-side social_icons">
        <li className="padding-r-20">
          <p className="font-lora">Phone: (01) 800 433 633</p>
        </li>
        <li>
          <p className="font-lora">Mail: Info@example.com</p>
        </li>
      </ul>
    </div>
  </div>
  
  
  {/*<!--======= HEADER START =========-->*/}
  <header className="sticky">
    <div className="container"> 
            
      {/*<!--======= LOGO =========-->*/}
      <div className="logo"> 
        <Link to={navUrl}>
          {logo.map((logoItem, i)=>(
            <img key={logoItem.LogoID} src={logoItem.Image} alt={logoItem.TextAlt} /> 
          ))}
        
        </Link> 
        </div>
      
     {/*<!--======= DONATE NOW BTN =========-->*/} 
      <div className="btn-right"> <a href="#make-donation" className="btn popup-with-zoom-anim"><i className="fa fa-heart-o"></i>donate now</a> </div>
    </div>
    
    
    {/*<!--======= NAVIGATION =========-->*/}

    
      
        
    <nav>
    <div className="container">
        <ul id="ownmenu" className="ownmenu">
          
           {nav.map((navItem, i)=>(
              <li key={i}>
              {navItem.PageName === 'Contacto' ? (
                  <a 
                      href="#contacto" 
                      onClick={(e) => {
                          e.preventDefault(); 
                          onContactClick();
                      }}
                  >
                      {navItem.PageName}
                  </a>
              ) : navItem.PageName === 'Donar' ? (
                  <a 
                      href="#donar" 
                      onClick={(e) => {
                          e.preventDefault();
                          onCoundownClick(); // Llama a la función de scroll para "Donar"
                      }}
                  >
                      {navItem.PageName}
                  </a>
              ) : (
                  <Link to={navItem.Url}>{navItem.PageName}</Link>
              )}
          </li>
      ))}
          
        {/*
          <li className="active"><Link to="/">Inicio</Link>
            <ul className="dropdown">
              <li><a href="02-Home.html">Home 2</a></li>
              <li><a href="03-Home.html">Home 3</a></li>
            </ul>
          </li>
          <li><Link to="/quienes-somos">quienes somos </Link></li>
          <li><Link to="/mision-valores">Misión y Valores </Link></li>
          <li><Link to="/educacion">Eduación </Link></li>
          <li><Link to="/noticias">noticias </Link></li>
          <li><Link to="/contacto">contactos </Link></li>
          <li><Link to="/donar">donar </Link> </li>
           */}
          
          
        </ul>
      </div>
    </nav>
    
    
  </header>
  {/*<!--======= HEADER END =========--> */}
    </>
  )
}

export default Header
