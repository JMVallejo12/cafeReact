import './eventStyle.css'
import flayer1 from '../../assets/flayer-1.jpg'
import flayer2 from '../../assets/flayer-2.jpg'

function Events(){

    return(
        <div className='events-super-container' id='events'>
            
            <div className='event-left-container'>
                <div className='flayer-left'>
                    <img src={flayer1} alt="Imagen de la cafeteria" className='flayer-1'/>
                    <h3 className='h3-event'>¡DARDOS A FULL!</h3>
                    <div className='line-event'></div>
                    <p>Ven a participar de torneo de dardos con tus amigos</p>
                    <p>El ganador tiene 4 fin de semanas gratis de desayuno</p>
                </div>
            </div>

            <div className='event-right-container'>
                <div className='flayer-right'>
                    <h3 className='h3-event-r'>¡CANTANTE EN VIVO!</h3>
                    <div className='line-event'></div>
                    <p className='p-event'>Vení a disfrutar de una buena merienda y música en vivo</p>
                    <img src={flayer2} alt="Imagen de la cefeteria" className='flayer-1'/>
                </div>
            </div>
        </div>
    )
}

export default Events