import { FunctionComponent } from 'react';
import { Formik, Form } from 'formik';
import { loginInitialValues } from '../../constants/loginInitialValues';
import { loginShema } from '../../schemas/loginSchema';
import TextInput from '../../components/TextInput/TextInput';
import { ILogin } from '../../interfaces/forms/ILogin';
import { login } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import { errorMsg } from '../../services/feedbackService';

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const navigate = useNavigate();
  const handleSubmit = (values: ILogin) => {
    login(values)
      .then((response) => {
        const userToken = response.data;
        sessionStorage.setItem('token', userToken);
        navigate('/');
      })
      .catch((error) => errorMsg(error.response.data));
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
            <Form>
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

                <button type='button' className='btn btn-secondary' onClick={() => resetForm()}>
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
