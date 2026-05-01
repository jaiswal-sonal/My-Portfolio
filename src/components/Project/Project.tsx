import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import ScrollAnimation from "react-animate-on-scroll";

const GITHUB = "https://github.com/jaiswal-sonal";

const FolderSVG = () => (
  <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <title>Folder</title>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <FolderSVG />
              <div className="project-links">
                <a href={`${GITHUB}/AI-Code-Reviewer`} target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>AI Code Reviewer</h3>
              <p>
                Node.js + Express server integrated with Google Generative AI for intelligent, real-time code analysis. Features AI-driven feedback via structured POST requests, PrismJS for syntax highlighting, and Markdown rendering for polished output.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Google Gemini AI</li>
                <li>Axios</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <FolderSVG />
              <div className="project-links">
                <a href={`${GITHUB}/Instagram-clone`} target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Instagram Clone</h3>
              <p>
                Feature-rich social media clone with scalable Node.js + Express backend, MongoDB schemas via Mongoose, AJAX + Axios for async interactions, image uploads with Multer.js, RESTful APIs, and a dynamic EJS-powered UI.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>EJS</li>
                <li>Multer.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <FolderSVG />
              <div className="project-links">
                <a href={`${GITHUB}/Pinterest-clone`} target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Pinterest Clone</h3>
              <p>
                Pinterest-inspired platform built with Node.js and Express. Includes user authentication with Passport.js, ChatGPT AI integration for enhanced engagement, Multer.js for image uploads, and RESTful API standards.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Passport.js</li>
                <li>ChatGPT API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <FolderSVG />
              <div className="project-links">
                <a href={`${GITHUB}/Real-time-tracker`} target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Real-Time Tracker</h3>
              <p>
                Live location tracking app powered by Socket.io for real-time bidirectional communication. Features a Leaflet.js map UI that updates user positions instantly with smooth, responsive geolocation data.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>Socket.io</li>
                <li>Leaflet.js</li>
                <li>Express.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <FolderSVG />
              <div className="project-links">
                <a href={`${GITHUB}/Malware-Detection`} target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Malware Detection</h3>
              <p>
                ML-based malware detection system using Python and Scikit-learn. Applies classification algorithms on feature-engineered datasets to accurately identify malicious files — built on skills gained during the IBM Data Science internship.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Scikit-learn</li>
                <li>TensorFlow</li>
                <li>Pandas</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <FolderSVG />
              <div className="project-links">
                <a href={`${GITHUB}/Tic-Tac-Toe`} target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Tic Tac Toe</h3>
              <p>
                Interactive Tic Tac Toe game with a clean responsive UI, real-time win/draw detection logic, and smooth game-state management. A fun demonstration of core JavaScript and DOM manipulation skills.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
