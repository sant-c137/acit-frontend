import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const log = async (e) => {
    e.preventDefault();

    /*      await axios.post('http://127.0.0.1:8000/api/login',{'email':email,'password':password}).then((res)=>console.log(res));

    }
    useEffect(()=>{log()},[])*/
    try {
      const response = await axios.post(
        'http://26.95.135.143:8000/api/login',
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        window.location.pathname = 'dashboard';
      }

      // Assuming the server returns a token upon successful login
      const token = response.data.authorisation.token;

      // Save the token to localStorage
      // localStorage.setItem('authToken', token);

      //save in cookies
      // Cookie.setItem('authToken',token)
      Cookies.set('token', token, { expires: 365 });

      console.log('Login successful');
    } catch (error) {
      console.error('Login failed', error.response.data);
    }
  };
  useEffect(() => {
    log();
  }, []);

  // Save the token to localStorage

  useEffect(() => {
    const pass = document.getElementById('password');
    const icon = document.querySelector('.icon');

    icon.addEventListener('click', () => {
      if (pass.type === 'password') {
        pass.type = 'text';
      } else {
        pass.type = 'password';
      }
    });

    return () => {
      icon.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <>
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
          <h1>تسجيل الدخول</h1>
          <br />
          <br />

          <form onSubmit={(e) => log(e)}>
            <input
              type="text"
              placeholder="البريد الالكتروني"
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />
            <br />

            <div className="show-password">
              <img src="/Eye.svg" alt="" className="icon" />
              <input
                type="password"
                placeholder="كلمة المرور "
                maxLength="30"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <img src="/EyeClosed.svg" alt="" /> */}
            </div>
          </form>

          <div className="forgot-show-password">
            <a href="">هل نسيت كلمة السر ؟</a>

            <div className="stay-logged-in">
              <h2>أبق تسجيل دخولي</h2>
              <input type="checkbox" className="checkbox" />
            </div>
          </div>
          <br />
          <br />

          <button type="submit" className="sing-in-btn">
            تسجيل الدخول
          </button>

          <div className="separation-line">
            <hr />
            <h6>او</h6>
            <hr />
          </div>
          <button className="create-account-sign-in">انشاء حساب</button>
        </div>
      </section>

      <Footer />
    </>
  );
};
