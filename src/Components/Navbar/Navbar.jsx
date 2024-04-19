import './navbarStyle.css'
import Instagram from '../Instagram/Instagram'
import Facebook from '../Facebook/Facebook'
import logo from '../../assets/logo.png'

function Navbar(){

    return(
        <div className='navbar-super-container'>
            <div className='navbar-left'>
                <a href=""><img src={logo} alt=""  className='logo-img'/></a>
            </div>

            <div className='navbar-right'>
                <ul className='nav-list-social'>
                    <li className='li-item'><Instagram /></li>
                    <li className='li-item'><Facebook /></li>
                </ul>   
                <ul className='nav-list'>
                    <a href="" className='li-item'><li>Menú</li></a>
                    <a href="" className='li-item'><li>Blog</li></a>
                    <a href="" className='li-item'><li>Eventos</li></a>
                    <a href="" className='li-item'><li>Contacto</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar