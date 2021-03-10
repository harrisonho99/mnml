import { Link } from 'react-router-dom';
import './libstyle/LoginFormModal.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import * as Yup from 'yup';

import { useFormik } from 'formik';
const LoginFormModal = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(6, 'At Least Have 6 Charactors')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className='form-wrapper'>
      <h4 className='loggin-form-title'>ACCOUNT - SIGN IN</h4>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor='email-input'>Email address</label>
          </div>
          <div className='input-wrapper'>
            <input
              type='text'
              id='email-input'
              className='loggin-input'
              autoComplete='off'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className='form-validate-error'>{formik.errors.email}</div>
          ) : null}
          <div>
            <label htmlFor='password-input'>Password</label>
          </div>
          <div className='input-wrapper'>
            <input
              type='password'
              id='password-input'
              className='loggin-input'
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className='form-validate-error'>{formik.errors.password}</div>
          ) : null}
          <div className='loggin-form-btn-wrapper'>
            <button type='submit'>LOGIN</button>
          </div>
        </form>
        <div className='a-forgot'>
          <Link to='/fogot-password' className='a-underline'>
            Forgot password?
          </Link>
        </div>
        <div className='signin-with-wrapper'>
          <span>OR SIGN IN WITH :</span>
          <Link to='/log-with-facebook'>
            <FacebookIcon className='loggin-form-facebook-icon' />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginFormModal;
