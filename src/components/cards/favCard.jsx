import styles from "./card.module.css";
import arrowImg from "./../../image/icons/arrow.svg";


const CardFav = (title,img) => {
    return (
        <article className={styles.fav_card}>
        <a href="#!" className={styles.card_link}>
            {" "}
        </a>
        <img className={styles.fav_card__image} src={img} alt="Category" />
        <div className={styles.fav_card_bottom}>
            <div className={styles.card_bottom__left}>
                <h3 className={styles.card_bottom__title}>
                    {title}
                </h3>
                <p className={styles.card_bottom__text}>Explore Now!</p>
            </div>
            <div className={styles.card_bottom__right}>
                <a href="#!">
                    <img src={arrowImg} alt="arrow img" />
                </a>
            </div>
        </div>
    </article>
    );
}
 
export default CardFav;