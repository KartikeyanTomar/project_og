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
॥ आरती श्री जगदीशजी ॥

ॐ जय जगदीश हरे, स्वामी ! जय जगदीश हरे।
भक्त जनों के संकट, क्षण में दूर करे॥

ॐ जय जगदीश हरे।

जो ध्यावे फल पावे, दुःख विनसे मन का।
स्वामी दुःख विनसे मन का।
सुख सम्पत्ति घर आवे, कष्ट मिटे तन का॥

ॐ जय जगदीश हरे।

मात-पिता तुम मेरे, शरण गहूँ मैं किसकी।
स्वामी शरण गहूँ मैं किसकी।
तुम बिन और न दूजा, आस करूँ जिसकी॥

ॐ जय जगदीश हरे।

तुम पूरण परमात्मा, तुम अन्तर्यामी।
स्वामी तुम अन्तर्यामी।
पारब्रह्म परमेश्वर, तुम सबके स्वामी॥

ॐ जय जगदीश हरे।

तुम करुणा के सागर, तुम पालन-कर्ता।
स्वामी तुम पालन-कर्ता।
मैं मूरख खल कामी, कृपा करो भर्ता॥

ॐ जय जगदीश हरे।

तुम हो एक अगोचर, सबके प्राणपति।
स्वामी सबके प्राणपति।
किस विधि मिलूँ दयामय, तुमको मैं कुमति॥

ॐ जय जगदीश हरे।

दीनबन्धु दुखहर्ता, तुम ठाकुर मेरे।
स्वामी तुम ठाकुर मेरे।
अपने हाथ उठाओ, द्वार पड़ा तेरे॥

ॐ जय जगदीश हरे।

विषय-विकार मिटाओ, पाप हरो देवा।
स्वमी पाप हरो देवा।
श्रद्धा-भक्ति बढ़ाओ, सन्तन की सेवा॥

ॐ जय जगदीश हरे।

श्री जगदीशजी की आरती, जो कोई नर गावे।
स्वामी जो कोई नर गावे।
कहत शिवानन्द स्वामी, सुख संपत्ति पावे॥

ॐ जय जगदीश हरे।


॥ Aarti Shri Jagdishji ॥
Om Jai Jagadisha Hare, Swami! Jai Jagadisha Hare।
Bhakta Janon Ke Sankata, Kshana Mein Dura Kare॥

Om Jai Jagadisha Hare।

Jo Dhyave Phala Pave, Duhkha Vinase Mana Ka।
Swami Duhkha Vinase Mana Ka।
Sukha Sampatti Ghara Ave, Kashta Mite Tana Ka॥

Om Jai Jagadisha Hare।

Mata Pita Tuma Mere, Sharana Gahun Main Kisaki।
Swami Sharana Gahun Mein Kisaki।
Tuma Bina Aura Na Duja, Aasa Karun Jisaki॥

Om Jai Jagadisha Hare।

Tuma Purana Paramatma, Tuma Antaryami।
Swami Tuma Antaryami।
Parabrahma Parameshwara, Tuma Sabake Swami॥

Om Jai Jagadisha Hare।

Tuma Karuna Ke Sagara, Tuma Palana Karta।
Swami Tuma Palana Karta।
Mein Murakha Khala Kami, Kripa Karo Bharta॥

Om Jai Jagadisha Hare।

Tuma Ho Eka Agochara, Sabake Pranapati।
Swami Sabake Pranapati।
Kisa Vidhi Milun Dayamaya, Tumako Main Kumati॥

Om Jai Jagadisha Hare।

Dinabandhu Dukhaharta, Tuma Thakura Mere।
Swami Tuma Thakura Mere।
Apne Hatha Uthao, Dwara Pada Tere॥

Om Jai Jagadisha Hare।

Vishaya Vikara Mitao, Papa Haro Deva।
Swami Papa Haro Deva।
Shraddha Bhakti Badhao, Santana Ki Seva॥

Om Jai Jagadisha Hare।

Shri Jagadisha Ji Ki Aarti, Jo Koi Nara Gave।
Swami Jo Koi Nara Gave।
Kahata Shivananda Swami, Sukha Sampatti Pave॥

Om Jai Jagadisha Hare।"
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