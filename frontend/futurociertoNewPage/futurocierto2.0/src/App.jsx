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

  const[isOpenModal, setIsOpenModal] = useState(false)
  const openModal = () => setIsOpenModal(true)
  const closeModal = () => setIsOpenModal(false)

 


  return (
    <>
      <Header 
      onContactClick={()=>scrollToRef(footerRef)}
      onCoundownClick={()=>scrollToRef(countdownref)}
      openModal ={openModal}
      
      />
      <ScrollToTop/>
      <Banner/>
      <Countdown ref={countdownref}/>
      <Content/>
      <Footer ref={footerRef}
      isOpenModal={isOpenModal}
      closeModal={closeModal}
      
      />


    </>
  )
}

export default App
