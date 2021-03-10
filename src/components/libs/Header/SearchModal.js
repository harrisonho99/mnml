import './libstyle/Header.css';
import { useState } from 'react';
import { connect } from 'react-redux';
import { searchTermAction } from '../../../redux/actionCreators/normalAction';
// import BlackButton from '../utils/BlackButton';
const SearchModal = ({ isShow, setShow, dispatch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleClickOutside = () => {
    setShow(false);
  };
  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      dispatch(searchTermAction(searchTerm));
      searchTermAction('');
    }
  };
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  return isShow ? (
    <div className='search-wrapper' onClick={handleClickOutside}>
      <div id='mobile-form-wrapper'>
        <form onClick={handleStopPropagation} onSubmit={handleFormSubmit}>
          <div className='label-search'>
            <label htmlFor='search-input'>SEARCH PRODUCT</label>
          </div>
          <input
            autoComplete='off'
            autoCapitalize='off'
            type='text'
            placeholder='SEARCH PRODUCTS'
            id='search-input'
            value={searchTerm}
            onChange={handleSearchTerm}
          />
          <div className='search-btn-wrapper'>
            <button type='submit'>SEARCH</button>
          </div>
          {/* <BlackButton>SEARCH</BlackButton> */}
        </form>
      </div>
    </div>
  ) : null;
};
const mapDispatchToProps = (dispatch) => ({ dispatch });
export default connect(null, mapDispatchToProps)(SearchModal);
