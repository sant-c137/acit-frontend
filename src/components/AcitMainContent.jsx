import { Header } from "../components/Header";
import { useTranslation } from 'react-i18next';

export const AcitMainContent = () => {
  const { t } = useTranslation('global');

  return (
    <>
      <div className="image-container">
        <Header />
        <section>
          <div></div>
          <div className="title-info">
            <h1>
              <strong>{t('acit-main-content.new-title')}</strong>
              {t('acit-main-content.knowledge-title')}
              <strong>{t('acit-main-content.discover-title')}</strong>
              {t('acit-main-content.world-title')}
            </h1>
            <p>{t('acit-main-content.description')}</p>
            <div className="square-decoration-main"></div>
            <button>{t('acit-main-content.start-now')}</button>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="rectangle">
        <div className="logos-containers">
          <div>
            <img src="LogoBuilding.svg" alt="" />
            <h1>100+</h1>
            <p>{t('acit-main-content.facilities')}</p>
          </div>
          <div>
            <img src="LogoPerson.svg" alt="" />
            <h1>5000+</h1>
            <p>{t('acit-main-content.professionals')}</p>
          </div>
          <div>
            <img src="LogoMedal.svg" alt="" />
            <h1>10500+</h1>
            <p>{t('acit-main-content.accredited-courses')}</p>
          </div>
          <div>
            <img src="LogoPapers.svg" alt="" />
            <h1>500+</h1>
            <p>{t('acit-main-content.training-sessions')}</p>
          </div>
        </div>
      </div>
    </>
  );
};