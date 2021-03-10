import './pagestyle/ErrorPage.css';

const ErrorPage = ({ errorMessage = '' }) => {
  return (
    <main>
      <div id='ErrorPage'>
        <h1>{errorMessage}</h1>
      </div>
    </main>
  );
};
export default ErrorPage;
