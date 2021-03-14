import { NAV_LIST_URL } from '../../../helper/_listNavURL';
import { Link } from 'react-router-dom';
import './libstyle/DesktopNav.css';
export default function DesktopNav() {
  return (
    <nav className='destop-nav'>
      {NAV_LIST_URL.map((item) => {
        return (
          <Link to={item.url} className='nav-item' key={item.title}>
            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
