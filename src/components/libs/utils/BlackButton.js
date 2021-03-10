import './utilStyle/BlackButton.css';

const BlackButton = ({ children, type, onClick }) => {
  const buttonClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <div className='search-btn-wrapper'>
      <button type={type} onClick={buttonClick}>
        {children}
      </button>
    </div>
  );
};
export default BlackButton;
