import './Footer.css';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation('global');

  return (
    <>
      <footer>
        <br />
        <br />
        <br />

        <div className="footer-info">
          <div className="logo-header-footer">
            <img src="LogoName.svg" alt="" />
            <img src="LogoWhite.svg" alt="" />
          </div>

          <div className="footer-subscribe">
            <h2>{t('footer.stay-updated')}</h2>
            <p>{t('footer.subscribe-newsletter')}</p>
            <div className="info-email">
              <input type="text" placeholder={t('footer.email-placeholder')} />
              <button>{t('footer.subscribe')}</button>
            </div>
            <br />

            <div className="footer-tel">
              <p>{t('footer.phone-number')}</p>
              <img src="LogoTel.svg" alt="" />
            </div>
            <div className="footer-email">
              <p>{t('footer.email')}</p>
              <img src="LogoEmail.svg" alt="" />
            </div>
          </div>

          <div className="certificate-courses">
            <h2>{t('footer.certificates-and-courses')}</h2>

            <ul>
              <li>{t('footer.cisco')}</li>
              <li>{t('footer.microsoft')}</li>
              <li>{t('footer.oracle')}</li>
              <li>{t('footer.juniper')}</li>
              <li>{t('footer.ec-council')}</li>
              <li>{t('footer.view-all', { symbol: '>>' })}</li>
            </ul>
          </div>

          <div className="quick-links">
            <h2>{t('footer.quick-links')}</h2>

            <ul>
              <li>{t('footer.home')}</li>
              <li>{t('footer.about-institute')}</li>
              <li>{t('footer.intro-videos')}</li>
              <li>{t('footer.contact-us')}</li>
              <li>{t('footer.blog')}</li>
              <li>{t('footer.site-map')}</li>
            </ul>
          </div>

          <div className="social-networks">
            <div className="logo-header-footer-1">
              <img src="LogoName.svg" alt="" />
              <img src="LogoWhite.svg" alt="" />
            </div>
            <br />
            <br />
            <br />
            <img src="SocialNetworks.svg" alt="" />
          </div>
          <div className="payments">
            <img src="LogoApplePay.svg" alt="" />
            <img src="LogoPay.svg" alt="" />
            <img src="LogoMada.svg" alt="" />
            <img src="LogoTabby.svg" alt="" />
            <img src="LogoMasterCard.svg" alt="" />
            <img src="LogoVisa.svg" alt="" />
          </div>
        </div>

        <hr />

        <div className="final-info-footer">
          <p>{t('footer.arabic')}</p>
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </>
  );
};
