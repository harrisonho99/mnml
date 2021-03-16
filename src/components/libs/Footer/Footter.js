import useMediaQuery from '@material-ui/core/useMediaQuery';
import { connect } from 'react-redux';
import smallLogo from '../../../img/small-logo.png';
import './libstyle/footer.css';
import { Container } from '@material-ui/core';
function Footer({ dispacth }) {
  const matchesMedia = useMediaQuery('(min-width:1000px)');

  return (
    <footer>
      {/* {matchesMedia ? null : 1} */}
      <Container>
        <section className={'footer-top-content'}>
          <div className='footer-top-left'>
            <div className='footer-logo'>
              <img src={smallLogo} alt='logo' />
            </div>
            <div className='footer-info'>
              <p>Search</p>
              <p>Contact Us</p>
              <p>Shipping</p>
              <p>Returns + Exchanges</p>
              <p>Terms + Conditions</p>
              <p>Privacy policy</p>
              <p>Our story</p>
            </div>
          </div>
          <div className='footer-top-right'>
            <div className='label-wrapper'>
              <label htmlFor='input-user-email'>
                BE FIRST TO KNOW ABOUT RELEASES AND RESTOCKS
              </label>
            </div>
            <div className='footer-email-input'>
              <input
                type='text'
                placeholder='Email address'
                id='input-user-email'
              />
              <button type='button'>SIGN UP</button>
            </div>
          </div>
        </section>
        <section className='footer-bottom-content'></section>
      </Container>
    </footer>
  );
}
const mapDispatchToProps = (dispacth) => ({ dispacth });
export default connect(null, mapDispatchToProps)(Footer);
