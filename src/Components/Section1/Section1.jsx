import './section1Style.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Section1(){

    return(
        <div className='section-1-super-container'>
                <div className='overlay'></div>
                <h1 className='h1-cafe'>CAFÉ</h1>
                <div className='line'></div>
                <p className='p-cafe'>Ven a disfrutar de un buen café y postres, perfecto para una buena merienda</p>
                <button className='btn-cafe'>MENÚ <ArrowForwardIcon /></button>
        </div>
    )
}

export default Section1