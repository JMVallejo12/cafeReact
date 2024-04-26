import './menuContainerStyle.css'
import MenuItem from '../MenuItem/MenuItem'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Spinner from '../Spinner/Spinner'

function MenuContainer(){
    const db = getFirestore()
    const colRef = collection(db, "menu")
    const [menu, setMenu] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        const fetchMenu = async () =>{
            try{
                setIsLoading(true)
                const menuSnapshot = await getDocs(collection(db, 'menu'))
                const menuData = menuSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
                setMenu(menuData)
                console.log(menu)
                setIsLoading(false)
            }
            catch (error){
                console.log("Error al mostrar el menu")
            }
            
        }
        fetchMenu()
    },[db])

    if(isLoading) return <Spinner />
    
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
           {/* <ItemDetailContainer /> */}
        </div>
    )
}

export default MenuContainer