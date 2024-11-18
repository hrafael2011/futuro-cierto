import { useState, useRef } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Content from './components/Content'
import Footer from './components/Footer'
import Countdown from './components/Countdown'
import ScrollToTop from './components/ScrollToTop'


const scrollToRef = (ref) =>{

  if(ref.current){

    ref.current.scrollIntoView({behavior: 'smooth'})
  }

};




function App() {

  const footerRef = useRef(null);
  const countdownref = useRef(null);

 


  return (
    <>
      <Header 
      onContactClick={()=>scrollToRef(footerRef)}
      onCoundownClick={()=>scrollToRef(countdownref)}/>
      <ScrollToTop/>
      <Banner/>
      <Countdown ref={countdownref}/>
      <Content/>
      <Footer ref={footerRef}/>


    </>
  )
}

export default App
