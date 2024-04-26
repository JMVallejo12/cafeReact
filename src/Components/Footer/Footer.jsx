import './footerStyle.css'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function Footer(){
    return(
        <div className='footer-super-container'>
            <div className='footer-right'>
                <p className='p-footer-title'><strong>Dirección</strong></p>
                <p className='p-footer-info'>Calle 1 esq Calle 4 - Distrito 1</p>
            </div>

            <div className='up-arrow'>
                <a href="#section1" className='a-icon'><KeyboardDoubleArrowUpIcon className='icon-footer'/></a>
            </div>

            <div className='footer-left'>
                <p className='p-footer-title'><strong>Horarios</strong></p>
                <p className='p-footer-info'>Lunes - Viernes: 9:30 - 20:00</p>
                <p className='p-footer-info'>Sábados: 10:00 - 21:00</p>
            </div>
        </div>
    )
}

export default Footer