import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
//import { getNavigation } from '../JS/ApiService';
import { getNav,getLogo } from '../api/futuroCiertoContentApi';



const Header = ({onContactClick, onCoundownClick,openModal}) => {

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
          <p className="font-lora"><i><img src="src/assets/images/top-bar-icon.png" alt=""/></i> ¡Nadie se ha hecho pobre por dar! </p>
        
        </li>
      </ul>
      <ul className="right-bar-side social_icons">
        <li className="padding-r-20">
          <p className="font-lora">Telefono: (809) 696 - 7681</p>
        </li>
        <li>
          <p className="font-lora">Mail: fundacionfututocierto@gmail.com</p>
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
      <div className="btn-right"> <button onClick={openModal} className="btn popup-with-zoom-anim"><i className="fa fa-heart-o"></i>Donar Ahora</button> </div>
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
          
        
          
        </ul>
      </div>
    </nav>
    
    
  </header>
  {/*<!--======= HEADER END =========--> */}
    </>
  )
}

export default Header
