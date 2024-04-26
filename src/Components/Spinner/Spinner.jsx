import './spinnerStyle.css'
import { BeatLoader } from 'react-spinners'

function Spinner(){
    return(
        <div className='spinner-super-container'>
            <BeatLoader color="#36d7b7" />
        </div>
    )
}


export default Spinner
