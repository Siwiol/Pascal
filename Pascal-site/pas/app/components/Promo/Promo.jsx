"use client";
import Styles from "./Promo.module.css";

export const Promo = () => {
  return (
    <section className={Styles["promo"]}>
      <div className={Styles["promo__description-block"]}>
        <h2 className={Styles["promo__title"]}>
          Справочный материал-наш спаситель
        </h2>
        <p className={Styles["promo__description"]}>
          Наш сайт поможет вам разобраться в задачах на языке программирования
          Pascal. Мы предлагаем:
          <br />- Подборку полезных примеров с комментариями
        </p>
        <a href="guide" className={`button ${Styles["promo__button"]}`}>
          {" "}
          Смотреть справочный материал
        </a>
      </div>
      <img
        src="./images/promo-illustration.jpg"
        alt="цветочек"
        className={Styles["promo__image"]}
      />
    </section>
  );
};
