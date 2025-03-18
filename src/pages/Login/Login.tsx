import '../../components/Forms/Forms.css';

import { FunctionComponent } from 'react';
import { Formik, Form } from 'formik';
import { loginInitialValues } from '../../constants/loginInitialValues';
import { loginShema } from '../../schemas/loginSchema';
import TextInput from '../../components/TextInput/TextInput';
import { ILogin } from '../../interfaces/forms/ILogin';
import { userLogin } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import { errorMsg, sucessMsg } from '../../services/feedbackService';
import './Login.css';
import { removeColon } from '../../utils/removeColon';
import useAuto from '../../context/AuthContext';

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const { login } = useAuto();
  const navigate = useNavigate();

  const handleSubmit = (values: ILogin) => {
    userLogin(values)
      .then((response) => {
        const userToken = response.data;
        // save token in session storage
        sessionStorage.setItem('token', userToken);
        login();
        sucessMsg('logged in successfully');
        navigate('/');
      })
      .catch((error) => errorMsg(removeColon(error.response.data)));
  };

  return (
    <article className='login section'>
      <div className='login-container container'>
        <h2 className='section-title'>Login</h2>

        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginShema}
          onSubmit={handleSubmit}
        >
          {({ dirty, isValid, resetForm }) => (
            <Form className='login-container container'>
              <div className='form-data'>
                <div className='input-group'>
                  <TextInput
                    label='Email'
                    name='email'
                    type='text'
                    required={true}
                  />
                </div>

                <div className='input-group'>
                  <TextInput
                    label='Password'
                    name='password'
                    type='text'
                    required={true}
                  />
                </div>
              </div>

              <div className='form-btns-container grid'>
                <button
                  type='submit'
                  className='btn'
                  disabled={!dirty || !isValid}
                >
                  Login
                </button>

                <button
                  type='button'
                  className='btn btn-secondary'
                  onClick={() => resetForm()}
                >
                  Clear
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </article>
  );
};

export default Login;
