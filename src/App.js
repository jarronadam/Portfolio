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
           Douglas<br></br>
          Welcome To My Homepage!
        </p>
        <p className='shadow-text'>
        Im excited to show you all my work as a upcoming computer science graduate and to put together a space for my work to be displayed and for those with similar interest to collaborate on future projects! <br></br><br></br>I am currently a senior attending the College of New Jersey with strong interest in both cyber security and Software engineering. <br></br>Thank for visit and I hope to hear from you soon! 
      </p>
      <h1 className='straight'>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/jarron-douglas-7665571ab/"
          rel="stylesheet"
        >
          <BsLinkedin size={40} />
        </a>
        <a
          className="App-link"
          href={resume}
          rel="stylesheet"
        >
          <LuNewspaper size={40} />
        </a>
        <a
          className="App-link"
          href="https://github.com/jarronadam"
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
