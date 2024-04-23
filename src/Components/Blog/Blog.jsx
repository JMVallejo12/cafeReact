import './blogStyle.css'
import BlogCard from '../BlogCard/BlogCard'
import blogimg1 from '../../assets/blog-img-1.jpg'
import blogimg2 from '../../assets/blog-img-2.jpg'
import blogimg3 from '../../assets/blog-img-3.jpg'
import blogimg4 from '../../assets/blog-img-4.jpg'
import blogimg5 from '../../assets/blog-img-5.jpg'
import blogimg6 from '../../assets/blog-img-6.jpg'


function Blog(){
    return(
        <div className='blog-super-container' id='blog'>
            <h2 className='blog-title'>NUESTRO BLOG DE NOTICIAS</h2>
            <div className='news-container'>
                <BlogCard blog_title={"Bienvenidos al Otoño! Descubre Nuestras Especialidades de Café de Temporada"} blog_date={"20/3/2024"} blog_img={blogimg1}/>
                <BlogCard blog_title={"Noches de Jazz en Vivo: Sumérgete en el Ambiente Íntimo de Nuestro Café"} blog_date={"15/1/2024"} blog_img={blogimg2}/>
                <BlogCard blog_title={"Detrás de las Tazas: Historias Inspiradoras de Nuestros Granos de Café"} blog_date={"17/1/2024"} blog_img={blogimg3}/>
                <BlogCard blog_title={"Experimenta en Casa: Recetas de Café para Impresionar a tus Invitados"} blog_date={"25/2/2024"} blog_img={blogimg4}/>
                <BlogCard blog_title={"Comprometidos con la Sostenibilidad: Nuestro Compromiso con el Comercio Justo"} blog_date={"27/4/2024"} blog_img={blogimg5}/>
                <BlogCard blog_title={"Descubre Nuestro Café del Mes: Explora los Sabores Únicos de Nuestra Selección Especial"} blog_date={"1/1/2024"} blog_img={blogimg6}/>
            </div>
        </div>
    )
}

export default Blog