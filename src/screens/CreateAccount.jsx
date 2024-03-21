import { useTranslation } from 'react-i18next';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import "./CreateAccount.css";

export const CreateAccount = () => {
  const { t } = useTranslation('global');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState(null);

  const onSubmit = data => {
    setFormData(data);
    console.log(data);
  };

  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <section className="section-create-account">
        <img src="/DecorationLines.svg" alt="" className="decoration-lines" />
        <img src="/DecorationLinesR.svg" alt="" className="decoration-lines-r" />
        <div className="create-account-container">
          <h1>{t('createAccount.title')}</h1>
          <br />
          <br />
          <form onSubmit={handleSubmit(onSubmit)} className="formulary">
            <div className="formulary-left">
              <label htmlFor="fullNameEn">{t('createAccount.fullNameEnglish')}</label>
              <input type="text" id="fullNameEn" {...register("fullNameEn", { required: true })} />
              {errors.fullNameEn && <span>{t('common.fieldRequired')}</span>}

              <label htmlFor="phone">{t('createAccount.phone')}</label>
              <input type="tel" id="phone" {...register("phone")} />

              <label htmlFor="gender">{t('createAccount.gender')}</label>
              <input type="text" id="gender" {...register("gender")} />

              <label htmlFor="city">{t('createAccount.city')}</label>
              <input type="text" id="city" {...register("city", { required: true })} />
              {errors.city && <span>{t('common.fieldRequired')}</span>}

              <label htmlFor="confirmPassword">{t('createAccount.confirmPassword')}</label>
              <input type="password" id="confirmPassword" {...register("confirmPassword")} />
            </div>
            <div className="formulary-right">
              <label htmlFor="fullNameAr">{t('createAccount.fullNameArabic')}</label>
              <input type="text" id="fullNameAr" {...register("fullNameAr", { required: true })} />
              {errors.fullNameAr && <span>{t('common.fieldRequired')}</span>}

              <label htmlFor="email">{t('createAccount.email')}</label>
              <input type="email" id="email" {...register("email", { required: true })} />
              {errors.email && <span>{t('common.fieldRequired')}</span>}

              <label htmlFor="birthDate">{t('createAccount.birthDate')}</label>
              <input type="date" id="birthDate" {...register("birthDate")} />

              <label htmlFor="education">{t('createAccount.education')}</label>
              <input type="text" id="education" {...register("education")} />

              <label htmlFor="password">{t('createAccount.password')}</label>
              <input type="password" id="password" {...register("password", { required: true })} />
              {errors.password && <span>{t('common.fieldRequired')}</span>}
            </div>
          </form>
          <br />
          <br />
          <button className="create-account-btn" type="submit" onClick={handleSubmit(onSubmit)}>
            {t('createAccount.createAccountButton')}
          </button>
          <div className="separation-line">
            <hr />
            <h6>{t('createAccount.or')}</h6>
            <hr />
          </div>
          <button className="sign-in-btn">{t('createAccount.signInButton')}</button>
          <br />
        </div>
      </section>
      <Footer />
      {/* Mostrar datos del formulario en formato JSON */}
      {formData && (
        <div>
          <h2>Datos del formulario</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </>
  );
};