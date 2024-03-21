import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { StudentDashboard } from './StudentDashboard';
import { Home } from './Home';

export const Login = () => {
  const { t } = useTranslation('global');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccessful, setLoginSuccessful] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {

        console.log(result.token);


        if (result.token) {
          localStorage.setItem('token', result.token);
          setLoginSuccessful(true)
        } 

        // Redirection
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(data);
  };

  return (
    <>{
      loginSuccessful ? <StudentDashboard/> : <>
    
      <div className="header-container">
        <Header />
      </div>
      <section className="section-login">
        <img src="/DecorationLines.svg" alt="" className="decoration-lines" />
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
              type="text"
              placeholder={t('login.emailPlaceholder')}
              onChange={(event) => setUsername(event.target.value)}
            />
            <br />
            <br />
            <div className="show-password">
              {/* <img src="/Eye.svg" alt="" className="icon" /> */}
              <input
                type="password"
                placeholder={t('login.passwordPlaceholder')}
                maxLength="30"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
              />
              {/* <img src="/EyeClosed.svg" alt="" /> */}
            </div>
          </form>
          <div className="forgot-show-password">
            <a href="">{t('login.forgotPassword')}</a>
            <div className="stay-logged-in">
              <h2>{t('login.stayLoggedIn')}</h2>
              <input type="checkbox" className="checkbox" />
            </div>
          </div>
          <br />
          <br />
          <button type="submit" className="sing-in-btn" onClick={handleLogin}>
            {t('login.signIn')}
          </button>
          <div className="separation-line">
            <hr />
            <h6>{t('login.or')}</h6>
            <hr />
          </div>
          <button className="create-account-sign-in">
            {t('login.createAccount')}
          </button>
        </div>
      </section>
      <Footer />

      </>
    }
    </> 

  );

};
