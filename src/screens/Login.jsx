import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { StudentDashboard } from './StudentDashboard';
import { Link } from 'react-router-dom';

export const Login = () => {
  const { t } = useTranslation('global');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccessful, setLoginSuccessful] = useState({
    success: true,
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const btnRef = useRef(null);
  const spinnerRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setBackendError('');

    const validationErrors = {};
    const emailInput = document.getElementById('email');
    setEmailInput(emailInput);
    const passwordInput = document.getElementById('password');
    setPasswordInput(passwordInput);

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!email.trim()) {
      validationErrors.email = 'email is required';
      emailInput.classList.add('invalid');
      setIsLoading(false);
    } else if (!emailRegex.test(email.trim())) {
      validationErrors.email = 'Invalid email format';
      emailInput.classList.add('invalid');
      setIsLoading(false);
    }

    if (!password.trim()) {
      validationErrors.password = 'Password is required';
      passwordInput.classList.add('invalid');
      setIsLoading(false);
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const data = {
        email: email,
        password: password,
      };

      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log('Estado de la respuesta:', response.status);
          return response.json();
        })

        .then((result) => {
          console.log('Resultado:', result);
          if (result.token) {
            localStorage.setItem('token', result.token);
            localStorage.setItem('email', result.email);
            localStorage.setItem('username', result.username);
            localStorage.setItem('id', result.id);

            setLoginSuccessful({
              success: false,
              email: result.email,
              id: result.id,
              username: result.username,
            });
            setIsLoading(false);
          } else if (result.message) {
            setBackendError(result.message);
            setIsLoading(false);

            if (result.message.includes('email')) {
              emailInput.classList.add('backend-error');
            } else {
              passwordInput.classList.add('backend-error');
            }
          }
        })
        .catch((error) => {
          console.error('Error al realizar la solicitud:', error);
          alert('Ha ocurrido un error al intentar iniciar sesión.');
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      {!loginSuccessful.success ? (
        <StudentDashboard />
      ) : (
        <>
          <div className="header-container">
            <Header />
          </div>
          <section className="section-login">
            <img
              src="/DecorationLines.svg"
              alt=""
              className="decoration-lines"
            />
            <img
              src="/DecorationLinesR.svg"
              alt=""
              className="decoration-lines-r"
            />
            <div className="login-container">
              <h1>{t('login.title')}</h1>
              <br />
              <br />
              <form>
                <input
                  type="email"
                  name="email"
                  id="email"
                  pattern="\S+@\S+\.\S+"
                  placeholder={t('login.emailPlaceholder')}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="on"
                  required
                />
                {errors.email && (
                  <small className="error">{errors.email}</small>
                )}
                <br />
                <br />
                <div className="show-password">
                  <input
                    type="password"
                    placeholder={t('login.passwordPlaceholder')}
                    maxLength="30"
                    minLength="6"
                    id="password"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                  {errors.password && password.trim().length >= 0 && (
                    <small className="error">{errors.password}</small>
                  )}

                  {backendError && (
                    <>
                      <small className="error">{backendError}</small>
                      {(() => {
                        emailInput.classList.add('invalid');
                        passwordInput.classList.add('invalid');
                      })()}
                    </>
                  )}
                </div>
              </form>
              <br />
              <div className="forgot-show-password">
                <a href="">{t('login.forgotPassword')}</a>
                <div className="stay-logged-in">
                  <h2>{t('login.stayLoggedIn')}</h2>
                  <input type="checkbox" className="checkbox" />
                </div>
              </div>

              <button
                type="submit"
                className={`sing-in-btn ${isLoading ? 'loading' : ''}`}
                onClick={handleLogin}
                ref={btnRef}
              >
                {isLoading ? (
                  <img
                    src="BlueLoader.svg"
                    alt=""
                    className="login-loader loader-checked"
                    ref={spinnerRef}
                  />
                ) : (
                  t('login.signIn')
                )}
              </button>

              <div className="separation-line">
                <hr />
                <h6>{t('login.or')}</h6>
                <hr />
              </div>

              <Link to="/create-account" className='login-link-to-create-account'>
                <button className="create-account-sign-in">
                  {t('login.createAccount')}
                </button>
              </Link>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};
