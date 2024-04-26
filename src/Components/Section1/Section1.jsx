import { Link } from 'react-router-dom';
import './section1Style.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Section1(){

    return(
        <div className='section-1-super-container' id='section1'>
                <div className='overlay'></div>
                <h1 className='h1-cafe'>CAFÉ</h1>
                <div className='line'></div>
                <p className='p-cafe'>Ven a disfrutar de un buen café y postres, perfecto para una buena merienda</p>
                <Link to={"/menu"} className='btn-cafe'>MENÚ <ArrowForwardIcon /></Link>
        </div>
    )
}

export default Section1