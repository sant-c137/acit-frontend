import { useTranslation } from 'react-i18next';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import './CreateAccount.css';

const CreateAccount = () => {
  const { t } = useTranslation('global');

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullNameAr: '',
    phone: '',
    birthDate: '',
    gender: '',
    city: '',
    education: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.username.trim()) {
      validationErrors.username = 'username is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'email is not valid';
    }

    if (!formData.password.trim()) {
      validationErrors.password = 'password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'password is not valid';
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = 'password not matched';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully');
      console.log(formData);
      setErrors({});
    }
  };

  const handleCreateAccount = () => {
    // Lógica para crear una nueva cuenta
  };

  const handleSignIn = () => {
    // Lógica para iniciar sesión
  };

  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <section className="section-create-account">
        <img src="/DecorationLines.svg" alt="" className="decoration-lines" />
        <img
          src="/DecorationLinesR.svg"
          alt=""
          className="decoration-lines-r"
        />
        <div className="create-account-container">
          <h1>{t('createAccount.title')}</h1>
          <br />
          <br />
          <form onSubmit={handleSubmit} className="formulary">
            <div>
              <label htmlFor="fullNameEn">
                {t('createAccount.fullNameEnglish')}
              </label>
              <input
                type="text"
                id="fullNameEn"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <small className="error">{errors.username}</small>
              )}
            </div>

            <div>
              <label htmlFor="fullNameAr">
                {t('createAccount.fullNameArabic')}
              </label>
              <input
                type="text"
                id="fullNameAr"
                name="fullNameAr"
                value={formData.fullNameAr}
                onChange={handleChange}
              />
              {errors.fullNameAr && (
                <small className="error">{errors.fullNameAr}</small>
              )}
            </div>

            <div>
              <label htmlFor="email">{t('createAccount.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small className="error">{errors.email}</small>}
            </div>

            <div>
              <label htmlFor="phone">{t('createAccount.phone')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <small className="error">{errors.phone}</small>}
            </div>

            <div>
              <label htmlFor="password">{t('createAccount.password')}</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <small className="error">{errors.password}</small>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword">
                {t('createAccount.confirmPassword')}
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <small className="error">{errors.confirmPassword}</small>
              )}
            </div>

            <div>
              <label htmlFor="birthDate">{t('createAccount.birthDate')}</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
              />
              {errors.birthDate && (
                <small className="error">{errors.birthDate}</small>
              )}
            </div>

            <div>
              <label htmlFor="gender">{t('createAccount.gender')}</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">{t('createAccount.selectGender')}</option>
                <option value="male">{t('createAccount.male')}</option>
                <option value="female">{t('createAccount.female')}</option>
                <option value="other">{t('createAccount.other')}</option>
              </select>
              {errors.gender && (
                <small className="error">{errors.gender}</small>
              )}
            </div>

            <div>
              <label htmlFor="city">{t('createAccount.city')}</label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              >
                <option value="">{t('createAccount.selectCity')}</option>
                {/* Puedes agregar tus opciones de ciudad aquí */}
                <option value="ciudad1">{t('createAccount.ciudad1')}</option>
                <option value="ciudad2">{t('createAccount.ciudad2')}</option>
                {/* ... */}
              </select>
              {errors.city && <small className="error">{errors.city}</small>}
            </div>

            <div>
              <label htmlFor="education">{t('createAccount.education')}</label>
              <select
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
              >
                <option value="">{t('createAccount.selectEducation')}</option>
                {/* Puedes agregar tus opciones de educación aquí */}
                <option value="educacion1">
                  {t('createAccount.educacion1')}
                </option>
                <option value="educacion2">
                  {t('createAccount.educacion2')}
                </option>
                {/* ... */}
              </select>
              {errors.education && (
                <small className="error">{errors.education}</small>
              )}
            </div>

            <button
              className="create-account-btn"
              type="submit"
              onClick={handleCreateAccount}
            >
              {t('createAccount.createAccountButton')}
            </button>
          </form>
          <div className="separation-line">
            <hr />
            <h6>{t('createAccount.or')}</h6>
            <hr />
          </div>
          <button className="sign-in-btn" onClick={handleSignIn}>
            {t('createAccount.signInButton')}
          </button>
          <br />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CreateAccount;