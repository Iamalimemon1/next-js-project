import Link from 'next/link';
import Head from './components/Head';

export default function Home() {
  return (
    <div>
      <Head />
      {/* Scroll Button start */}
      <div className="scroll-up-btn">
        <i className="fas fa-angle-double-up"></i>
      </div>
      {/* Scroll Button end */}

      {/* Navbar Start */}
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <Link href="#">Ali<span>designzz.</span></Link>
          </div>
          <ul className="menu">
            <li>
              <Link href="#home" className="menu-btn">Home</Link>
            </li>
            <li>
              <Link href="#about" className="menu-btn">About</Link>
            </li>
            <li>
              <Link href="#skills" className="menu-btn">Skills</Link>
            </li>
            <li>
              <Link href="https://drive.google.com/drive/folders/1FP58G4SrHn7vL_QWFaza3FsA3xvZ85FG?usp=sharing" target="_blank" className="menu-btn">Portfolio</Link>
            </li>
            <li>
              <Link href="#contact" className="menu-btn">Contact</Link>
            </li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Home Section Start */}
      <section className="home" id="home" style={{ background: 'url(./img/banner.jpg)', backgroundRepeat: 'round', backgroundPosition: 'initial' }}>
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello 👋 I'm</div>
            <div className="text-2">Ali Jawaid</div>
            <div className="text-3">And I'm a <span className="typing"></span></div>
            <Link href="#contact" className="web">I need a website <i className="fad fa-angle-right"></i></Link>
            <Link href="https://www.linkedin.com/in/alidesignzz/" target="_blank" rel="noreferrer">I'm looking to hire <i className="fad fa-angle-right"></i></Link>
          </div>
        </div>
      </section>
      {/* Home Section End */}

      {/* About section start */}
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src="img/Ali Jawaid.jpg" alt="Ali-Jawaid" />
              <div>
                <div className="wrapper">
                  <div className="button1">
                    <div className="icon">
                      <Link href="https://www.linkedin.com/in/alidesignzz/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </div>
                    <span>LinkedIn</span>
                  </div>
                  <div className="buttonmob">
                    <div className="button1">
                      <div className="icon">
                        <Link href="https://twitter.com/alidesignzz" target="_blank" rel="noreferrer">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </div>
                      <span>Twitter</span>
                    </div>
                  </div>
                  <div className="button1">
                    <div className="icon">
                      <Link href="https://github.com/Iamalimemon1" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                      </Link>
                    </div>
                    <span>Github</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">I'm Ali Jawaid and <span className="break">I'm a <span className="typing2"></span></span></div>
              <p>I am a dedicated front-end developer and graphic designer focused on creating attractive, user-friendly websites...</p>
            </div>
          </div>
        </div>
      </section>
      {/* About section End */}

      {/* Skills section start */}
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title fadein">My skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My creative skills & experiences</div>
              <p>I am a dedicated front-end developer and graphic designer focused on creating visually appealing and user-friendly websites...</p>
            </div>
            <div className="column right">
              <div className="info">
                <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                  <img src="./img/javascript.png" alt="javascript" width="80" />
                </Link>
                <Link href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img src="./img/react.png" alt="react.js" width="80" />
                </Link>
                <Link href="https://nextjs.org/" target="_blank" rel="noreferrer">
                  <img src="./img/nextjs.png" alt="next.js" width="80" />
                </Link>
                <Link href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noreferrer">
                  <img src="./img/Adobe Photoshop.png" alt="MUI Material" width="80" />
                </Link>
                <Link href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                  <img src="./img/typescript.png" alt="typeScript" width="80" />
                </Link>
                <Link href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noreferrer">
                  <img src="./img/adobe-illustrator.png" alt="redux" width="80" />
                </Link>
                <Link href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <img src="./img/node-js.png" alt="nodejs" width="80" />
                </Link>
                <Link href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                  <img src="./img/html5.png" alt="html5" width="80" />
                </Link>
                <Link href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                  <img src="./img/css3.png" alt="css3" width="80" />
                </Link>
                <Link href="https://getbootstrap.com" target="_blank" rel="noreferrer">
                  <img src="./img/bootstrap.png" alt="bootstrap" width="80" />
                </Link>
                <Link href="www.figma.com" target="_blank" rel="noreferrer">
                  <img src="./img/figma.png" alt="sass" width="80" />
                </Link>
                <Link href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                  <img src="./img/tailwind-css.png" alt="react" width="80" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills section end */}

      {/* Contact section start */}
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Reach Out to me!</div>
              <p>Discuss a Project or just want to say Hi? My inbox is open for all.</p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Ali Jawaid</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Hyderabad, Pakistan</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope email-icon"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title"><Link href="mailto:iamalimemon11@gmail.com">iamalimemon11@gmail.com</Link></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <form>
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div className="field message">
                    <textarea placeholder="Message" required></textarea>
                  </div>
                </div>
                <div className="button">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact section End */}
    </div>
  );
}
