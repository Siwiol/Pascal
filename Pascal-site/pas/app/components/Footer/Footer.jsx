import Styles from "./Footer.module.css";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className={Styles["footer"]}>
      <Link href="./" className={Styles["footer__logo"]}>
        <span className={Styles["footer__logo-name"]}>pascal</span>
      </Link>
      <ul className={Styles["social-list"]}>
        <li className={Styles["social-list__item"]}>
          <a
            href="https://vk.com/siwiol"
            className={Styles["social-list__link"]}
          >
            ВК
          </a>
        </li>
        <li className={Styles["social-list__item"]}>
          <a href="https://t.me/Siwiol" className={Styles["social-list__link"]}>
            TG
          </a>
        </li>
      </ul>
    </footer>
  );
};
