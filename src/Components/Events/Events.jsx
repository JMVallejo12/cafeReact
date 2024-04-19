import './eventStyle.css'
import flayer1 from '../../assets/flayer-1.jpg'

function Events(){

    return(
        <div className='events-super-container'>
            
            <div className='event-left-container'>
                <div className='flayer-left'>
                    <img src={flayer1} alt="Imagen de evento" className='flayer-1'/>
                    <h3 className='h3-event'>EVENTO 1</h3>
                </div>
            </div>

            <div className='event-right-container'>
                <div className='flayer-right'>
                    <h3 className='h3-event'>EVENTO 2</h3>

                </div>
            </div>
        </div>
    )
}

export default Events