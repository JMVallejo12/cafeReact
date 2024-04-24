import { useState } from 'react'
import './reviewFormStyle.css'
import {getFirestore, addDoc, collection} from 'firebase/firestore'


function ReviewForm(){
    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [review, setReview] = useState('')
    const db = getFirestore()


    function handleSubmit(e){
        e.preventDefault()

        
        addDoc(collection(db,'reviews'),{
            nombre: name,
            email: email,
            review: review
        })
        .then(()=>{
            setName('')
            setEmail('')
            setReview('')
            alert("Tu reseña se envió correctamente")
        })
        .catch(()=>{
            alert("Hubo un error")
        })
        
    }

    return(
        <div className='form-super-container' onSubmit={handleSubmit}>
            <form action="" method="post" className='form-container'>
                <label className='label-review'>Nombre:</label>
                <input type="text" id="nombre" name="nombre"value={name} required className='input-review' onChange={(e)=>setName(e.target.value)}></input>

                <label className='label-review'>Email:</label>
                <input type="email" id="email" name="email" value={email} required className='input-review' onChange={(e)=>setEmail(e.target.value)}></input>

                <label className='label-review'>Reseña:</label>
                <textarea id="reseña" name="reseña" rows="4" value={review} cols="50" required className='input-review-text' onChange={(e)=>setReview(e.target.value)}></textarea>
                <div className='btn-review-container'>
                    <button className='btn-review' type='submit'>ENVIAR RESEÑA</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm