"use client";
import Styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const Header = () => {
  const pathname = usePathname();
  return (
    <header className={Styles["header"]}>
      <Link href="/" className={Styles["logo"]}>
        <img
          className={Styles["logo__image"]}
          src="images/logo.png"
          alt="Логотип Pascal"
        />
      </Link>
      <nav className={Styles["menu"]}>
        <ul className={Styles["menu__list"]}>
          <li className={Styles["menu__item"]}>
            <Link
              href="/guide"
              className={`${Styles["menu__link"]} ${
                pathname === "/guide" ? Styles["menu__link_active"] : ""
              }`}
            >
              Справочный материал
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/tasks"
              className={`${Styles["menu__link"]} ${
                pathname === "/tasks" ? Styles["menu__link_active"] : ""
              }`}
            >
              Задачи для подготовки
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
