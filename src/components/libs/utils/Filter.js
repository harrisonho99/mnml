import { useMediaQuery } from '@material-ui/core';
import './utilStyle/Filter.css';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const Filter = () => {
  const matchesMedia = useMediaQuery('(min-width:1000px)');
  const [isMobileFilterExpand, setMobileFilterExpand] = useState(false);
  const hanldeMobileFilterExpand = () => {
    setMobileFilterExpand(!isMobileFilterExpand);
  };
  return (
    <>
      {matchesMedia ? (
        <>desktop</>
      ) : (
        <>
          <div id='filter-box' className='filter-box-mobile'>
            <h3 id='filter-title' className='filter-title-mobile'>
              <button id='filter-button' onClick={hanldeMobileFilterExpand}>
                <span>FILTER</span>
                <KeyboardArrowDownIcon style={{ height: '100%' }} />
              </button>
            </h3>
          </div>
        </>
      )}
    </>
  );
};
export default Filter;
