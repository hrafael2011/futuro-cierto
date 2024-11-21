import React, {useState, useEffect} from 'react'
import { getBanner } from '../api/futuroCiertoContentApi';

const Banner = () => {


  const[banner, setBanner] = useState([]);


  useEffect (()=>{
    const loadBanner = async () =>{
     try{
        const response = await getBanner();
        setBanner(response.data)
        console.log('Estos son los datos del banner', response)
      }
      catch(error){
        console.error('error feching data', error)
      }
    };
    loadBanner()
  },[]);






let bannerImage = window.location.pathname;

/*

if(bannerImage.length == ''){
  bannerImage = window.location.pathname
}else{
  bannerImage = window.location.pathname.substring(1)
}*/

console.log('Imagen del Banner',bannerImage)


  return (
    <div>
      {/*<!--======= BANNER =========-->*/}
  <div id="banner">
    <div className="flex-banner">
      <ul className="slides">
        
        {/*<!--======= BANNER SLIDE 1 =========-->*/}
        <li> 
        {banner.map((bannerItem, i)=>(
           bannerItem.url_name == bannerImage &&(
          
          <img key={bannerItem.BannerID} src={bannerItem.Image} alt={bannerItem.TextAlt} /> )

        ))}
        
          
          
         
        </li>
          {/*<!--======= BANNER SLIDE 2 =========-->*/}
        
       
      </ul>
    </div>
  </div>
    </div>
  )
}

export default Banner
