import './donwload.css';
import img from '../../../image/images/vouchers-img.png';
import GooglePlay from '../../../image/icons/google-play.png';
import AppStore from '../../../image/icons/app-store.png';
const Download = () => {
    return (  
        <section className="section_download">
            <div className="container">
                <div className="donwload_block">
                    <div className="download_left">
                        <h2 className="download_title">DOWNLOAD APP &
                        GET THE VOUCHER!</h2>
                        <p className="download_text">Get 30% off for first transaction using
                        Rondovision mobile app for now.</p>
                        <div className="download_bottom">
                            <a href="#!" className="download_bottom__link"><img src={AppStore} alt="AppStore" /></a>
                            <a href="#!" className="download_bottom__link"><img src={GooglePlay} alt="GooglePlay" /></a>
                        </div>
                    </div>
                    <div className="donwload_right">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Download;