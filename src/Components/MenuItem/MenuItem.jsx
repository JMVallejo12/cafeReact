import './menuItemStyle.css'

function MenuItem({name, price, img}){
    return(
        <div className='menuitem-super-container'>
            <div className='img-container-menuitem'>
                <img src={img} alt="" className='img-menu-item'/>
            </div>
            <div className='menu-item-down'>
                <h3 className='h3-menu-item'>{name}</h3>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default MenuItem