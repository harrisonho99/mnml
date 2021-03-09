import useMediaQuery from '@material-ui/core/useMediaQuery';
// import smallLogo from '../../img/small-logo.png';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import './libstyle/Header.css';
import { useState } from 'react';
import LogoSVG from './LogoSVG';
import { connect } from 'react-redux';
import { searchTermAction } from '../../redux/actionCreators/normalAction';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import TopAlert from './TopAlert';
function Header({ dispacth }) {
  const [searchTerm, setSearchTerm] = useState('');
  const matchesMedia = useMediaQuery('(min-width:1000px)');

  // input
  const handleSetTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  //submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispacth(searchTermAction(searchTerm));
  };

  return (
    <header>
      <TopAlert content='FREE SHIPPING ON ALL ORDERS OVER' emphasized='50$' />
      {matchesMedia ? (
        <>
          <div className='header-wrapper'>
            <div className='header-logo-wrapper'>
              {/* <img src={smallLogo} alt='MNML' /> */}
              <Link to='/'>
                <LogoSVG width='30' height='40' />
              </Link>
            </div>
            <div className='header-search-wrapper'>
              <div>
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type='text'
                    placeholder='SEARCH PRPODUCTS'
                    id='search-input'
                    maxLength='50'
                    value={searchTerm}
                    onChange={handleSetTerm}
                  />
                  <SearchOutlined
                    style={{
                      position: 'absolute',
                      top: 10,
                      right: 16,
                      width: 26,
                      fontSize: 20,
                      color: 'rgb(97, 97, 97)',
                    }}
                  />
                </form>
              </div>
            </div>
            <div className='header-account-cart-wrapper'>
              <Link to='#account-login'>
                <h3 className='header-account'>ACCOUNT</h3>
              </Link>
              <Link>
                <LocalMallOutlinedIcon className='header-cart' />
              </Link>
            </div>
          </div>
          <nav className='desktop-nav'></nav>
        </>
      ) : (
        <div className='header-wrapper-moblie'>
          <div className='mobile-nav-wrapper'>
            <MenuOutlined className='nav-mobile-menu' />
            <SearchOutlined className='nav-mobile-menu' />
          </div>
          <div className='mobile-logo-wrapper'>
            {/* <img src={smallLogo} alt='MNML' /> */}
            <Link to='/'>
              <LogoSVG width='30' height='40' />
            </Link>
          </div>
          <div className='mobile-account-cart-wrapper'>
            <Link to='#account-login'>
              <UserOutlined className='mobile-icon' />
            </Link>
            <Link>
              <LocalMallOutlinedIcon className='mobile-icon' />
            </Link>
          </div>
        </div>
      )}

      {/* <h1>{matchesMedia.toString()}</h1> */}
    </header>
  );
}
const mapDispatchToProps = (dispacth) => ({ dispacth });
export default connect(null, mapDispatchToProps)(Header);
