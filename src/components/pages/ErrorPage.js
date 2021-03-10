import './pagestyle/ErrorPage.css';
import BlackButton from '../libs/utils/BlackButton';
import { useHistory } from 'react-router-dom';
const ErrorPage = ({ errorMessage, subMessage }) => {
  const history = useHistory();

  const handleBackToHome = () => {
    history.push('/');
  };
  return (
    <main>
      <div id='ErrorPage'>
        <div id='error-wrapper'>
          <h1>{errorMessage}</h1>
          <p> {subMessage}</p>
        </div>
        <BlackButton type='button' onClick={handleBackToHome}>
          BACK TO HOME PAGE
        </BlackButton>
      </div>
    </main>
  );
};
export default ErrorPage;
