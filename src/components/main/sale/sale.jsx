import "./sale.css";
import imgYellow from "../../../image/images/promo-img.jpg";
const Sale = () => {
    return (
        <section className="section_sale">
            <div className="sale_block">
                <div className="sale_block__left">
                    <img src={imgYellow} alt="" />
                </div>
                <div className="sale_block__right">
                    <h2 className="block_right__title">
                        <span className="highlight">
                            <span>PAYDAY</span>
                        </span> <br />
                        SALE NOW
                    </h2>
                    <p className="block_right__text">
                        Spend minimal $100 get 30% off <br /> voucher code for your
                        next purchase
                    </p>
                    <p className="block_right__text">
                        <span>1 June - 10 June 2021</span> <br /> *Terms &
                        Conditions apply
                    </p>
                    <a href="#!" className="block_right__btn">
                        SHOP NOW
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Sale;
