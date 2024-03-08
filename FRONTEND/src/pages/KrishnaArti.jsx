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
                        <h1 className="section-heading-primary-content">श्री कृष्ण आरती</h1>
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
ॐ जय श्री कृष्ण हरे प्रभु जय श्री कृष्ण हरे

भक्तन के दुःख सारे पल में दूर करे ||

ॐ जय श्री कृष्ण हरे प्रभु जय श्री कृष्ण हरे

परमानन्द मुरारी मोहन गिरधारी

जय रस रास बिहारी जय जय गिरधारी ||

ॐ जय श्री कृष्ण हरे प्रभु जय श्री कृष्ण हरे

कर कंकन कोटि सोहत कानन में बाला

मोर मुकुट पीताम्बर सोहे बनमाला ||

ॐ जय श्री कृष्ण हरे प्रभु जय श्री कृष्ण हरे

दीन सुदामा तारे दरिद्रों के दुःख टारे

गज के फंद छुड़ाऐ भव सागर तारे ||

ॐ जय श्री कृष्ण हरे प्रभु जय श्री कृष्ण हरे

हिरन्यकश्यप संहारे नरहरि रूप धरे

पाहन से प्रभु प्रगटे जम के बीच परे ||

ॐ जय श्री कृष्ण हरे प्रभु जय श्री कृष्ण हरे

केशी कंस विदारे नल कूबर तारे

दामोदर छवि सुन्दर भगतन के प्यारे ||

ॐ जय श्री कृष्ण हरे प्रभु जय श्री कृष्ण हरे

काली नाग नथैया नटवर छवि सोहे

फन-फन नाचा करते नागन मन मोहे ||

ॐ जय श्री कृष्ण हरे प्रभु जय श्री कृष्ण हरे

राज्य उग्रसेन पाए माता शोक हरे

द्रुपद सुता पत राखी करुणा लाज भरे ||

ॐ जय श्री कृष्ण हरे प्रभु जय श्री कृष्ण हरे

|| ****Krishna Ji Ki Aarti ||****

Om Jai Shri Krishna Hare Prabhu Jai Shri Krishna Hare.

Bhaktan Ke Dukh Sare Pal Me Dur Kare.

Om Jai Shri Krishna Hare, Prabhu Jai Shri Krishna Hare.

Parmanand Murari Mohan Girdhari,

Jai Ras Raas Bihari Jai Jai Girdhari.

Om Jai Shri Krishna Hare, Prabhu Jai Shri Krishna Hare.

Kar Kankan Koti Sohat Kanan Me Bala,

Mor Mukut Pitambar Sohe Banmala.

Om Jai Shri Krishna Hare, Prabhu Jai Shri Krishna Hare.

Din Sudama Tare Daridron Ke Dukh Taare,

Gaj Ke Fand Chhuraaye Bhav Sagar Taare.

Om Jai Shri Krishna Hare, Prabhu Jai Shri Krishna Hare.

Hiranyakashyap Sanhaare Narhari Rup Dhare,

Paahan Se Prabhu Pragate Jam Ke Bich Pare.

Om Jai Shri Krishna Hare, Prabhu Jai Shri Krishna Hare.

Keshi Kans Vidare Nal Kubar Taare.

Damodar Chhawi Sundar Bhagtan Ke Pyaare.

Om Jai Shri Krishna Hare, Prabhu Jai Shri Krishna Hare.

Kali Nag Natheya Natvar Chhavi Sohe,

Fan Fan Nacha Karte Nagan Man Mohe.

Om Jai Shri Krishna Hare, Prabhu Jai Shri Krishna Hare.

Rajya Ugrasen Paaye Mata Shok Hare,

Drupad Suta Pat Rakhi Karuna Laaj Bhare.

Om Jai Shri Krishna Hare, Prabhu Jai Shri Krishna Hare."
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