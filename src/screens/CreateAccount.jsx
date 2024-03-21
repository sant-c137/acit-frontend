import { useTranslation } from 'react-i18next';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useForm } from "react-hook-form";
import { useState } from 'react'; // Importar useState
import "./CreateAccount.css";

export const CreateAccount = () => {
  const { t } = useTranslation('global');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState(null); // Estado para almacenar los datos del formulario

  const onSubmit = data => {
    setFormData(data); // Actualizar el estado con los datos del formulario
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
              <p>{t('createAccount.fullNameEnglish')}</p>
              <input type="text" {...register("fullNameEn", { required: true })} />
              {errors.fullNameEn && <span>{t('common.fieldRequired')}</span>}
              <p>{t('createAccount.phone')}</p>
              <input type="text" {...register("phone")} />
              <p>{t('createAccount.gender')}</p>
              <input type="text" {...register("gender")} />
              <p>{t('createAccount.city')}</p>
              <input type="text" {...register("city", { required: true })} />
              {errors.city && <span>{t('common.fieldRequired')}</span>}
              <p>{t('createAccount.confirmPassword')}</p>
              <input type="password" {...register("confirmPassword")} />
            </div>
            <div className="formulary-right">
              <p>{t('createAccount.fullNameArabic')}</p>
              <input type="text" {...register("fullNameAr", { required: true })} />
              {errors.fullNameAr && <span>{t('common.fieldRequired')}</span>}
              <p>{t('createAccount.email')}</p>
              <input type="email" {...register("email", { required: true })} />
              {errors.email && <span>{t('common.fieldRequired')}</span>}
              <p>{t('createAccount.birthDate')}</p>
              <input type="date" {...register("birthDate")} />
              <p>{t('createAccount.education')}</p>
              <input type="text" {...register("education")} />
              <p>{t('createAccount.password')}</p>
              <input type="password" {...register("password", { required: true })} />
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