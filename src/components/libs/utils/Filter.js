import { useMediaQuery } from '@material-ui/core';
import './utilStyle/Filter.css';
import BlackButton from './BlackButton';
import { useState, useRef, useEffect } from 'react';
import { Slider } from 'antd';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const Filter = () => {
  const mobileFilterRef = useRef(null);
  const listFilterRef = useRef(null);
  const rangePriceRef = useRef(null);
  const matchesMedia = useMediaQuery('(min-width:1000px)');
  const [filterRangePrice, setFilterRangePrice] = useState([0, 100]);
  //handle tongle filter mobile
  useEffect(() => {
    if (listFilterRef.current) {
      //tongle filter forEach items
      const toogleFilterItems = function () {
        if (
          !this.classList.contains('filter-item-expand') &&
          !this.classList.contains('filter-item-close')
        ) {
          this.classList.add('filter-item-expand');
        } else if (this.classList.contains('filter-item-close')) {
          this.classList.remove('filter-item-close');
          this.classList.add('filter-item-expand');
        } else {
          this.classList.remove('filter-item-expand');
          this.classList.add('filter-item-close');
        }
      };
      const filterItems = Array.from(listFilterRef.current.childNodes);
      filterItems.forEach((filter) => {
        filter.addEventListener('click', toogleFilterItems);
      });
      return () => {
        filterItems.forEach((filter) => {
          filter.removeEventListener('click', toogleFilterItems);
        });
      };
    }
  }, [matchesMedia]);

  // handle move range propagate out side
  useEffect(() => {
    if (rangePriceRef.current) {
      const handleClickPropagate = (e) => {
        e.stopPropagation();
      };
      const range = rangePriceRef.current;
      range.addEventListener('click', handleClickPropagate);
      return () => {
        range.removeEventListener('click', handleClickPropagate);
      };
    }
  }, []);
  // expand filter wrapper
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
  // handle filter price
  const handleRangeChange = (value) => {
    setFilterRangePrice(value);
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
              <div id='mobile-filter-list' ref={listFilterRef}>
                <div className='mobile-color-filter filter-items'>
                  <h4>
                    <span>COLOR </span>
                    <KeyboardArrowDownIcon style={{ height: '100%' }} />
                  </h4>
                  <div id='color-palette'>
                    <div className='color-item red mini-box'></div>
                    <div className='color-item green mini-box'></div>
                    <div className='color-item blue mini-box'></div>
                    <div className='color-item yellow mini-box'></div>
                    <div className='color-item black mini-box'></div>
                    <div className='color-item white mini-box'></div>
                    <div className='color-item grey mini-box'></div>
                  </div>
                </div>
                <div className='mobile-color-filter filter-items'>
                  <h4>
                    <span>PRICE </span>
                    <KeyboardArrowDownIcon style={{ height: '100%' }} />
                  </h4>
                  <div id='range-price' ref={rangePriceRef}>
                    <Slider
                      range
                      defaultValue={filterRangePrice}
                      value={filterRangePrice}
                      onChange={handleRangeChange}
                    />
                    <p>
                      From&nbsp;: {filterRangePrice[0]}$
                      &emsp;&emsp;&emsp;&emsp; To:&nbsp;
                      {filterRangePrice[1]}$
                    </p>
                  </div>
                </div>
                <div className='mobile-color-filter filter-items'>
                  <h4>
                    <span>SIZE </span>
                    <KeyboardArrowDownIcon style={{ height: '100%' }} />
                  </h4>
                  <div id='size-filter'>
                    <div className='mini-box'>XS</div>
                    <div className='mini-box'>S</div>
                    <div className='mini-box'>M</div>
                    <div className='mini-box'>L</div>
                    <div className='mini-box'>XL</div>
                  </div>
                </div>
                <div className='mobile-color-filter filter-items'>
                  <h4>
                    <span>TYPE</span>
                    <KeyboardArrowDownIcon style={{ height: '100%' }} />
                  </h4>
                  <div id='type-filter'>
                    <div className='mini-box'>Short</div>
                    <div className='mini-box'>TrackPant</div>
                    <div className='mini-box'>Hoodie</div>
                    <div className='mini-box'>Jackjet</div>
                    <div className='mini-box'>Tee</div>
                  </div>
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
