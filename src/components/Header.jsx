import { Link } from 'react-router-dom';
import './Header.css';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

export const Header = () => {
  const { t } = useTranslation('global');
  const { handleChangeLanguage } = useContext(LanguageContext);

  return (
    <header>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="check-button">
        <img src="LogoMenu.svg" alt="" />
      </label>
      <div className="login-singin">
        <div className="language-container">
          <img src="ARLogo.svg" alt="" />
          <select
            name=""
            id=""
            className="language-selector"
            onChange={(e) => handleChangeLanguage(e.target.value)}
          >
            <option value="en">(EN)</option>
            <option value="ar">(AR)</option>
          </select>
        </div>
        <Link to="/sign-in">
          <button className="login-button">{t('header.sign-in')}</button>
        </Link>
        <Link to="/create-account">
          <button className="create-account-button">
            {t('header.create-account')}
          </button>
        </Link>
      </div>
      <nav className="header-sections">
        <ul>
          <li className="Hola">
            <Link to="/acit-frontend/">{t('header.home')}</Link>
          </li>
          <li>
            <Link to="/courses">{t('header.courses')}</Link>
          </li>
          <li>
            <Link to="/articles">{t('header.articles')}</Link>
          </li>
          <li>
            <Link to="/accreditations-and-partners">
              {t('header.accreditations-partners')}
            </Link>
          </li>
          <li>
            <Link to="/call-us">{t('header.call-us')}</Link>
          </li>
        </ul>
      </nav>
      <div className="logo-header">
        <img src="LogoName.svg" alt="" />
        <img src="LogoWhite.svg" alt="" />
      </div>
      <div>
        <br />
      </div>
    </header>
  );
};