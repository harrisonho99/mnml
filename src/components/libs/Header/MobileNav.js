import { NAV_LIST_URL } from '../../../helper/_listNavURL';
import { Link } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
const MobileNav = ({ isShow, setShow }) => {
  const renderListNav = () => {
    return NAV_LIST_URL.map((item) => {
      return (
        <div className='nav-link-wrapper' key={item.title}>
          <Link to={item.url} className='nav-item'>
            <h3 className='mobile-nav-text'>{item.title}</h3>
          </Link>
        </div>
      );
    });
  };
  const handleClickOutSideNav = () => {
    setShow(false);
  };
  const handleCloseNav = () => {
    setShow(false);
  };
  return (
    <div
      className={`nav-modal-wrapper ${
        isShow ? 'nav-wrapper-block' : 'nav-wrapper-none'
      }`}
      onClick={handleClickOutSideNav}
    >
      <nav className={`mobile-nav ${isShow ? 'nav-show' : 'none'}`}>
        <div className='nav-link-wrapper nav-link-wrapper-icon'>
          <button onClick={handleCloseNav}>
            <CloseOutlined className='nav-mobile-close-icon' />
          </button>
        </div>
        {renderListNav()}
      </nav>
    </div>
  );
};
export default MobileNav;
