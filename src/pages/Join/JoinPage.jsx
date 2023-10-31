import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./JoinPage.module.css";
import { Link } from "react-router-dom";

import lock from "../../assets/images/lock.svg";
import PhoneInput from "react-phone-number-input/input";
import 'react-phone-number-input/style.css'

const JoinPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState()

  return (
    <>
      <section className={styles.login}>
        <h1 className="title titlePages">
          Зарегистрируйтесь для получения доступа к функционалу "СКАН".
        </h1>
        <form className={styles.loginForm}>
          <img src={lock} className={styles.lock} alt="lock" />
          <div className={styles.formTabs}>
            <Link to="/auth" className={styles.tabSignIn}>Войти</Link>
            <Link to="/join" className={styles.tabReg}>Зарегистрироваться</Link>
          </div>
          <label className={styles.formLabel}>Логин:</label>
          <input
            type="text"
            className={styles.formInput}
          />
          <label className={styles.formLabel}>Номер телефона:</label>
          <PhoneInput
            className={styles.formInput}
            onChange={setValue}
            value={value}
            maxLength="16"
          />
          <label className={styles.formLabel}>Пароль:</label>
          <input
            type="password"
            className={styles.formInput}
          />
          <button disabled="disabled" type="submit" className="universalBtn joinBtn">
            Зарегистрироваться
            <div className={styles.small}>(временно недоступно)</div>
          </button>
          <p className={styles.socialText}>Регистрация через:</p>
          <div className={styles.socialLinks}>
            <button className={styles.socialBtn + " " + styles.googleBtn} />
            <button className={styles.socialBtn + " " + styles.facebookBtn} />
            <button className={styles.socialBtn + " " + styles.yandexBtn} />
          </div>
        </form>
      </section>
    </>
  );
};

export default JoinPage;
