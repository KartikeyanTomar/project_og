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
                        <h1 className="section-heading-primary-content">आरती श्री सरस्वती जी</h1>
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
॥ आरती श्री सरस्वती जी ॥
जय सरस्वती माता,मैया जय सरस्वती माता।
सदगुण वैभव शालिनी,त्रिभुवन विख्याता॥
जय सरस्वती माता॥
चन्द्रवदनि पद्मासिनि,द्युति मंगलकारी।
सोहे शुभ हंस सवारी,अतुल तेजधारी॥
जय सरस्वती माता॥
बाएं कर में वीणा,दाएं कर माला।
शीश मुकुट मणि सोहे,गल मोतियन माला॥
जय सरस्वती माता॥
देवी शरण जो आए,उनका उद्धार किया।
पैठी मंथरा दासी,रावण संहार किया॥
जय सरस्वती माता॥
विद्या ज्ञान प्रदायिनि,ज्ञान प्रकाश भरो।
मोह अज्ञान और तिमिर का,जग से नाश करो॥
जय सरस्वती माता॥
धूप दीप फल मेवा,माँ स्वीकार करो।
ज्ञानचक्षु दे माता,जग निस्तार करो॥
जय सरस्वती माता॥
माँ सरस्वती की आरती,जो कोई जन गावे।
हितकारी सुखकारीज्ञान भक्ति पावे॥
जय सरस्वती माता॥
जय सरस्वती माता,जय जय सरस्वती माता।
सदगुण वैभव शालिनी,त्रिभुवन विख्याता॥
जय सरस्वती माता॥

॥ Aarti Shree Saraswatiji Ki ॥
Jai Saraswati Mata,Maiya Jai Saraswati Mata।
Sadaguna Vaibhava Shalini,Tribhuvana Vikhyata॥
Jai Saraswati Mata॥
Chandravadani Padmasini,Dyuti Mangalakari।
Sohe Shubha Hansa Sawari,Atula Tejadhari॥
Jai Saraswati Mata॥
Bayen Kara Mein Veena,Dayen Kara Mala।
Shisha Mukuta Mani Sohe,Gala Motiyana Mala॥
Jai Saraswati Mata॥
Devi Sharana Jo Aye,Unaka Uddhara Kiya।
Paithi Manthara Dasi,Ravana Samhara Kiya॥
Jai Saraswati Mata॥
Vidya Gyana Pradayini,Gyana Prakasha Bharo।
Moha Agyana Aur Timira Ka,Jaga Se Nasha Karo॥
Jai Saraswati Mata॥
Dhupa Deepa Phala Mewa,Maa Swikara Karo।
Gyanachakshu De Mata,Jaga Nistara Karo॥
Jai Saraswati Mata॥
Maa Saraswati Ki Aarti,Jo Koi Jana Gave।
Hitakari SukhakariGyana Bhakti Pave॥
Jai Saraswati Mata॥
Jai Saraswati Mata,Jai Jai Saraswati Mata।
Sadaguna Vaibhava Shalini,Tribhuvana Vikhyata॥
Jai Saraswati Mata॥"
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