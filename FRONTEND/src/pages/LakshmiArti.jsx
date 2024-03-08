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
                        <h1 className="section-heading-primary-content">आरती श्री लक्ष्मी जी</h1>
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
॥ आरती श्री लक्ष्मी जी ॥
ॐ जय लक्ष्मी माता,मैया जय लक्ष्मी माता।
तुमको निशिदिन सेवत,हरि विष्णु विधाता॥
ॐ जय लक्ष्मी माता॥
उमा, रमा, ब्रह्माणी,तुम ही जग-माता।
सूर्य-चन्द्रमा ध्यावत,नारद ऋषि गाता॥
ॐ जय लक्ष्मी माता॥
दुर्गा रुप निरंजनी,सुख सम्पत्ति दाता।
जो कोई तुमको ध्यावत,ऋद्धि-सिद्धि धन पाता॥
ॐ जय लक्ष्मी माता॥
तुम पाताल-निवासिनि,तुम ही शुभदाता।
कर्म-प्रभाव-प्रकाशिनी,भवनिधि की त्राता॥
ॐ जय लक्ष्मी माता॥
जिस घर में तुम रहतीं,सब सद्गुण आता।
सब सम्भव हो जाता,मन नहीं घबराता॥
ॐ जय लक्ष्मी माता॥
तुम बिन यज्ञ न होते,वस्त्र न कोई पाता।
खान-पान का वैभव,सब तुमसे आता॥
ॐ जय लक्ष्मी माता॥
शुभ-गुण मन्दिर सुन्दर,क्षीरोदधि-जाता।
रत्न चतुर्दश तुम बिन,कोई नहीं पाता॥
ॐ जय लक्ष्मी माता॥
महालक्ष्मीजी की आरती,जो कोई जन गाता।
उर आनन्द समाता,पाप उतर जाता॥
ॐ जय लक्ष्मी माता॥

॥ Aarti Shri Lakshmi Ji ॥
Om Jai Lakshmi Mata,Maiya Jai Lakshmi Mata।
Tumako Nishidin Sevat,Hari Vishnu Vidhata॥
Om Jai Lakshmi Mata॥
Uma Rama Brahmani,Tum Hi Jag-Mata।
Surya-Chandrama DhyavatNaarad Rishi Gata॥
Om Jai Lakshmi Mata॥
Durga Roop Niranjani,Sukh Sampatti Data।
Jo Koi Tumako Dhyavat,Riddhi-Siddhi Dhan Pata॥
Om Jai Lakshmi Mata॥
Tum Patal-Nivasini,Tum Hi Shubhdata।
Karma-Prabhav-Prakashini,Bhavanidhi Ki Trata॥
Om Jai Lakshmi Mata॥
Jis Ghar Mein Tum Rahti,Sab Sadgun Aata।
Sab Sambhav Ho Jata,Man Nahi Ghabrata॥
Om Jai Lakshmi Mata॥
Tum Bin Yagya Na Hote,Vastra Na Koi Pata।
Khan-Pan Ka Vaibhav,Sab Tumase Aata॥
Om Jai Lakshmi Mata॥
Shubh-Gun Mandir Sundar,Kshirodadhi-Jata।
Ratna Chaturdash Tum Bin,Koi Nahi Pata॥
Om Jai Lakshmi Mata॥
Mahalakshmi Ji Ki Aarti,Jo Koi Jan Gata।
Ur Anand Samata,Paap Utar Jata॥
Om Jai Lakshmi Mata॥"
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