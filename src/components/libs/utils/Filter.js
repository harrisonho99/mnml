import { useMediaQuery } from '@material-ui/core';
import './utilStyle/Filter.css';
import BlackButton from './BlackButton';
import { useState, useRef, useEffect } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const Filter = () => {
  const mobileFilterRef = useRef(null);
  const matchesMedia = useMediaQuery('(min-width:1000px)');
  // const [isMobileFilterExpand, setMobileFilterExpand] = useState(false);
  const hanldeMobileFilterExpand = () => {
    if (mobileFilterRef.current) {
      const filter = mobileFilterRef.current;
      const classArr = Array.from(filter.classList);
      if (classArr.length === 0) {
        return filter.classList.add('filter-expand');
      }
      classArr.forEach((className) => {
        if (className === 'filter-close') {
          filter.classList.remove('filter-close');
          filter.classList.add('filter-expand');
        } else {
          filter.classList.remove('filter-expand');
          filter.classList.add('filter-close');
        }
      });
    }
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
            <div ref={mobileFilterRef} id='mobile-filter' className=''>
              <div id='mobile-filter-list'>
                <div className='mobile-color-filter filter-items'>
                  <h4>
                    <span>COLOR </span>
                    <KeyboardArrowDownIcon style={{ height: '100%' }} />
                  </h4>
                </div>
                <div className='mobile-color-filter filter-items'>
                  <h4>
                    <span>PRICE </span>
                    <KeyboardArrowDownIcon style={{ height: '100%' }} />
                  </h4>
                </div>
                <div className='mobile-color-filter filter-items'>
                  <h4>
                    <span>SIZE </span>
                    <KeyboardArrowDownIcon style={{ height: '100%' }} />
                  </h4>
                </div>
                <div className='mobile-color-filter filter-items'>
                  <h4>
                    <span>TYPE </span>
                    <KeyboardArrowDownIcon style={{ height: '100%' }} />
                  </h4>
                </div>
              </div>
              <div className='apply-filter-wrapper'>
                <BlackButton type='button'>APPLY</BlackButton>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Filter;
