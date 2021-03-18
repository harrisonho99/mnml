import { useMediaQuery } from '@material-ui/core';
import './utilStyle/Filter.css';
import BlackButton from './BlackButton';
import { useState, useRef, useEffect } from 'react';
import { Slider } from 'antd';
import { connect } from 'react-redux';
import { filterAction } from '../../../redux/actionCreators/filterAction';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { FILTER } from '../../../helper/_listNavURL';
const Filter = ({ dispatch, route }) => {
  const mobileFilterRef = useRef(null);
  const [filtered, setfilterrd] = useState({
    filteredColor: null,
    filteredPrice: [FILTER.price.from, FILTER.price.to],
    filteredSize: null,
    filteredType: null,
  });
  const listFilterRef = useRef(null);
  const rangePriceRef = useRef(null);
  const matchesMedia = useMediaQuery('(min-width:1000px)');
  // const [filterRangePrice, setFilterRangePrice] = useState([
  //   FILTER.price.from,
  //   FILTER.price.to,
  // ]);
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
    setfilterrd({ ...filtered, filteredPrice: value });
  };
  //handle Submit Filter to Redux
  const handleSubmitFilter = () => {
    dispatch(filterAction(route, filtered));
    //after apply filter , close the filterbar
    mobileFilterRef.current.classList.remove('filter-expand');
    mobileFilterRef.current.classList.add('filter-close');
  };
  //handle filter change
  const handleFilterColor = function (value) {
    setfilterrd({ ...filtered, filteredColor: value });
  };
  const handleFilterType = function (value) {
    setfilterrd({ ...filtered, filteredType: value });
  };
  const handleFilterSize = function (value) {
    setfilterrd({ ...filtered, filteredSize: value });
  };
  return (
    <>
      {matchesMedia ? (
        <>DESKTOP</>
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
                    {FILTER.color.map((color) => {
                      return (
                        <div
                          key={color.value}
                          className='color-item mini-box'
                          style={{
                            backgroundColor: color.value,
                            border: `${
                              filtered.filteredColor === color.value
                                ? '5px solid #2979ff'
                                : 'none'
                            }`,
                          }}
                          onClick={() => {
                            handleFilterColor(color.value);
                          }}
                        ></div>
                      );
                    })}
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
                      defaultValue={filtered.filteredPrice}
                      value={filtered.filteredPrice}
                      onChange={handleRangeChange}
                    />
                    <p>
                      From&nbsp;: {filtered.filteredPrice[0]}$
                      &emsp;&emsp;&emsp;&emsp; To:&nbsp;
                      {filtered.filteredPrice[1]}$
                    </p>
                  </div>
                </div>
                <div className='mobile-color-filter filter-items'>
                  <h4>
                    <span>SIZE </span>
                    <KeyboardArrowDownIcon style={{ height: '100%' }} />
                  </h4>
                  <div id='size-filter'>
                    {FILTER.size.map((size) => {
                      return (
                        <div
                          className='mini-box'
                          key={size.value}
                          onClick={() => {
                            handleFilterSize(size.value);
                          }}
                          style={{
                            border: `${
                              filtered.filteredSize === size.value
                                ? '3px solid #2979ff'
                                : 'none'
                            }`,
                          }}
                        >
                          {size.value}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className='mobile-color-filter filter-items'>
                  <h4>
                    <span>TYPE</span>
                    <KeyboardArrowDownIcon style={{ height: '100%' }} />
                  </h4>
                  <div id='type-filter'>
                    {FILTER.type.map((type) => {
                      return (
                        <div
                          className='mini-box'
                          key={type.value}
                          onClick={() => {
                            handleFilterType(type.value);
                          }}
                          style={{
                            border: `${
                              filtered.filteredType === type.value
                                ? '3px solid #2979ff'
                                : 'none'
                            }`,
                          }}
                        >
                          {type.value}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className='apply-filter-wrapper'>
                <BlackButton type='button' onClick={handleSubmitFilter}>
                  APPLY
                </BlackButton>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});
const mapStateToProps = ({ setRoute }) => ({ route: setRoute.route });
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
