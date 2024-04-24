import './reviewStyle.css'
import ReviewForm from '../ReviewForm/ReviewForm'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'

function Reviews() {
    const db = getFirestore()
    const colRef = collection(db, "reviews")
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const reviewSnapshot = await getDocs(collection(db, 'reviews'))
                const reviewData = reviewSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), expanded: false }))
                setReviews(reviewData)
            }
            catch (error) {
                console.log("Error al mostrar las reseñas")
            }
        }
        fetchReviews()
    }, [db])

    const toggleShowReview = (id) => {
        setReviews(reviews.map(review => {
            if (review.id === id) {
                return { ...review, expanded: !review.expanded };
            }
            return review;
        }));
    };

    return (
        <div className='reviews-super-container'>
            <h2 className='h2-review'>RESEÑAS</h2>
            <div className='reviews-container'>
                <ul className='ul-review-container'>
                    {reviews.map((review) => (
                        <li key={review.id} className='li-review-container'>
                            <div className='up-review-card'>
                                <p className='element-review'><strong>Nombre:</strong> {review.nombre}</p>
                                <p className='element-review'>EMAIL: {review.email}</p>
                            </div>
                            <div className='review-desc'>
                                <p className='element-review-down'>
                                    {review.expanded ? review.review : `${review.review.slice(0, 100)}...`}
                                </p>
                                {review.review.length > 100 && (
                                    <div className='show-more'>
                                        <button onClick={() => toggleShowReview(review.id)} className="show-btn">
                                            {review.expanded ? "Ver menos" : "Ver más"}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <ReviewForm />
        </div>
    )
}

export default Reviews
