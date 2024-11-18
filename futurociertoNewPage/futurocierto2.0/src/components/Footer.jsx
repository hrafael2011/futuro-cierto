import React, {forwardRef, useState, useEffect} from 'react'
import { Link    } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { getContact, getNav, getaccountBank } from '../api/futuroCiertoContentApi';



const Footer = forwardRef((props, ref) =>{

  const [contact, setContact] = useState([]);
  const[nav, setNav] = useState([])
  const[accountBank, setAccountBank] = useState([])
  
  useEffect(()=>{
    const GetContact = async () =>{

      try {
         const response = await getContact()  
         setContact(response.data)
      
      } catch (error) {
        console.log('Error Feching Data contact', error)
      }
    }
    GetContact()
  },[]);


  useEffect(() => {
    const loadNav = async () => {
      try {
        const res = await getNav();
        setNav(res.data);  // Actualizar el estado con los datos recibidos
        console.log('Estos son los datos del nav', res)
      } catch (error) {
        console.error("Error fetching navigation data:", error);
        // Aquí podrías manejar el error, mostrar un mensaje o hacer otra acción.
      }
    };
  
    loadNav();
  }, []);

  useEffect(()=>{
   const GetAccoutBank =  async() =>{
    try {
      const response = await getaccountBank()
      setAccountBank(response.data)
      console.log('Estos son los datos de BankAcount', response)
    } catch (error) {
      console.log('Error Fetching Data Account Bank', error)
      
    }
   }
   GetAccoutBank()
  },[]);



  return (
    <div>
      {/*<!--=/====== FOOTER =========-->*/}
  <footer ref={ref}>
    <div className="container"> 
      
      {/*<!--=/====== FOOTER ROW =========-->*/}
      <div className="row">
        <div className="col-md-6"> 
          
          {/*<!--=/====== FOOTER 1 =========-->*/}
          <ul className="row">
            
            {/*<!--=/====== KEEP IN TOUCH =========-->*/}
            {contact.map((conct, i)=>(

<li className="col-sm-6 shadow">
<ul className="social_icons">
  <li className="facebook"><Link to={conct.LinkFacebook}><i className="fa fa-facebook"></i></Link></li>
  <li className="twitter"><Link to={conct.LinkTweeter}><i className="fa fa-twitter"></i></Link></li>
  <li className="instagram"><Link to={conct.LinkInstagram}><i className="fa fa-instagram"></i></Link></li>
  
</ul>

{/*<!--=/====== ADDRESS =========-->*/}
<h6>Contactanos</h6>

<p>{conct.Phone}</p>
<p>{conct.Email}</p>

</li>



            ))}
            
            
            {/*<!--=/====== USEFULL LINKS =========-->*/}
            <li className="col-sm-6 padding-l-60">
              <h6>Enlaces Utiles</h6>
              <ul className="links">
                {nav.map((navi, i)=>(
                  
                  <li><Link to={navi.Url}>{navi.PageName != 'Contacto'&& navi.PageName != 'Donar'? navi.PageName:null}</Link></li>

                ))}
                
              </ul>
            </li>
          </ul>
        </div>
        
        {/*<!--=/====== FOOTER ROW 2 =========-->*/}
        <div className="col-md-6">
          <ul className="row">
            
            {/*<!--=/====== LATEST TWEET =========-->*/}
            <li className="col-sm-6">
              <div className="tweet">
                <h6>Latest Tweets</h6>
                <p>Eaque ipsa quae ab illo inventore veris 
                  quasi architecto beatae vitae dicta exp
                  enim ipsam voluptatem.</p>
                <a href="#.">http://socialwelfare/themeforest</a> <span><i className="fa fa-twitter-square"></i> 3.00 PM, 24 May 2015</span> </div>
            </li>
            
            {/*<!--=/====== DONATION =========-->*/}
            <li className="col-sm-6 padding-l-60">
              <h6>Donaciones</h6>
              <ul className="links">
                <li><Link to="/#ComoAyudar">Como Ayudar</Link></li>
               
                <li><Link to="/#Causas">Causas</Link></li>
                <li><a href="#." className="btn">Donar ahora</a></li>
              </ul>
            </li>
          </ul>
        </div>
        {/*<!--=/====== FOOTER ROW 2 =========-->*/} 
      </div>
    </div>
    
   
  </footer>

{/*<!--=/====== MAKE DONATION POPUP START =========-->*/}
  <div id="make-donation" className="donation-pop zoom-anim-dialog mfp-hide">
    <h6>Make a Donation</h6>
    {/*<!--=/====== DONATE LIGHT BOX =========-->*/}
    <div className="pop-inner">
     <table className='table'>
                <thead>
                  <tr>
                    <th>Banco</th>
                    <th>Moneda</th>
                    <th>Cuenta</th>
                  </tr>
                </thead>
                {accountBank.map((account, i)=>(

                        <tr key={i}>
                        <td>{account.Bank}</td>
                        <td>{account.Currency}</td>
                        <td>{account.Account}</td>
                        </tr>
                ))}
                
     </table>
    </div>
  </div>
  {/*<!--=/====== MAKE DONATION POPUP END =========-->*/} 
  
  {/*<!--=/====== BECOME A volunteer =========-->*/}
  <div id="volunteer" className="donation-pop zoom-anim-dialog mfp-hide">
    <h6>Become A volunteer</h6>
    {/*<!--=/====== DONATE LIGHT BOX =========-->*/}
    <div className="pop-inner">
      <form>
        
        {/*<!--=/====== CRADIT CARD INFO =========-->*/}
        <ul className="row per-info">
          <li className="col-lg-12">
            <label>give Your Information</label>
          </li>
          <li className="col-sm-6">
            <input type="text" name="first name" placeholder="First Name"/>
          </li>
          <li className="col-sm-6">
            <input type="text" name="last name" placeholder="LAst Name"/>
          </li>
          <li className="col-sm-6">
            <input type="email" name="Email" placeholder="Email Address"/>
          </li>
          <li className="col-sm-6">
            <input type="text" name="phone" placeholder="phone"/>
          </li>
          <li className="col-sm-6">
            <input type="text" name="phone" placeholder="Zip code"/>
          </li>
          <li className="col-sm-12">
            <textarea placeholder="Say Something..."></textarea>
          </li>
          <li className="col-sm-12">
            <button type="submit" className="btn">SUBMIT DETAILS</button>
          </li>
        </ul>
      </form>
    </div>
  </div>
    </div>
  );
});

export default Footer
