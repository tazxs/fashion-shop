import './brands.css'
import hm from './../../../image/brands/HM.png';
import obey from './../../../image/brands/Obey.png';
import shopify from './../../../image/brands/Shopify.png';
import lacoste from './../../../image/brands/Lacoste.png';
import levi from './../../../image/brands/Levis.png';
import amazon from './../../../image/brands/Amazon.png';
const Brands = () => {
    return (
        <section className="section_brands">
            <div className="container">
                <div className="section_brands__line">
                    <a href="#!" className="brands_line__image"><img src={hm} alt="" /></a>
                    <a href="#!" className="brands_line__image"><img src={obey} alt="" /></a>
                    <a href="#!" className="brands_line__image"><img src={shopify} alt="" /></a>
                    <a href="#!" className="brands_line__image"><img src={lacoste} alt="" /></a>
                    <a href="#!" className="brands_line__image"><img src={levi} alt="" /></a>
                    <a href="#!" className="brands_line__image"><img src={amazon} alt="" /></a>
                </div>
            </div>
        </section>
    );
}
 
export default Brands;