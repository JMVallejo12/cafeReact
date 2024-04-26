import './menuContainerStyle.css'
import MenuItem from '../MenuItem/MenuItem'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'


function MenuContainer(){
    const db = getFirestore()
    const colRef = collection(db, "menu")
    const [menu, setMenu] = useState([])

    useEffect(()=>{
        const fetchMenu = async () =>{
            try{
                const menuSnapshot = await getDocs(collection(db, 'menu'))
                const menuData = menuSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
                setMenu(menuData)
                console.log(menu)
            }
            catch (error){
                console.log("Error al mostrar el menu")
            }
            
        }
        fetchMenu()
    },[db])
    
    return(
        <div className='menu-super-container'>
            <h2 className='h2-menu'>MENÚ</h2>
            <div className='items-container'>
                {
                    menu.map((item)=>(
                        <MenuItem name={item.name} price={item.price} img={item.img} key={item.id}/>
                    ))
                }
            </div>
           
        </div>
    )
}

export default MenuContainer