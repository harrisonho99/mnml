import useMediaQuery from '@material-ui/core/useMediaQuery';
import smallLogo from '../../../img/small-logo.png';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import './libstyle/Header.css';
import { useState, useEffect } from 'react';
import DesktopNav from './DesktopNav';
import { connect } from 'react-redux';
import { searchTermAction } from '../../../redux/actionCreators/normalAction';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import TopAlert from './TopAlert';
import LoginFormModal from './LoginFormModal';
import MobileNav from './MobileNav';
import SearchModal from './SearchModal';
function Header({ dispacth }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDeskLogginShowed, setDeskLogginShow] = useState(false);
  // const [isMobileLogginShowed, setMobileLogginShow] = useState(false);s
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isOpenSearchModal, setOpenSearchModal] = useState(false);
  const matchesMedia = useMediaQuery('(min-width:1000px)');

  //handle outside click nav
  useEffect(() => {
    // if (!isDeskLogginShowed) return;
    const outsideClick = () => {
      setShowMobileNav(false);
    };
    document.body.addEventListener('click', outsideClick);
    return () => {
      document.body.removeEventListener('click', outsideClick);
    };
  }, [isDeskLogginShowed]);

  // input
  const handleSetTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  //submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispacth(searchTermAction(searchTerm));
  };
  //hanlde show loggin
  const handleShowModalLoggin = () => {
    setDeskLogginShow(!isDeskLogginShowed);
  };
  //handle show mobile nav
  const handleShowMoblieNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  //handleShowsSearchModal
  const handleShowsSearchModal = () => {
    setOpenSearchModal(true);
  };
  //handlePropagation
  const handlePropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <header onClick={handlePropagation}>
      <TopAlert content='FREE SHIPPING ON ALL ORDERS OVER' emphasized='50$' />
      {matchesMedia ? (
        <>
          <div className='header-wrapper'>
            <div className='header-logo-wrapper'>
              <Link to='/'>
                <img src={smallLogo} alt='MNML' className='img-logo' />
              </Link>
            </div>
            <div className='header-search-wrapper'>
              <div>
                <form onSubmit={handleSearchSubmit}>
                  <input
                    autoComplete='off'
                    autoCapitalize='off'
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
              <h3 className='header-account'>
                <button
                  className='desk-account-login'
                  onClick={handleShowModalLoggin}
                >
                  <span>ACCOUNT</span>
                </button>
                {isDeskLogginShowed ? <LoginFormModal /> : null}
              </h3>
              <Link to='/cart'>
                <LocalMallOutlinedIcon className='header-cart' />
              </Link>
            </div>
          </div>
          <DesktopNav />
        </>
      ) : (
        <div className='header-wrapper-moblie'>
          <div className='mobile-nav-wrapper'>
            <MenuOutlined
              className='nav-mobile-menu'
              onClick={handleShowMoblieNav}
            />
            <SearchOutlined
              className='nav-mobile-menu'
              onClick={handleShowsSearchModal}
            />
            <MobileNav isShow={showMobileNav} setShow={setShowMobileNav} />
            <SearchModal
              isShow={isOpenSearchModal}
              setShow={setOpenSearchModal}
            />
          </div>
          <div className='mobile-logo-wrapper'>
            <Link to='/'>
              <img src={smallLogo} alt='MNML' className='img-logo' />
            </Link>
          </div>
          <div className='mobile-account-cart-wrapper'>
            <Link to='account-login'>
              <UserOutlined className='mobile-icon' />
            </Link>
            <Link to='/cart'>
              <span className='mobile-icon cart-icon-wrapper'>
                <LocalMallOutlinedIcon />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
const mapDispatchToProps = (dispacth) => ({ dispacth });
export default connect(null, mapDispatchToProps)(Header);
