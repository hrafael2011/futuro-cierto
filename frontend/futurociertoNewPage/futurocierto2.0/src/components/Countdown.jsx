import React, { useEffect, useState , forwardRef} from 'react';
import { getEvent } from '../api/futuroCiertoContentApi';
import dayjs from 'dayjs';

const Countdown = forwardRef((props,ref)=> {
    const [eventDate, setEventDate] = useState(null);
    const [eventName, setEventName] = useState([]);
    const [timeLeft, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const loadEvent = async () => {
            try {
                const response = await getEvent();
                console.log("Datos recibidos de la API:", response.data);
                // comprobar la logitud  del arreglo antes de ingresar al indice
                 const eventDate = new Date(response.data[0].EventDate);
                 const id = new Date(response.data.EventID);
                console.log('Este es el ID',id)
                console.log('Dia oficial del evento',eventDate)   
                console.log("Fecha del evento (parseada):", eventDate);
                console.log(response)
                
                setEventDate(eventDate); // Guardar la fecha del evento
                setEventName(response.data);

            } catch (error) {
                console.error('Error al obtener la fecha del evento', error);
            }
        };

        loadEvent();
    }, []);

    

    useEffect(() => {
        if (eventDate) {
            startCountdown(eventDate); // Iniciar el contador cuando haya una fecha válida
        }
    }, [eventDate]);

    const startCountdown = (eventDate) => {
        const interval = setInterval(() => {
            const now = new Date();
            const timeDifference = eventDate.getTime() - now.getTime();
            console.log("Diferencia de tiempo (ms):", timeDifference);

            if (timeDifference <= 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            // Calcular días, horas, minutos y segundos restantes
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    };



 

    return (
        <div>
            <div className="content">
                <div className="container">
                    <ul className="row white-bg enevtii">
                        <li className="col-md-6 no-padding-l">
                       
                            <div className="event-in">
                            {timeLeft.days > 0 && timeLeft.hours >0 && timeLeft.minutes >0 && timeLeft.seconds >0 ?(
                                <div className="up-com-event">
                                    <p className="font-lora">upcoming events</p>
                                    <div className="row">
                                        <div className="col-xs-5">
                                               
                                                    
                                                    {eventName.map((eventIte, i)=>(

                                                        <img className="img-responsive" src={eventIte.Image} alt={eventIte.TextAlt} />
                                                    )
                                                        

                                                    )}


                                                                                         
                                        </div>
                                        
                                     
                                            <div className="col-xs-7">
                                            <p className="font-lora">
                                                {eventName.map((eventItem, i) => (
                                                    <div key={eventItem.EventID}> {eventItem.Event}</div>
                                                ))}
                                            </p>
                                            
                                            <span>
                                                <i className="fa fa-clock-o"></i>
                                                {eventDate ? eventDate.toLocaleString() : 'Cargando...'}
                                            </span>    
                                            <span>
                                                 {eventName.map((eventItem, i)=>(<div key={eventItem.EventID}> <i className="fa fa-map-marker"></i>{eventItem.Address}</div>))}
                                            </span> 
                                            <ul className="countdown">
                                                <li>
                                                    <span className="days">{timeLeft.days}</span>
                                                    <p>days</p>
                                                </li>
                                                <li>
                                                    <span className="hours">{timeLeft.hours}</span>
                                                    <p>hours</p>
                                                </li>
                                                <li>
                                                    <span className="minutes">{timeLeft.minutes}</span>
                                                    <p>minutes</p>
                                                    
                                                </li>
                                                <li>
                                                    <span className="seconds">{timeLeft.seconds}</span>
                                                    <p>seconds</p>
                                                </li>
                                            </ul>
                                        </div>

                                       
                                        
                                    </div>
                                </div>
                            ):( <li className="col-sm-12 mt-12"> <span className="big-text font-lora text-4xl">How <small className='text-4xl font-bold'>Can You Help?</small></span>
                                <hr/>
                                <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea cmodo conse quat. Duis aute irure dolor in reprehenderit inas voluptate velit esse cillum...</p>
                                <a href="#." className="btn">Learn More <i className="fa fa-arrow-circle-o-right"></i></a> </li>)  }
                            </div>
                        
                        </li>
                        {/* <!--======= DONATE AMOUNT =========-->*/}
        <li className="col-md-2 amount">
          <h1 className="font-lora">$25</h1>
          <p>Could pay for a day out 
            for 4 young carers in need of 
            a break.</p>
        </li>
        
       {/* <!--======= DONATE SLIDER =========-->*/}
        <li ref={ref}  className="col-md-4">
          <div className="donate-price">
            <ul className="tabii-price">
              <li className="active"><a href="#.">monthly donation</a> | </li>
              <li><a href="#.">single donation</a></li>
            </ul>
            <div  id="year-slider" className="no-ui-slider">
              <div className="slider"></div>
              <ul className="slider-labels eleven-columns">
                <li>$0</li>
                <li>$10</li>
                <li className="active">$25</li>
                <li>$50</li>
                <li>$75</li>
                <li>$100</li>
              </ul>
            </div>
            <a href="#." className="btn">donate now!</a> </div>
        </li>
                    </ul>
                </div>
                 {/* <!--======= RECENT CASES =========-->*/}
    
   {/* <!--======= HOW CAN YOU HELP =========-->*/}
   
    
   {/* <!--======= DONATION COUNTER =========-->*/}
    
   {/* <!--======= LATEST DONATORES =========-->*/}
    
    
   {/* <!--======= BLOG =========-->*/}
    
   {/* <!--======= TESTIMONIALS =========-->*/}
    
   
  </div>
  {/*<!--Fin del content-->*/}
    </div>
  );
}) 
            

export default Countdown;
