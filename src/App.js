import logo from './logo.svg';
import './App.css';

import { FaCube } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

function App() {
  return (
    <nav className='container'>
      <div className='logo'>
        <a href='#'> <FaCube />Untitle UI </a>
        </div>
        <div className='maintabs'>
          <ul className='tabs'>
            <li className='name'>
              <a href='#'>Home</a>
            </li>
            <li className='name'><a href='#'>Products</a>
              <ul className='subtabs'>
                <li className='subname'><a href='#'>A</a></li>
                <li className='subname'><a href='#'>B</a></li>
                <li className='subname'><a href='#'>C</a></li>
                <li className='subname'><a href='#'>D</a></li>
            </ul>
            </li>
        
        
        <li className='name'><a href='#'>Resource</a>
          <ul className='subtabs'>

            <li className='subname'><a href='#'>1</a></li>
            <li className='subname'><a href='#'>2</a></li>
        <li className='subname'><a href='#'>3</a></li>
      <li className='subname'><a href='#'>4</a></li>
        
      </ul >
      </li>
      <li className='name'><a href='#'>Pricing</a></li>
      <li className='name'><a href='#'>About</a></li>
    </ul >
</div>
    <div className='profile'>
      <a href='#'><CgProfile/></a>
    </div>

</nav >
  );
}

export default App;
