import logo from './logo.svg';
import './App.css';

import { FaCube } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

function App() {
  return (
    <nav className='navbar'>
      <div className='block'>
        <a href='#' className='logo'> <FaCube />Untitle UI </a>
      </div>
      <div className='maintabs'>
        <ul className='tabs'>
          <li className='name'>
            <a href='#' className='deco'>Home</a>
          </li>
          <li className='name'><a href='#'className='deco'>Products</a>
            <ul className='subtabs'>
              <li className='subname'><a href='#'className='deco'>A</a></li>
              <li className='subname'><a href='#'className='deco'>B</a></li>
              <li className='subname'><a href='#'className='deco'>C</a></li>
              <li className='subname'><a href='#'className='deco'>D</a></li>
            </ul>
          </li>


          <li className='name'><a href='#'className='deco'>Resource</a>
            <ul className='subtabs'>

              <li className='subname'><a href='#'className='deco'>1</a></li>
              <li className='subname'><a href='#'className='deco'>2</a></li>
              <li className='subname'><a href='#'className='deco'>3</a></li>
              <li className='subname'><a href='#'className='deco'>4</a></li>

            </ul >
          </li>
          <li className='name'><a href='#'className='deco'>Pricing</a></li>
          <li className='name'><a href='#'className='deco'>About</a></li>
        </ul >
      </div>
      <div className='profile'>
        <a href='#'><CgProfile /></a>
      </div>


    </nav >
  );
}

export default App;
