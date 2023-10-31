import styles from "./TariffPage.module.css";

import bulb from '../../assets/images/bulb-tariff-beginner.svg'
import target from '../../assets/images/target-tariff-pro.svg'
import laptop from '../../assets/images/laptop-tariff-business.svg' 
import checkMark from '../../assets/images/tariff-includes-item.svg'

import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const TariffPage = () => {
    const authorized = useSelector((state) => state.isUserLogged.value);
    return (
        <>
            <section className={styles.tariff}>
                <div className={styles.title}>Выберите тариф, подходящий именно вам:</div>

                <div className={styles.tariffsTable}>
                    <div className={styles.tariffPlate + ' ' + styles.tariff1}>
                        <div className={styles.tariffInfo}>
                            <div className={styles.tariffName}>Beginner</div>
                            <div className={styles.tariffDescription}>Для небольшого исследования</div>
                        </div>
                        <img src={bulb} alt="tariff-image" className={styles.tariffImg} />
                    </div>
                    <div className={styles.tariffPlate + ' ' + styles.tariff2}>
                        <div className={styles.tariffInfo}>
                            <div className={styles.tariffName}>Pro</div>
                            <div className={styles.tariffDescription}>Для HR и фрилансеров</div>
                        </div>
                        <img src={target} alt="tariff-image" className={styles.tariffImg} />
                    </div>
                    <div className={styles.tariffPlate + ' ' + styles.tariff3}>
                        <div className={styles.tariffInfo}>
                            <div className={styles.tariffName}>Business</div>
                            <div className={styles.tariffDescription}>Для корпоративных клиентов</div>
                        </div>
                        <img src={laptop} alt="tariff-image" className={styles.tariffImg} />
                    </div>

                    <div>Безлимитная история запросов</div>
                    <div><img src={checkMark} /></div>
                    <div><img src={checkMark} /></div>
                    <div><img src={checkMark} /></div>

                    <div>Безопасная сделка</div>
                    <div><img src={checkMark} /></div>
                    <div><img src={checkMark} /></div>
                    <div><img src={checkMark} /></div>

                    <div>Поддержка 24/7</div>
                    <div><img src={checkMark} /></div>
                    <div><img src={checkMark} /></div>
                    <div><img src={checkMark} /></div>

                    <div>Экспорт истории</div>
                    <div></div>
                    <div><img src={checkMark} /></div>
                    <div><img src={checkMark} /></div>

                    <div>Рекомендации по приоритетам</div>
                    <div></div>
                    <div><img src={checkMark} /></div>
                    <div><img src={checkMark} /></div>

                    <div>Безлимитное количество запросов</div>
                    <div></div>
                    <div></div>
                    <div><img src={checkMark} /></div>

                    <div>Приоритетная поддержка</div>
                    <div></div>
                    <div></div>
                    <div><img src={checkMark} /></div>

                    <div className={styles.costs}>
                        <div className={styles.big}>Стоимость</div>
                        <div className={styles.small}>За один месяц</div>
                    </div>
                    <div className={styles.cost}>
                        <div className={styles.mainCost}>
                            799 ₽
                            <span className={styles.oldCost}>1 200 ₽</span>
                        </div>
                        <div className={styles.additionalCost}>
                            или <strong>150 ₽</strong>/мес. при покупке на 24 мес.
                        </div>
                    </div>
                    <div className={styles.cost}>
                        <div className={styles.mainCost}>
                            1 299 ₽
                            <span className={styles.oldCost}>2 600 ₽</span>
                        </div>
                        <div className={styles.additionalCost}>
                            или <strong>279 ₽</strong>/мес. при покупке на 24 мес.
                        </div>
                    </div>
                    <div className={styles.cost}>
                        <div className={styles.mainCost}>
                            2 379 ₽
                            <span className={styles.oldCost}>3 700 ₽</span>
                        </div>
                    </div>

                    {authorized ?
                    <>
                        <button className={styles.orderBtn + " " + styles.tariff1 + " " + styles.currentTariff}>Текущий тариф</button>
                        <Link to="/" className={styles.orderBtn + " " + styles.tariff2}>Перейти на этот тариф</Link>
                        <Link to="/" className={styles.orderBtn + " " + styles.tariff3}>Перейти на этот тариф</Link>
                    </>
                    :
                    <>
                        <Link to="/auth" className={styles.orderBtn + " " + styles.tariff1}>Выбрать тариф</Link>
                        <Link to="/auth" className={styles.orderBtn + " " + styles.tariff2}>Выбрать тариф</Link>
                        <Link to="/auth" className={styles.orderBtn + " " + styles.tariff3}>Выбрать тариф</Link>
                    </>
                    }
                </div>
            </section>
        </>
    )
}

export default TariffPage;