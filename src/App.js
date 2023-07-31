import logo from './logo.svg';
import './App.css';
import me from '../src/assets/AAC8A38E-3B6C-4C17-8093-3CE28527DB2A.png'
import resume from '../src/assets/myResume.pdf'
import { AiFillGithub } from 'react-icons/ai'
import { LuNewspaper } from 'react-icons/lu'
import { BsLinkedin } from 'react-icons/bs'

function App() {
  return (

    <div class="App">
      <header className="App-header">
        <img src={me} className="App-logo" alt="logo" />
        <p className='shadow-text'>
          Jarron Douglas<br></br>
          Welcome To My Homepage!
        </p>
        <p className='shadow-text'>
        I'm excited to share with you my personal programming projects, delve into my tech interests, and connect with like-minded individuals in the industry.<br></br><br></br>
        Here, you'll find a collection of my coding ventures, ranging from web development to news in cyber security. I'm passionate about pushing the boundaries of technology and constantly striving to learn and grow as a developer.
        Whether you're a fellow programmer, an enthusiast of cutting-edge tech, or simply someone interested in collaborating on exciting projects, I invite you to explore my work and join me on this journey.<br></br><br></br>
        Feel free to reach out and connect with me professionally. I'm always open to engaging in new ventures, discussing ideas, and embracing opportunities to collaborate with talented individuals in the tech community.
        <br></br><br></br>Thank you for visiting, and I look forward to connecting with you soon!
      </p>
      <h1 className='straight'>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/jarron-douglas-7665571ab/"
          target="_blank"
          rel="stylesheet"
        >
          <BsLinkedin size={40} />
        </a>
        <a
          className="App-link"
          href={resume}
          target="_blank"
          rel="stylesheet"
        >
          <LuNewspaper size={40} />
        </a>
        <a
          className="App-link"
          href="https://github.com/jarronadam"
          target="_blank"
          rel="stylesheet"
        >
          <AiFillGithub size={40} />
        </a>
      </h1>
    </header>
    </div >
  );
}

export default App;
