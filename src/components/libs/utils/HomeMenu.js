import { Link } from 'react-router-dom';
import './utilStyle/HomeMenu.css';
import { useMediaQuery } from '@material-ui/core';

const HomeMenu = () => {
  const matchesMedia = useMediaQuery('(min-width:1000px)');

  return (
    <div
      id='home-menu-link'
      style={{ paddingLeft: matchesMedia ? '15rem' : '3rem' }}
    >
      <h3 id='homelink'>
        <Link to='/'>
          <span>HOME</span>
        </Link>
      </h3>
    </div>
  );
};
export default HomeMenu;
