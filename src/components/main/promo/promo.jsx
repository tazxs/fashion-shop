import "./promo.css";
import promoImg from "./../../../image/images/header-img.jpg";
import btnImg from './../../../image/icons/decor-yellow.svg'
const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo_content">
                    <div className="promo_content__left">
                        <h1 className="content_left__title">
                            <span className="highlight"><span>LET’S</span></span> EXPLORE <span className="highlight highlight--yelow"><span>UNIQUE</span></span> CLOTHES.
                        </h1>
                        <p className="content_left__text">Live for Influential and Innovative fashion!</p>
                        <div className="content_left__bottom">
                            <img src={btnImg} alt="" />
                            <button className="left_bottom__btn">Shop Now</button>
                        </div>
                    </div>
                    <div className="promo_content__right">
                        <img src={promoImg} alt="image_promo" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;
