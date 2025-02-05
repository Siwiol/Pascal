import Styles from "./Banner.module.css";
export const Banner = () => {
  return (
    <section className={Styles["banner"]}>
      <div className={Styles["banner__description"]}>
        <h1 className={Styles["banner__title"]}>
          Сборник задач от такого же ученика как и вы!
        </h1>
        <div className={Styles["banner__text-block"]}>
          <p className={Styles["banner__text"]}>
            Хотите подготовиться к сдаче ОГЭ по информатике? Начните с решения
            задач на языке Pascal! Наш сайт предлагает: - Простые и понятные
            задания для начинающих программистов
            <br />- Поможем подготовиться к ОГЭ
          </p>
        </div>
        <a href="tasks" className={`button ${Styles["banner__link"]}`}>
          Решать задачи
        </a>
      </div>
      <img
        src="images/banner-illustration.jpg"
        alt="Р"
        className={Styles["banner__image"]}
      />
    </section>
  );
};
