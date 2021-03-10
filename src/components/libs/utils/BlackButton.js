import './utilStyle/BlackButton.css';
import { createRef, forwardRef, useRef } from 'react';

const BlackButton = (props, ref) => {
  const { children } = props;
  return (
    <div className='search-btn-wrapper'>
      <button type='submit' ref={ref}>
        {children}
      </button>
    </div>
  );
};
const ref = createRef();

const WrappedBlackButton = forwardRef((props, ref) => {
  return <BlackButton {...props} ref={ref} />;
});
export default WrappedBlackButton;
<WrappedBlackButton />;
