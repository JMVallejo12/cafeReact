import './navbarStyle.css'
import Instagram from '../Instagram/Instagram'
import Facebook from '../Facebook/Facebook'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar(){

    return(
        <div className='navbar-super-container'>
            <div className='navbar-left'>
                <Link to={"/"}><img src={logo} alt="Imagen del logo"  className='logo-img'/></Link>
            </div>

            <div className='navbar-right'>
                <ul className='nav-list-social'>
                    <li className='li-item'><Instagram /></li>
                    <li className='li-item'><Facebook /></li>
                </ul>   
                <ul className='nav-list'>
                    <Link to={"/menu"} className='li-item'><li>Menú</li></Link>
                    <a href="#blog" className='li-item'><li>Blog</li></a>
                    <a href="#events" className='li-item'><li>Eventos</li></a>
                    <a href="#reviews" className='li-item'><li>Reseñas</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar