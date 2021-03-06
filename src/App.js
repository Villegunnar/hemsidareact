import * as React from "react"
import { Routes, Route } from "react-router-dom";
import './Css/style.css'
import './Css/mobile.css'
import './App.css'
// import HamburgerMenu from "./Js/HambugerMenu.js";
// import EasterEgg from './EasterEgg.js';
// import PreviousWork from './PreviousWork.js';
import GitRepos from './GithubRepo.js';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/hemsidareact" element={<Home />} />
        <Route path="/hemsidareact/about" element={<About />} />
        <Route path="/hemsidareact/portfolio" element={<Portfolio />} />
        <Route path="/hemsidareact/cv" element={<Cv />} />
        <Route path="/hemsidareact/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <body>
        <nav className="navbar">
          <div className="brand">
            <img src={require('./logo.png')} alt="Logo" className="logo" />
          </div>
          <div className="nav-list">
            <ul>
              <li>Home</li>
              <li><a href="/hemsidareact/about">About me</a></li>
              <li><a href="/hemsidareact/portfolio">Portfolio</a></li>
              <li><a href="/hemsidareact/cv">CV</a></li>
              <li><a href="/hemsidareact/contact">Contact</a></li>
            </ul>
          </div>
          <div className="social-icons">
            <ul>
              <li><a href="https://www.instagram.com/villegunnar/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="https://twitter.com/villegunnar"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://github.com/Villegunnar"><i className="fa fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/viktor-gunnarsson-089b4b233/"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </nav>
        <div className="toggle-btn">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <header className="header container">
          <div className="circle"></div>
          <div className="row hero">
            <div className="col col-1">
              <h1>Viktor Gunnarsson <span className="highlight">Resume</span></h1>
              <p>
                Jag ??r en blivande Systemutvecklare inom .NET. P?? denna hemsida kan du hitta information om mig, mina utbildningar, mitt cv och kontaktuppgifter.
              </p>
            </div>
            <div className="col col-2">
              <div className="hero-img">
                <img src={require('./Img/IMG_20220331_192624_1102.jpg')} alt="profile" className="profilpic" />
              </div>
            </div>
          </div>
        </header>
        {/* <button id="btn">Button</button> */}
        <section className="contact">
          <div className="container">
            <h3>KONTAKT</h3>
            <h1>Har du ett projekt? Kontakta mig!</h1>
            <h3><i className="fa fa-solid fa-envelope"></i> ViktorGunnarssonJobb@gmail.com</h3>
            <div className="quick-links">
              <div className="brand"><img src={require('./logo.png')} alt="Logo" className="logo" /></div>
              <ul>
                <li><a href="/hemsidareact/home">Home</a></li>
                <li><a href="/hemsidareact/About">About me</a></li>
                <li><a href="/hemsidareact/Portfolio">Portfolio</a></li>
                <li><a href="/hemsidareact/Cv">CV</a></li>
                <li><a href="/hemsidareact/Contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </section>
        <div className="copyright container">
          <p>?? 2022 Viktor Gunnarsson</p>
        </div>
        {/* <script src={HamburgerMenu}></script>  */}
        {/* <script src={EasterEgg}></script> */}
      </body>
    </>
  );
}

function About() {
  return (
    <>
      <body>
        <nav className="navbar">
          <div className="brand">
            <img src={require('./logo.png')} alt="Logo" className="logo" />
          </div>
          <div className="nav-list">
            <ul>
              <li><a href="/hemsidareact/home">Home</a></li>
              <li>About</li>
              <li><a href="/hemsidareact/portfolio">Portfolio</a></li>
              <li><a href="/hemsidareact/cv">CV</a></li>
              <li><a href="/hemsidareact/contact">Contact</a></li>
            </ul>
          </div>
          <div className="social-icons">
            <ul>
              <li><a href="https://www.instagram.com/villegunnar/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="https://twitter.com/villegunnar"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://github.com/Villegunnar"><i className="fa fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/viktor-gunnarsson-089b4b233/"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </nav>
        <div className="toggle-btn">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <header className="header container">
          <div className="circle"></div>
          <div className="row hero">
            <div className="col col-1">
              <h1>Vem ??r  <span className="highlight">Viktor Gunnarsson?</span></h1>
              <p>
                Mitt namn ??r Viktor Gunnarsson jag ??r 29 ??r gammal och ??r bosatt i Falkenberg.
                Jag l??ser nu till systemutvecklare.NET p?? Campus Varberg.
                <br></br>
                Jag har alltid varit intresserad av teknikens v??rld och skulle
                beskriva mig som en v??ldigt nyfiken och ambiti??s person.
                Jag tycker om h??lsa och tr??ning vare sig det ??r promenader eller gym.
                Jag spelar golf, fiskar och spelar ocks?? regelbudet padel med v??nner och kollegor vilket jag tycker ??r j??tteroligt.
                <br></br>
                Efter n??gra ??r p?? Essity som bland annat truckf??rare k??nde jag att jag
                ville utveckas och g??ra ngt som jag verkligen brinner f??r och tog ??ter upp mitt
                intresse f??r datorer och teknik genom att b??rja studera Systemutveckling.Net och har
                verkligen fattat tycke f??r programmering.
              </p>
            </div>
            <div className="col col-2">
              <div className="hero-img">
                <img src={require('./Img/golf.jpg')} alt="Golf" className="profilpic" />
              </div>
            </div>
          </div>
        </header>
        <section className="contact">
          <div className="container">
            <h3>KONTAKT</h3>
            <h1>Har du ett projekt? Kontakta mig!</h1>
            <h3><i className="fa fa-solid fa-envelope"></i> ViktorGunnarssonJobb@gmail.com</h3>
            <div className="quick-links">
              <div className="brand"><img src={require('./logo.png')} alt="Logo" className="logo" /></div>
              <ul>
                <li><a href="/hemsidareact/home">Home</a></li>
                <li>About</li>
                <li><a href="/hemsidareact/portfolio">Portfolio</a></li>
                <li><a href="/hemsidareact/cv">CV</a></li>
                <li><a href="/hemsidareact/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </section>
        <div className="copyright container">
          <p>?? 2022 Viktor Gunnarsson</p>
        </div>
        {/* <script src={HamburgerMenu}></script> */}
      </body>
    </>
  );
}

function Portfolio() {
  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <img src={require('./logo.png')} alt="Logo" className="logo" />
        </div>
        <div className="nav-list">
          <ul>
            <li><a href="/hemsidareact/home">Home</a></li>
            <li><a href="/hemsidareact/about">About me</a></li>
            <li>Portfolio</li>
            <li><a href="/hemsidareact/cv">CV</a></li>
            <li><a href="/hemsidareact/contact">Contact</a></li>
          </ul>
        </div>
        <div className="social-icons">
          <ul>
            <li><a href="https://www.instagram.com/villegunnar/"><i className="fa fa-instagram"></i></a></li>
            <li><a href="https://twitter.com/villegunnar"><i className="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/Villegunnar"><i className="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/viktor-gunnarsson-089b4b233/"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </nav>
      <div className="toggle-btn">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <header className="header container">
        <div className="circle"></div>
        <div className="row hero">
          <div className="col col-1">
            <h1>Viktor Gunnarsson <span className="highlight">Portfolio</span></h1>
            <p>
              Nedan kan du kika p?? n??gra project som jag har varit med och gjort. Placera pekaren ??ver ett object f??r att f?? lite mer information.
            </p>
          </div>
          <div className="col col-2">
            <div className="hero-img">
            </div>
          </div>
        </div>
      </header>

        <GitRepos />  


      <section className="portfolio container">
        <div className="rect-bg"></div>
        <div className="title">
          <h3>PORTFOLIO</h3>
          <div className="ctn-title">
            <h1>Mina Project</h1>
            <h4>Se alla project p?? <span className="highlight"><a href="https://github.com/Villegunnar">Github </a></span><i className="fa fa-solid fa-arrow-right"></i></h4>
          </div>
        </div>
        <div className="grid-wrapper">
          <div className="grid-box">
            <img src={require('./Img/Lion Project.png')} alt="" className="projectLionPic" />
            <div className="hover">
              <h4>Lions Bank Inc</h4>
              <p>Detta ??r ett project som jag gjorde tillsammans med Erik Norell, Lucas Rose och Erik Risholm</p>
              <a href="https://github.com/Villegunnar/Project-Lions" className="highlight">Github<i className="fa fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="grid-box">
            <img src={require('./Img/Avancerad.NetProjectbild.png')} alt="" className="avanceradProject" />
            <div className="hover">
              <h4>Avancerad.Net Projekt</h4>
              <p>I detta Projektet gjorde jag ett REST-API d??r vi st??llde fr??gor fr??n programmet postman.</p>
              <a href="https://github.com/Villegunnar" className="highlight">Github<i className="fa fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="grid-box">
            <img src={require('./Img/DatabasProjekt.png')} alt="" className="DatabasPic" />
            <div className="hover">
              <h4>Databaser Projekt</h4>
              <p>Detta var mitt projekt i databaserkursen. Jag byggde en fungerande applikation som kan h??mta information om fiktiv skola</p>
              <a href="https://github.com/Villegunnar/GymnasieskolaProjektDatabaser" className="highlight">Github<i className="fa fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="grid-box">
            <img src={require('./Img/prj-4.png')} alt="" />
            <div className="hover">
              <h4>Application</h4>
              <a href="https://github.com/Villegunnar" className="highlight">Github<i className="fa fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="grid-box">
            <img src={require('./Img/prj-5.png')} alt="" />
            <div className="hover">
              <h4>Application</h4>
              <a href="https://github.com/Villegunnar" className="highlight">Github<i className="fa fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <h3>KONTAKT</h3>
          <h1>Har du ett projekt? Kontakta mig!</h1>
          <h3><i className="fa fa-solid fa-envelope"></i> ViktorGunnarssonJobb@gmail.com</h3>
          <div className="quick-links">
            <div className="brand"><img src={require('./logo.png')} alt="Logo" className="logo" /></div>
            <ul>
              <li><a href="/hemsidareact/home">Home</a></li>
              <li><a href="/hemsidareact/about">About me</a></li>
              <li>Portfolio</li>
              <li><a href="/hemsidareact/cv">CV</a></li>
              <li><a href="/hemsidareact/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
function Cv() {
  return (
    <>
      <body>
        <nav className="navbar">
          <div className="brand">
            <img src={require('./logo.png')} alt="" className="logo" />
          </div>
          <div className="nav-list">
            <ul>
              <li><a href="/hemsidareact/home">Home</a></li>
              <li><a href="/hemsidareact/about">About me</a></li>
              <li><a href="/hemsidareact/portfolio">Portfolio</a></li>
              <li>CV</li>
              <li><a href="/hemsidareact/contact">Contact</a></li>
            </ul>
          </div>
          <div className="social-icons">
            <ul>
              <li><a href="https://www.instagram.com/villegunnar/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="https://twitter.com/villegunnar"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://github.com/Villegunnar"><i className="fa fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/viktor-gunnarsson-089b4b233/"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </nav>
        <div className="toggle-btn">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <header className="header container">
          <div className="circle"></div>
          <div className="row hero">
            <div className="col col-1">
              <h1>Viktor Gunnarsson <span className="highlight">CV</span></h1>
              <p>
                P?? denna sidan hittar du mitt CV. Skrolla lite l??ngre ner f??r att se mina tidigare arbetserfarenheter och anst??llningar.
              </p>
            </div>
            <div className="col col-2">
              <div className="hero-img">
              </div>
            </div>
          </div>
        </header>
        <div className="scripttest">
          <h1>Mina Tidigare anst??llningar</h1>
          <div className="scriptcontainer">
            <button id="show">Show</button>
            <button id="hide">Hide</button>
            <div id="previousWork"></div>
          </div>
        </div>
        <section className="contact">
          <div className="container">
            <h3>KONTAKT</h3>
            <h1>Har du ett projekt? Kontakta mig!</h1>
            <h3><i className="fa fa-solid fa-envelope"></i> ViktorGunnarssonJobb@gmail.com</h3>
            <div className="quick-links">
              <div className="brand"><img src={require('./logo.png')} alt="" /></div>
              <ul>
              <li><a href="/hemsidareact/home">Home</a></li>
              <li><a href="/hemsidareact/about">About me</a></li>
              <li><a href="/hemsidareact/portfolio">Portfolio</a></li>
              <li>CV</li>
              <li><a href="/hemsidareact/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </section>
        <div className="copyright container">
          <p>?? 2022 Viktor Gunnarsson</p>
        </div>

        {/* <script src={HamburgerMenu}></script> */}
        {/* <script src={PreviousWork}></script> */}
      </body>
    </>
  );
}

function Contact() {
  return (
    <body>
      <nav class="navbar">
        <div class="brand">
          <img src={require('./logo.png')} alt="" class="logo" />
        </div>
        <div class="nav-list">
          <ul>
            <li><a href="/hemsidareact/home">Home</a></li>
            <li><a href="/hemsidareact/about">About me</a></li>
            <li><a href="/hemsidareact/portfolio">Portfolio</a></li>
            <li><a href="/hemsidareact/cv">CV</a></li>
            <li>Contact</li>
          </ul>
        </div>
        <div class="social-icons">
          <ul>
            <li><a href="https://www.instagram.com/villegunnar/"><i class="fa fa-instagram"></i></a></li>
            <li><a href="https://twitter.com/villegunnar"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/Villegunnar"><i class="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/viktor-gunnarsson-089b4b233/"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </nav>
      <div class="toggle-btn">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <header class="header container">
        <div class="row hero">
          <div class="col col-1">
            <h1>Viktor Gunnarsson <span class="highlight">Kontaktuppgifter</span></h1>
            <p>
              Namn: Viktor Gunnarsson <br />
              Adress: Viljansv??gen 26b <br />
              Mobil: 0720043420 <br />
              Email: ViktorGunnarssonJobb@gmail.com
            </p>
            <a href="mailto: viktorgunnarssonjobb@gmail.com" class="ctn">Contact</a>
          </div>
          <div class="col col-2">
            <div class="hero-img">
            </div>
          </div>
        </div>
      </header>
      <section class="contact">
        <div class="container">
          <h3>KONTAKT</h3>
          <h1>Har du ett projekt? Kontakta mig!</h1>
          <h3><i class="fa fa-solid fa-envelope"></i> ViktorGunnarssonJobb@gmail.com</h3>
          <div class="quick-links">
            <div class="brand"><img src={require('./logo.png')} alt="" /></div>
            <ul>
            <li><a href="/hemsidareact/home">Home</a></li>
            <li><a href="/hemsidareact/about">About me</a></li>
            <li><a href="/hemsidareact/portfolio">Portfolio</a></li>
            <li><a href="/hemsidareact/cv">CV</a></li>
            <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>
      <div class="copyright container">
        <p>?? 2022 Viktor Gunnarsson</p>
      </div>
      {/* <script src={HamburgerMenu}></script> */}
    </body>);
}

export default App;
