import './App.css';
import Navigation from './components/navigation';
import About from './components/about-me'
import Skills from './components/skills'
import Portfolio from './components/portfolio-work'
import Footer from './components/footer'

function App() {
  return (
    <div class="container">
            <h1 id="home"> Diamond Williams </h1>
            <h4> Welcome to my Portfolio  </h4>
            <Navigation />
            <h2 id="aboutme"> About Me </h2>
            <About />
            <h2 id="skills">Skills & Experience </h2>
            <Skills />
            <h1 id="projects">Current Projects</h1>
            <Portfolio />
            <hr></hr>
            <Footer />
            <img class="resume" src="./public/DiamondResume.png"></img>
            
    </div>
  );
}


export default App;

