import { useTranslation } from 'react-i18next';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateAccount.css';

const CreateAccount = () => {
  const { t } = useTranslation('global');

  const [isLoading, setIsLoading] = useState(false);
  const btnRef = useRef(null);
  const spinnerRef = useRef(null);

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
      <div className="CreateAccount-header">
        <Header />
      </div>
      <section className="CreateAccount">
        <img
          src="/DecorationLines.svg"
          alt=""
          className="CreateAccount-decorationLines"
        />
        <img
          src="/DecorationLinesR.svg"
          alt=""
          className="CreateAccount-decorationLinesR"
        />
        <div className="CreateAccount-container">
          <h1 className="CreateAccount-title">{t('createAccount.title')}</h1>
          <br />
          <br />
          <form onSubmit={handleSubmit} className="CreateAccount-form">
            <div className="CreateAccount-formGroup">
              <label htmlFor="fullNameEn" className="CreateAccount-label">
                {t('createAccount.fullNameEnglish')}
              </label>
              <input
                type="text"
                id="fullNameEn"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="CreateAccount-input"
              />
              {errors.username && (
                <small className="CreateAccount-error">{errors.username}</small>
              )}
            </div>

            <div className="CreateAccount-formGroup">
              <label htmlFor="fullNameAr" className="CreateAccount-label">
                {t('createAccount.fullNameArabic')}
              </label>
              <input
                type="text"
                id="fullNameAr"
                name="fullNameAr"
                value={formData.fullNameAr}
                onChange={handleChange}
                className="CreateAccount-input"
              />
              {errors.fullNameAr && (
                <small className="CreateAccount-error">
                  {errors.fullNameAr}
                </small>
              )}
            </div>

            <div className="CreateAccount-formGroup">
              <label htmlFor="email" className="CreateAccount-label">
                {t('createAccount.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="CreateAccount-input"
              />
              {errors.email && (
                <small className="CreateAccount-error">{errors.email}</small>
              )}
            </div>

            <div className="CreateAccount-formGroup">
              <label htmlFor="phone" className="CreateAccount-label">
                {t('createAccount.phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="CreateAccount-input"
              />
              {errors.phone && (
                <small className="CreateAccount-error">{errors.phone}</small>
              )}
            </div>

            <div className="CreateAccount-formGroup">
              <label htmlFor="password" className="CreateAccount-label">
                {t('createAccount.password')}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="CreateAccount-input"
              />
              {errors.password && (
                <small className="CreateAccount-error">{errors.password}</small>
              )}
            </div>

            <div className="CreateAccount-formGroup">
              <label htmlFor="confirmPassword" className="CreateAccount-label">
                {t('createAccount.confirmPassword')}
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="CreateAccount-input"
              />
              {errors.confirmPassword && (
                <small className="CreateAccount-error">
                  {errors.confirmPassword}
                </small>
              )}
            </div>

            <div className="CreateAccount-formGroup">
              <label htmlFor="birthDate" className="CreateAccount-label">
                {t('createAccount.birthDate')}
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="CreateAccount-input"
              />
              {errors.birthDate && (
                <small className="CreateAccount-error">
                  {errors.birthDate}
                </small>
              )}
            </div>

            <div className="CreateAccount-formGroup">
              <label htmlFor="gender" className="CreateAccount-label">
                {t('createAccount.gender')}
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="CreateAccount-select"
              >
                <option value="">{t('createAccount.selectGender')}</option>
                <option value="male">{t('createAccount.male')}</option>
                <option value="female">{t('createAccount.female')}</option>
                <option value="other">{t('createAccount.other')}</option>
              </select>
              {errors.gender && (
                <small className="CreateAccount-error">{errors.gender}</small>
              )}
            </div>

            <div className="CreateAccount-formGroup">
              <label htmlFor="city" className="CreateAccount-label">
                {t('createAccount.city')}
              </label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="CreateAccount-select"
              >
                <option value="">{t('createAccount.selectCity')}</option>
                <option value="ciudad1">{t('createAccount.ciudad1')}</option>
                <option value="ciudad2">{t('createAccount.ciudad2')}</option>
              </select>
              {errors.city && (
                <small className="CreateAccount-error">{errors.city}</small>
              )}
            </div>

            <div className="CreateAccount-formGroup">
              <label htmlFor="education" className="CreateAccount-label">
                {t('createAccount.education')}
              </label>
              <select
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="CreateAccount-select"
              >
                <option value="">{t('createAccount.selectEducation')}</option>
                <option value="educacion1">
                  {t('createAccount.educacion1')}
                </option>
                <option value="educacion2">
                  {t('createAccount.educacion2')}
                </option>
              </select>
              {errors.education && (
                <small className="CreateAccount-error">
                  {errors.education}
                </small>
              )}
            </div>

            <button
              className={`CreateAccount-button--createAccount ${
                isLoading ? 'Loading' : ''
              }`}
              type="submit"
              onClick={handleCreateAccount}
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
                t('createAccount.createAccountButton')
              )}
            </button>
          </form>
          <div className="CreateAccount-separationLine">
            <hr className="CreateAccount-separationLine-hr" />
            <h6 className="CreateAccount-separationLine-text">
              {t('createAccount.or')}
            </h6>
            <hr className="CreateAccount-separationLine-hr" />
          </div>

          <Link to="/sign-in">
            <button
              className="CreateAccount-button CreateAccount-button--signIn"
              onClick={handleSignIn}
            >
              {t('createAccount.signInButton')}
            </button>
          </Link>
          <br />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CreateAccount;
