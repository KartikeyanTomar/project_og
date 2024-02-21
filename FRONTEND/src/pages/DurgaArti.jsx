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
|**| माँ दुर्गा आरती ||**

जय अम्बे गौरी, मैया जय श्यामा गौरी।

 तुमको निशदिन ध्यावत, हरि ब्रह्मा शिवरी।।

जय अम्बे गौरी,…।

मांग सिंदूर बिराजत, टीको मृगमद को।

 उज्ज्वल से दोउ नैना, चंद्रबदन नीको।।

जय अम्बे गौरी,…।

कनक समान कलेवर, रक्ताम्बर राजै। 

रक्तपुष्प गल माला, कंठन पर साजै।।

जय अम्बे गौरी,…।

केहरि वाहन राजत, खड्ग खप्परधारी।

 सुर-नर मुनिजन सेवत, तिनके दुःखहारी।।

जय अम्बे गौरी,…।

कानन कुण्डल शोभित, नासाग्रे मोती। 

कोटिक चंद्र दिवाकर, राजत समज्योति।।

जय अम्बे गौरी,…।

शुम्भ निशुम्भ बिडारे, महिषासुर घाती। 

धूम्र विलोचन नैना, निशिदिन मदमाती।।

जय अम्बे गौरी,…।

चण्ड-मुण्ड संहारे, शौणित बीज हरे। 

मधु कैटभ दोउ मारे, सुर भयहीन करे।।

जय अम्बे गौरी,…।

ब्रह्माणी, रुद्राणी, तुम कमला रानी। 

आगम निगम बखानी, तुम शिव पटरानी।।

जय अम्बे गौरी,…।

चौंसठ योगिनि मंगल गावैं, नृत्य करत भैरू। 

बाजत ताल मृदंगा, अरू बाजत डमरू।।

जय अम्बे गौरी,…।

तुम ही जग की माता, तुम ही हो भरता। 

भक्तन की दुःख हरता, सुख सम्पत्ति करता।।

जय अम्बे गौरी,…।

भुजा चार अति शोभित, खड्ग खप्परधारी। 

मनवांछित फल पावत, सेवत नर नारी।।

जय अम्बे गौरी,…।

कंचन थाल विराजत, अगर कपूर बाती। 

श्री मालकेतु में राजत, कोटि रतन ज्योति।।

जय अम्बे गौरी,…।

अम्बेजी की आरती जो कोई नर गावै। 

कहत शिवानंद स्वामी, सुख-सम्पत्ति पावै।।

जय अम्बे गौरी, मैया जय श्यामा गौरी।

# || **Maa Durga Aarti ||**

Jai ambe gauri, mayya jai shyama gauri

Tumko nish-din dhyavat, hari brahma shivji, Jai ambe gauri

Maang sindoor virajat, tiko mrig-mad ko

Ujjwal se dou naina, chandra vadan niko, Jai ambe gauri

Kanak samaan kalewar, raktaambar raaje

Rakt pushp gal-mala, kanthan par saaje, Jai ambe gauri

Kehri vahan rajat, kharag khapar dhaari

Sur nar muni jan sevat, tinke dukh haari, Jai ambe gauri

Kanan kundal shobhit, naas-agre moti

Kotik chandra divakar, sum rajat jyoti, Jai ambe gauri

Shumbh ni-shumbh vidare, mahisha sur ghati

Dhumra-vilochan naina, nish-din- mad mati, Jai ambe gauri

Chandh mundh sangh-haare, shonit beej hare

Madhu kaitabh dou maare, sur bhe heen kare, Jai ambe gauri

Brahmani rudrani, tum kamla rani

Aagam nigam bakhani, tum shiv patrani,Jai ambe gauri

Chon-sath yogini gavat, nritya karat bhairon

Baajat taal mridanga, aur baajat damaroomaroo , Jai ambe gauri

Tum ho jag ki maata, tum hi ho bharta

Bhakto ki dukh harata, sukh sampati karata, Jai ambe gauri

Bhuja chaar ati shobit, var mudra dhaari

Man vaanchit phal pavat, sevat nar naari, Jai ambe gauri

Kanchan thaal virajat, agar kapoor baati

Shri maal-ketu me rajat, kotik ratan jyoti, Jai ambe gauri

Shri ambe-ji-ki aaarti, jo koi nar gaave

Kahat shivanand swami, sukh sampati pave, Jai ambe gauri"
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