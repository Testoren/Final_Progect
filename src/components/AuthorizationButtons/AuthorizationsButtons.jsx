import { Link, useNavigate } from "react-router-dom";
import styles from "./AuthorizationsButtons.module.css";

const AuthorizationsButtons = (props) => {
  const navigate = useNavigate();
  const {isMenuOpen, setIsMenuOpen} = props;

  const handleMenuClose = () => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <>
      <Link to="/join" className={styles.registerBtn} onClick={handleMenuClose}>
        Зарегистрироваться
      </Link>
      <hr className={styles.line} />
      <button
        onClick={() => {
          navigate("/auth");
          handleMenuClose();
        }}
        className={styles.signInBtn}
      >
        Войти
      </button>
    </>
  );
};

export default AuthorizationsButtons;
