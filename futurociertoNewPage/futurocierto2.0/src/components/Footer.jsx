import React, {forwardRef} from 'react'

const Footer = forwardRef((props, ref) =>{


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
            <li className="col-sm-6 shadow">
              <ul className="social_icons">
                <li className="facebook"><a href="#."><i className="fa fa-facebook"></i></a></li>
                <li className="twitter"><a href="#."><i className="fa fa-twitter"></i></a></li>
                <li className="googleplus"><a href="#."><i className="fa fa-google-plus"></i></a></li>
                <li className="instagram"><a href="#."><i className="fa fa-instagram"></i></a></li>
                <li className="soundcloud"><a href="#."><i className="fa fa-rss"></i></a></li>
              </ul>
              
              {/*<!--=/====== ADDRESS =========-->*/}
              <h6>keep in touch</h6>
              <p>Address : 44 New Design Street,
                Melbourne 005 </p>
              <p>Phone : (01) 800 433 633</p>
              <p>Email : info@Example.com</p>
              <div className="subcribe">
                <form>
                  <input type="text" placeholder="Email Address" required/>
                  <button type="submit"><i className="fa fa-sign-in"></i></button>
                </form>
              </div>
            </li>
            
            {/*<!--=/====== USEFULL LINKS =========-->*/}
            <li className="col-sm-6 padding-l-60">
              <h6>useful links</h6>
              <ul className="links">
                <li><a href="#.">About Us</a></li>
                <li><a href="#.">Meet The Team</a></li>
                <li><a href="#.">Volunteers</a></li>
                <li><a href="#.">Service Provided</a></li>
                <li><a href="#.">Latest News</a></li>
                <li><a href="#.">Contact Us</a></li>
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
              <h6>Donations</h6>
              <ul className="links">
                <li><a href="#.">How to Donate</a></li>
                <li><a href="#.">Donation List</a></li>
                <li><a href="#.">Recent Causes</a></li>
                <li><a href="#.">FAQ</a></li>
                <li><a href="#." className="btn">Donate now!</a></li>
              </ul>
            </li>
          </ul>
        </div>
        {/*<!--=/====== FOOTER ROW 2 =========-->*/} 
      </div>
    </div>
    
    {/*<!--=/====== RIGHTS =========-->*/}
    <div className="rights">
      <p className="text-uppercase">Copyright © 2015 social welfare. All Rights Reserved.</p>
    </div>
  </footer>

{/*<!--=/====== MAKE DONATION POPUP START =========-->*/}
  <div id="make-donation" className="donation-pop zoom-anim-dialog mfp-hide">
    <h6>Make a Donation</h6>
    {/*<!--=/====== DONATE LIGHT BOX =========-->*/}
    <div className="pop-inner">
      <form>
        <label> Project You Want To donate
          <input type="text" name="project-name"/>
        </label>
        <label>Your Donation</label>
        <ul className="dona-amount">
          <li><a href="#.">$10</a></li>
          <li className="active"><a href="#.">$25</a></li>
          <li><a href="#.">$50</a></li>
          <li><a href="#.">$75</a></li>
          <li><a href="#.">$100</a></li>
          <li><a href="#.">Others</a></li>
        </ul>
        
        {/*<!--=/====== INFORMATION =========-->*/}
        <ul className="row per-info">
          <li className="col-lg-12">
            <label>Your Information</label>
          </li>
          <li className="col-sm-6">
            <input type="text" name="first name" placeholder="First Name"/>
          </li>
          <li className="col-sm-6">
            <input type="text" name="last name" placeholder="Last Name"/>
          </li>
          <li className="col-sm-6">
            <input type="email" name="Email" placeholder="Email"/>
          </li>
          <li className="col-sm-6">
            <input type="text" name="phone" placeholder="Phone"/>
          </li>
        </ul>
        
        {/*<!--=/====== CRADIT CARD INFO =========-->*/}
        <ul className="row per-info">
          <li className="col-lg-12">
            <label>Credit cArd Information</label>
          </li>
          <li className="col-sm-6">
            <input type="text" name="first name" placeholder="Card Holder Name"/>
            <label>As Appers on card</label>
          </li>
          <li className="col-sm-6">
            <input type="text" name="last name" placeholder="Credit card number"/>
            <label>VISA  MC  AMEX  DS</label>
          </li>
          <li className="col-sm-6">
            <input type="email" name="Email" placeholder="Card cvv"/>
            <label>what is this?</label>
          </li>
          <li className="col-sm-3">
            <input type="text" name="phone" placeholder="Valid From"/>
            <label>MM/YYYY</label>
          </li>
          <li className="col-sm-3">
            <input type="text" name="card" placeholder="Valid thru"/>
          </li>
          <li className="col-sm-12">
            <button type="submit" className="btn">Send donation</button>
          </li>
        </ul>
      </form>
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
