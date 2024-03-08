import ExploreCards from "../components/ExploreCards";
import GalleryCards from "../components/GalleryCards";
import FamousCard from "../components/FamousCards";
import Aarticard from "../components/Aarticard";
import FactsCard from "../components/FactsCard";
import ContentVideo from "../components/ContentVideoCard";
import ConstentCard from "../components/ContentCard";
import AstrologyImage from "../assets/img/astrology.png";
import CalendarImage from "../assets/img/calender.png";
import MandirImage from "../assets/img/Mandir.png";
import granthImage from "../assets/img/granth.png";
import jyotishImage from "../assets/img/jyotish.png";
import kathaImage from "../assets/img/katha.png";
import panchangImage from "../assets/img/panchang.png"
import ramImage from "../assets/img/ram.png"
import hanumanImage from "../assets/img/hanuman.png"
import lakshmiImage from "../assets/img/lakshmi.png"
import krishnaImage from "../assets/img/krishna.png"
import durgaImage from "../assets/img/durga.png"
import kaliImage from "../assets/img/kali.png"
import { FaYoutube, FaInstagram } from "react-icons/fa";
import Shlokcard from "../components/Shlokcard";


export default function SecondaryPage() {
    return (
        <>
            <section className="hero-section">
                <div className="header">
                    <div className="thoughts">
                        <marquee>
                            <p className="thought">
                                आपका कर्तव्य ही धर्म है, प्रेम ही ईश्वर है, सेवा ही पूजा है, और
                                सत्य ही भक्ति है।
                            </p>
                        </marquee>
                    </div>
                    <div className="navbar">
                        <div className="logo">
                            <h1 className="web-logo">Prabhu Prem</h1>
                        </div>
                        <ul className="nav-elements">
                            <a href="" className="nav-item">
                                <li>home</li>
                            </a>
                            <a href="/" className="nav-item">
                                <li>aarti</li>
                            </a>
                            <a href="/" className="nav-item">
                                <li>bhajan</li>
                            </a>
                            <a href="/" className="nav-item">
                                <li>chalisa</li>
                            </a>
                            <a href="/" className="nav-item">
                                <li>katha</li>
                            </a>
                            <a href="/" className="nav-item">
                                <li>stories</li>
                            </a>

                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="quotes">
                        <h1 className="heading-hero">GOD IS TRUTH</h1>
                        <p className="quote">
                            शांति ईश्वर की वेदी है, वह स्थिति जिसमें सुख मौजूद है।
                        </p>
                    </div>
                    <div className="quotesX">
                        <h1 className="heading-hero">GOD IS SUPREME</h1>
                        <p className="quote">
                            जो वेद और शास्त्र के ग्रंथों को याद कर लेता है किंतु उनके यथार्थ
                            तत्व को नहीं समझता, उसका वह याद रखना व्यर्थ है।
                        </p>
                    </div>
                </div>
            </section>
            <section className="aartibox">
                <div className="other-container">
                    <div className="content-heading">
                        <h1 className="section-heading-primary-content">काली माता जी की आरती</h1>
                    </div>
                    <div className="aarti-options">
                        <div className="aarti-cards">
                          <div>

                            <ContentVideo
                            src="https://www.youtube.com/embed/watch?v=g9UuAxQDIWY"
                            alt="ramImage"
                            mantra="योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।
सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते।।"
                            />
                          </div>
                        <div className="content-box">
                          <ConstentCard
                          content="
|| काली माता जी की आरती ||

अम्बे तू है जगदम्बे काली, जय दुर्गे खप्पर वाली l
तेरे ही गुण गायें भारती, ओ मैया हम सब उतारें तेरी आरती ll
तेरे भक्त जनों पे माता, भीर पड़ी है भारी l
दानव दल पर टूट पडो माँ, करके सिंह सवारी ll
सौ सौ सिंहों से बलशाली, दस भुजाओं वाली l
दुखिंयों के दुखडें निवारती, ओ मैया हम सब उतारें तेरी आरती ll
माँ बेटे का है इस जग में, बड़ा ही निर्मल नाता l
पूत कपूत सूने हैं पर, माता ना सुनी कुमाता ll
सब पर करुणा दरसाने वाली, अमृत बरसाने वाली l
दुखियों के दुखड़े निवारती, ओ मैया हम सब उतारें तेरी आरती ll
नहीं मांगते धन और दौलत, न चाँदी न सोना l
हम तो मांगे माँ तेरे मन में, इक छोटा सा कोना ll
सबकी बिगडी बनाने वाली, लाज बचाने वाली l
सतियों के सत को संवारती, ओ मैया हम सब उतारें तेरी आरती ll
अम्बे तू है जगदम्बे काली, जय दुर्गे खप्पर वाली l
तेरे ही गुण गायें भारती, ओ मैया हम सब उतारें तेरी आरती ll

(Hinglish)

Ambe Tu Hai Jagdambe Kali Jai Durga Khappar Wali l
Tere Hi Gun Gayen Bharti,O Maiya Hum Sab Utare Teri Aarti ll
Tere Bhakt Jano Pe Mata Bheer Padi Hai Bhari l
Danav Dal Par Toot Pado Maa Karke Sinh Savar ll
Sou Sou Sinho Se Hai Balshali Hai Dus Bhujaon Wali l
Dukhion Ke Dukhde Niwarti,O Maiya Hum Sab Utare Teri Aarti ll
Maan Bête Ka Hai Is Jug Main Bada Hi Nirmal Nata l
Poot Kapoot Sune Hain Par Na Mata Suni Kumata ll
Sub Pe Karuna Darsane Wali Amrit Barsane Wali l
Dukhion Ke Dukhde Niwarti,O Maiya Hum Sab Utare Teri Aarti ll
Nahin Mangte Dhan Aur Daulat Na Chandi Na Sona l 
Hum To Mange Tere Man Main Ek Chhota Sa Kona ll
Sub Ki Bigdi Banane Wali Laaj Bachane Wali l
Sathiyon Ke Sat Ko Sanvarti,O Maiya Hum Sab Utare Teri Aarti ll
Ambe Tu Hai Jagdambe Kali Jai Durga Khappar Wali l
Tere Hi Gun Gayen Bharti,O Maiya Hum Sab Utare Teri Aarti ll

(kannada)

|| ಕಾಳಿ ಮಾತಾ ಆರತಿ || 
ಅಂಬೆ ತು ಹೈ ಜಗದಂಬೆ ಕಾಳಿ, 
ಜೈ ದುರ್ಗೆ ಖಪ್ಪರ್ ವಾಲಿ ಎಲ್.
ಓ ಮೈಯಾ, ಭಾರತಿ, ನಿನ್ನ ಸ್ತುತಿಯನ್ನು ಹಾಡಿ, 
ನಾವೆಲ್ಲರೂ ನಿನ್ನ ಆರತಿಯನ್ನು ಕೆಳಗಿಳಿಸುತ್ತೇವೆ ||
ತಾಯಿ ನಿಮ್ಮ ಭಕ್ತರ ಮೇಲೆ ಭಾರವಾಗಿದ್ದಾರೆ, 
ಸಾಕಷ್ಟು ಭಯವಿದೆ.
ರಾಕ್ಷಸ ತಂಡದ ಮೇಲೆ ದಾಳಿ ಮಾಡಿ, ತಾಯಿ, 
ಸಿಂಹದ ಮೇಲೆ ಸವಾರಿ ಮಾಡಿ ||
ಹತ್ತು ತೋಳುಗಳನ್ನು ಹೊಂದಿರುವ 
ನೂರು ಸಿಂಹಗಳಿಗಿಂತ ಬಲಶಾಲಿ.
ಓ ಮೈಯಾ, ದುಃಖಿತರ ದುಃಖಗಳನ್ನು ನಿವಾರಿಸುವವನೇ, 
ನಾವೆಲ್ಲರೂ ನಿಮ್ಮ ಆರತಿಯನ್ನು ತೆಗೆದುಹಾಕುತ್ತೇವೆ ||
ತಾಯಿ ಮತ್ತು ಮಗ ಈ ಜಗತ್ತಿನಲ್ಲಿ 
ಬಹಳ ಶುದ್ಧ ಸಂಬಂಧವನ್ನು ಹೊಂದಿದ್ದಾರೆ.
ಪೂಟ್ ಕಪುಟ್ ಸುನೆ ಹೈ ಪರ್, 
ಮಾತಾ ನಾ ಸುನಿ ಕುಮಟಾ ಲ್ ||
ಎಲ್ಲರ ಮೇಲೆ ಸಹಾನುಭೂತಿ ಸುರಿಸುವವನು, 
ಅಮೃತವನ್ನು ಸುರಿಸುವವನು.
ಓ ಮೈಯಾ, ದುಃಖಗಳನ್ನು ನಿವಾರಿಸುವವನೇ, 
ನಾವೆಲ್ಲರೂ ನಿಮ್ಮ ಆರತಿಯನ್ನು ತೆಗೆದುಕೊಳ್ಳೋಣ ||
ಅವರು ಯಾವುದೇ ಸಂಪತ್ತು ಮತ್ತು ಸಂಪತ್ತನ್ನು 
ಕೇಳುವುದಿಲ್ಲ, ಬೆಳ್ಳಿ ಅಥವಾ ಚಿನ್ನವನ್ನು ಕೇಳುವುದಿಲ್ಲ.
ನಾವು ನಿಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿ ತಾಯಿಯನ್ನು 
ಕೇಳುತ್ತೇವೆ, ಒಂದು ಸಣ್ಣ ಮೂಲೆ ||
ಎಲ್ಲರನ್ನೂ ಹಾಳುಮಾಡುವವನು, 
ಅವಮಾನವನ್ನು ಉಳಿಸುವವನು.
ಓ ಮೈಯಾ, ಸತಿಗಳ ಸತಿಗಳನ್ನು ಅಲಂಕರಿಸಿ, 
ನಾವೆಲ್ಲರೂ ನಿಮ್ಮ ಆರತಿಯನ್ನು ತೆಗೆದುಕೊಳ್ಳೋಣ ||
ಅಂಬೆ ತು ಹೈ ಜಗದಂಬೆ ಕಾಳಿ, 
ಜೈ ದುರ್ಗೆ ಖಪ್ಪರ್ ವಾಲಿ ಎಲ್.
ಓ ಮೈಯಾ, ನಿನ್ನ ಸ್ತುತಿಯನ್ನು ಹಾಡಿ, 
ನಾವೆಲ್ಲರೂ ನಿನ್ನ ಆರತಿಯನ್ನು ಕೆಳಗಿಳಿಸುತ್ತೇವೆ ||"
/> 

                        </div>
                        </div>
                        <div className="aarti-option-box">
                            <div className="aarti-heading">
                                <h1 className="section-heading-primary-aarti">Categories</h1>
                            </div>
                            <div className="categories-contents">
                                <h2 className="categories-content">Aarti (999)</h2>
                                <h2 className="categories-content">Bhajan (999)</h2>
                                <h2 className="categories-content">Lok Katha (999)</h2>
                                <h2 className="categories-content">Chalisa (999)</h2>

                            </div>
                            <div className="addbox">

                            </div>

                            <div className="recently-visit">
                                <h2 className="section-heading-primary-recent">Recently Visited</h2>
                            </div>

                            <div className="categories-contents">
                                <div className="something">
                                    <a className="recent-content" href="/">Hanuman chalisa</a>
                                </div>
                                <div className="something">
                                    <a className="recent-content" href="/">Krishna chalisa</a>
                                </div>
                                <div className="something">
                                    <a className="recent-content" href="/">Ram chalisa</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="facts-area">
                <div className="facts-box">
                    <div className="aarti-heading">
                        <h1 className="section-heading-primary">Some more facts</h1>
                    </div>

                    <div>
                        <FactsCard
                        image={AstrologyImage}
                        alt="ramImage"
                        factsName="Astrology"
                        factscontent="xyz was the first astrologist"
                        />

                        <FactsCard
                        image={kaliImage}
                        alt="kaliImage"
                        factsName="Kali Temple"
                        factscontent="kali temple in bengal ssdfgcjhsbdfhbvjhsvdhjzczjhv"
                        />

                        <FactsCard
                        image={krishnaImage}
                        alt="krishnaImage"
                        factsName="Krishna Temple"
                        factscontent="xyz was the first astrologistsdhvbj sbh 
dkjv dksvhiu vub ufvsjkf sf csdgv zdbfuiv fbuyvyu kfdvy yuzdvzbh vhhv zuysfvbz ufg sdf"
                        />
                    </div>

                </div>

            </section>


            <section className="footer-section">
                <footer className="footer">
                    <div className="container">
                        <div className="about grid grid-two-columns">
                            <div className="about-us">
                                <h1 className="heading-footer">about us</h1>
                                <p className="about-text">
                                    We are one of the leading Hinduism websites and non-profit
                                    organizations offering you both essential and detailed
                                    information as well as news from the world of this religion.
                                    We aim to help everyone discover Hinduism.
                                </p>
                                <h1 className="queries">for queries</h1>
                                <p className="email">support@bhaktipath.com</p>
                                <div className="socials">
                                    <FaInstagram />
                                    <FaYoutube />
                                </div>
                            </div>
                            <div className="about-links">
                                <h1 className="heading-footer">quick help</h1>
                                <div className="quick-links">
                                    <a href="/" className="quick-nav">
                                        home
                                    </a>
                                    <a href="/" className="quick-nav">
                                        faq
                                    </a>
                                    <a href="/" className="quick-nav">
                                        donation
                                    </a>
                                </div>
                            </div>
                            <div className="comment-box about-links">
                                <textarea placeholder="Write your comment here..."></textarea>
                                <button onclick="submitComment()">Submit</button>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copyright">
                    © 2024 All Rights Reserved.{" "}
                    <a href="/" className="privacy">
                        Privacy Policy
                    </a>
                </div>
            </section>

        </>

    )
}