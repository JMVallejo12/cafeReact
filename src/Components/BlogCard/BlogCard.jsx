import './blogcardStyle.css'

function BlogCard({blog_title, blog_date, blog_img}){
    return(
        <div className='blog-card-super-container'>
            <img src={blog_img} alt="Imagen estándar de blog" className='img-blog'/>
            <div className='content-container'>
                <h3 className='h3-blogcard'>{blog_title.toUpperCase()}</h3>
                <div className='date-container'>
                    <p className='p-blogcard'>{blog_date}</p>
                </div>
            </div>

        </div>
    )
}

export default BlogCard