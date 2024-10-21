import Card from '../../cards/card';
import './arrivals.css';
import img1 from "../../../image/categories/cat-01.jpg";
import img2 from '../../../image/categories/cat-02.jpg';
import img3 from '../../../image/categories/cat-03.jpg';
const Arrivals = () => {
    return (
        <section className="section_arrivals">
            <div className="container">
                <h2 className="arrivals_title title_second">
                    NEW ARRIVALS
                </h2>
                <div className="arrivals_line">
                    <Card title="Hoodies & Sweetshirt" img={img1}/>
                    <Card title="Coats & Parkas" img={img2}/>
                    <Card title="Tees & T-Shirt" img={img3}/>
                </div>
            </div>
        </section>
    );
}
 
export default Arrivals;