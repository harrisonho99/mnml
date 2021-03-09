import { NAV_LIST_URL } from '../../helper/_listNavURL';
import { Link } from 'react-router-dom';
const MobileNav = ({ isShow }) => {
  const renderListNav = () => {
    return NAV_LIST_URL.map((item) => {
      return (
        <div className='nav-link-wrapper'>
          <Link to={item.url} className='nav-item' key={item.title}>
            <h3 className='mobile-nav-text'>{item.title}</h3>
          </Link>
        </div>
      );
    });
  };
  return (
    <nav className={`mobile-nav ${isShow ? 'nav-show' : 'none'}`}>
      {renderListNav()}
    </nav>
  );
};
export default MobileNav;
