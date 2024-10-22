import './favourite.css'
import Cards from '../../cards/card';
import img1 from "../../../image/images/promo-01.jpg";
import img2 from "../../../image/images/promo-02.jpg";
const Favourite = () => {
    return (
        <section className="section_favourite">
        <div className="container">
            <h2 className="favourite_title title_second">
            Young’s Favourite
            </h2>
            <div className="favourite_line">
                <Cards title="Hoodies & Sweetshirt" img={img1}/>
                <Cards title="Coats & Parkas" img={img2}/>
            </div>
        </div>
    </section>
    );
}
 
export default Favourite;