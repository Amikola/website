import "./header.css";
import { TypeAnimation } from 'react-type-animation';


const namesAndTimes = [
              'Software Developer',
              2500,
              'Data Scientist',
              2500,
              'Student',
              2500,
              'Web Developer',
              2500,
              'Bachlor of Science',
              2500,
            ]


function Header() {
  return (
    <header className="header">
      <div>
        <div>
          <TypeAnimation
            sequence={namesAndTimes}
            wrapper="span"
            speed={40}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <div className="name">Atte Ikola</div>
      </div>
    </header>
  );
}

export default Header;