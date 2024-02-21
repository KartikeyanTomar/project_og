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
                        <h1 className="section-heading-primary-content">Hanuman Chalisa</h1>
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
|| श्री गणेश जी की आरती ||
जय गणेश जय गणेश,जय गणेश देवा ।
माता जाकी पार्वती,पिता महादेवा ॥
एक दंत दयावंत,चार भुजा धारी ।
माथे सिंदूर सोहे,मूसे की सवारी ॥
जय गणेश जय गणेश,जय गणेश देवा ।
माता जाकी पार्वती,पिता महादेवा ॥
पान चढ़े फल चढ़े,और चढ़े मेवा ।
लड्डुअन का भोग लगे,संत करें सेवा ॥
जय गणेश जय गणेश,जय गणेश देवा ।
माता जाकी पार्वती,पिता महादेवा ॥
अंधन को आंख देत,कोढ़िन को काया ।
बांझन को पुत्र देत,निर्धन को माया ॥
जय गणेश जय गणेश,जय गणेश देवा ।
माता जाकी पार्वती,पिता महादेवा ॥
‘सूर’ श्याम शरण आए,सफल कीजे सेवा ।
माता जाकी पार्वती,पिता महादेवा ॥
जय गणेश जय गणेश,जय गणेश देवा ।
माता जाकी पार्वती,पिता महादेवा ॥
दीनन की लाज रखो,शंभु सुतकारी ।
कामना को पूर्ण करो,जाऊं बलिहारी ॥
जय गणेश जय गणेश,जय गणेश देवा ।
माता जाकी पार्वती,पिता महादेवा ॥

(Hinglish)
Jai Ganesh Jai Ganesh,Jai Ganesh Deva ।
Mata Jaki Parwati,Pita Maha Deva ॥
Ek Dant Daya Want,Char Bhuuja Dhari ।
Mathe Sindor Shoye,Muse Ki Sawari ॥
Jai Ganesh Jai Ganesh,Jai Ganesh Deva ।
Mata Jaki Parwati,Pita Maha Deva ॥
Pan Chadhe Phool Chadhe,Aur Chadhe Mewa ।
Laduan Ko Bhog Lage,Sant Kare Sewa ॥
Jai Ganesh Jai Ganesh,Jai Ganesh Deva ।
Mata Jaki Parwati,Pita Maha Deva ॥
Andhan Ko Aankh Det,Kodhin Ko Kaya ।
Bajhan Ko Purta Det,Nirdhan Ko Maya॥
Jai Ganesh Jai Ganesh,Jai Ganesg Deva ।
Mata Jaki Parwati,Pita Maha Deva ॥
‘sur’ Shaam Sharan Aaye,Safal Ki Jiye Sewa ।
Mata Jaki Parwati,Pita Maha Deva ॥
Jai Ganesh Jai Ganesh,Jai Ganesg Deva ।
Mata Jaki Parwati,Pita Maha Deva ॥
Deenan Ki Laaj Rakho,Shambhu Sutakari ।
Kamana Ko Poorn Karo,Jaoon Balihari ॥
Jai Ganesh Jai Ganesh,Jai Ganesg Deva ।
Mata Jaki Parwati,Pita Maha Deva ॥


(kannada)

|| ಶ್ರೀ ಗಣೇಶ್ ಜೀ ಕಿ ಆರತಿ ||
ಜೈ ಗಣೇಶ್ ಜೈ ಗಣೇಶ್, ಜೈ ಗಣೇಶ್ ದೇವ.
ತಾಯಿ ಜಾಕಿ ಪಾರ್ವತಿ, ತಂದೆ ಮಹಾದೇವ ||
ಒಂದು ಹಲ್ಲು ಕರುಣಾಮಯಿ, ನಾಲ್ಕು ತೋಳುಗಳು.
ಹಣೆಯ ಕುಂಕುಮ, ಮೂಸ್ ಸವಾರಿ ||
ಜೈ ಗಣೇಶ್ ಜೈ ಗಣೇಶ್, ಜೈ ಗಣೇಶ್ ದೇವ.
ತಾಯಿ ಜಾಕಿ ಪಾರ್ವತಿ, ತಂದೆ ಮಹಾದೇವ ||
ವೀಳ್ಯದೆಲೆಯನ್ನು ಅರ್ಪಿಸಲಾಗುತ್ತದೆ, ಮತ್ತು ಬೀಜಗಳನ್ನು ಅರ್ಪಿಸಲಾಗುತ್ತದೆ.
ಲಡ್ಡು ಆನಂದಿಸಿ, ಸಂತರ ಸೇವೆ ಮಾಡಿ ||
ಜೈ ಗಣೇಶ್ ಜೈ ಗಣೇಶ್, ಜೈ ಗಣೇಶ್ ದೇವ.
ತಾಯಿ ಜಾಕಿ ಪಾರ್ವತಿ, ತಂದೆ ಮಹಾದೇವ ||
ಅವನು ಕುರುಡನಿಗೆ ಕಣ್ಣು, ಕುಷ್ಠರೋಗಿಗೆ ದೇಹವನ್ನು ನೀಡುತ್ತಾನೆ.
ಅವನು ಬಂಜರಿಗೆ ಮಗನನ್ನು, ಬಡವರಿಗೆ ಮಾಯಾವನ್ನು ನೀಡುತ್ತಾನೆ ||
ಜೈ ಗಣೇಶ್ ಜೈ ಗಣೇಶ್, ಜೈ ಗಣೇಶ್ ದೇವ.
ತಾಯಿ ಜಾಕಿ ಪಾರ್ವತಿ, ತಂದೆ ಮಹಾದೇವ ||
'ಸುರ್' ಶ್ಯಾಮ್ ಶರಣ್ ಬಂದರು, ಯಶಸ್ವಿ ಕಿಜೆ ಸೇವೆ.
ತಾಯಿ ಜಾಕಿ ಪಾರ್ವತಿ, ತಂದೆ ಮಹಾದೇವ ||
ಜೈ ಗಣೇಶ್ ಜೈ ಗಣೇಶ್, ಜೈ ಗಣೇಶ್ ದೇವ.
ತಾಯಿ ಜಾಕಿ ಪಾರ್ವತಿ, ತಂದೆ ಮಹಾದೇವ ||
ಶಂಭು ಸುತಕರಿ, ದಿನಾನ್ ಗೆ ನಾಚಿಕೆಯಾಗಬೇಕು.
ಆಸೆಯನ್ನು ಪೂರೈಸಿ, ಬಲಿಹಾಗೆ ಹೋಗಿ ||
ಜೈ ಗಣೇಶ್ ಜೈ ಗಣೇಶ್, ಜೈ ಗಣೇಶ್ ದೇವ.
ತಾಯಿ ಜಾಕಿ ಪಾರ್ವತಿ, ತಂದೆ ಮಹಾದೇವ ||"                         
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