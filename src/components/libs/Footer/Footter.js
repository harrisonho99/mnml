import useMediaQuery from '@material-ui/core/useMediaQuery';
import './libstyle/footer.css';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { useState } from 'react';
import { subcribeEmail } from '../../../redux/actionCreators/normalAction';
import MobileFooter from './MobileFooter';

import DesktopFooter from './DesktopFooter';
function Footer({ dispatch }) {
  const matchesMedia = useMediaQuery('(min-width:1000px)');
  const [email, setEmail] = useState('');
  const handleSubmitEmailSubcribe = (e) => {
    e.preventDefault();
    dispatch(subcribeEmail(email));
    setEmail('');
  };
  const handleInputValue = (e) => {
    setEmail(e.target.value);
  };
  return (
    <footer>
      <Container>
        {matchesMedia ? (
          <DesktopFooter
            handleSubmitEmailSubcribe={handleSubmitEmailSubcribe}
            handleInputValue={handleInputValue}
            email={email}
          />
        ) : (
          <MobileFooter
            handleSubmitEmailSubcribe={handleSubmitEmailSubcribe}
            handleInputValue={handleInputValue}
            email={email}
          />
        )}
      </Container>
    </footer>
  );
}
const mapDispatchToProps = (dispatch) => ({ dispatch });
export default connect(null, mapDispatchToProps)(Footer);
