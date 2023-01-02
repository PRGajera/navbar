import logo from './logo.svg';
import './App.css';


import { FaCube } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

function App() {
  return (
    <nav className='navbar'>
      <div className='container'>
        <a href='#' className='logo'> <FaCube />Untitle UI </a>

        <div className='maintabs'>
          <ul className='tabs'>
            <li className='name'>
              <a href='#' className='deco'>Home</a>
            </li>
            <li className='name'>
              <a href='#' className='deco'>Products</a>
            </li>
            <li className='name'>
              <a href='#' className='deco'>Resource</a>
            </li>
            <li className='name'>
              <a href='#' className='deco'>Pricing</a>
            </li>
            <li className='name'>
              <a href='#' className='deco'>About</a>
            </li>
          </ul >
        </div>
        <div className='profile'>
          <a href='#'><CgProfile /></a>
        </div>

      </div>
    </nav >
  );
}

export default App;
