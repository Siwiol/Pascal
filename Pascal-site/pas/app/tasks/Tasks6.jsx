"use client";
import { useState } from "react";
import Styles from "./Tasks.module.css";

export const Tasks6 = () => {
  const [visibleAnswers, setVisibleAnswers] = useState({
    task1: false,
    task2: false,
    task3: false,
    task4: false,
    task5: false,
    task6: false,
    task7: false,
    task8: false,
    task9: false,
    task10: false,
  });

  const handleButtonClick = (taskId) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  return (
    <div className={Styles["container"]}>
      <h1 className={Styles["title"]}>Задача №6</h1>
      <p className={Styles["description"]}>
        Ниже приведена программа, записанная на языке программирования Pascal:
      </p>
      <pre className={Styles["code"]}>
        <code>
          var s, t: integer;
          <br />
          begin
          <br />
          readln(s);
          <br />
          readln(t);
          <br />
          if (s &gt; 12) or (t &gt; 12)
          <br />
          then writeln('YES')
          <br />
          else writeln('NO')
          <br />
          end.
        </code>
      </pre>
      <p className={Styles["description"]}>
        Было проведено 9 запусков программы, при которых в качестве значений
        переменных <code>s</code> и <code>t</code> вводились следующие пары
        чисел: <br />
        (1, 13); (14, 2); (1, 12); (11, 12); (–14, –14); (–11, 13); (–4, 11);
        (2, 9); (8, 6). <br />
        Сколько было запусков, при которых программа напечатала «YES»?
      </p>
      <button
        className={`button ${Styles["tasks__button"]}`}
        onClick={() => handleButtonClick("task1")}
      >
        {visibleAnswers.task1 ? (
          <span className={Styles["tasks-answer"]}>3</span>
        ) : (
          "Ответ:"
        )}
      </button>
      <button
        className={`button ${Styles["tasks__button"]}`}
        onClick={() => handleButtonClick("task6")}
      >
        {visibleAnswers.task6 ? (
          <span className={Styles["tasks-decision"]}>
            Программа выводит «YES», если хотя бы одно из чисел `s` или `t`
            больше 12. Рассмотрим все пары чисел: <br />
            1. (1, 13) — t {">"} 12 → YES. <br />
            2. (14, 2) — s {">"} 12 → YES. <br />
            3. (1, 12) — оба числа {"<="} 12 → NO. <br />
            4. (11, 12) — оба числа {"<="} 12 → NO. <br />
            5. (–14, –14) — оба числа {"<="} 12 → NO. <br />
            6. (–11, 13) — t {">"} 12 → YES. <br />
            7. (–4, 11) — оба числа {"<="} 12 → NO. <br />
            8. (2, 9) — оба числа {"<="} 12 → NO. <br />
            9. (8, 6) — оба числа {"<="} 12 → NO. <br />
            Итого: Программа напечатала «YES» в 3 случаях.
          </span>
        ) : (
          "Решение:"
        )}
      </button>
      <p className={Styles["description"]}>
        Ниже приведена программа, записанная на языке программирования Pascal:
      </p>
      <pre className={Styles["code"]}>
        <code>
          var s, t: integer;
          <br />
          begin
          <br />
          readln(s);
          <br />
          readln(t);
          <br />
          if (s &gt; 4) or (t &gt; 2)
          <br />
          then writeln('YES')
          <br />
          else writeln('NO')
          <br />
          end.
        </code>
      </pre>
      <p className={Styles["description"]}>
        Было проведено 9 запусков программы, при которых в качестве значений
        переменных <code>s</code> и <code>t</code> вводились следующие пары
        чисел: <br />
        (3, –3); (7, 6); (–4, 1); (2, 9); (12, 7); (–11, 4); (–8, 13); (10, 9);
        (6, 5). <br />
        Сколько было запусков, при которых программа напечатала «YES»?
      </p>
      <button
        className={`button ${Styles["tasks__button"]}`}
        onClick={() => handleButtonClick("task2")}
      >
        {visibleAnswers.task2 ? (
          <span className={Styles["tasks-answer"]}>7</span>
        ) : (
          "Ответ:"
        )}
      </button>
      <button
        className={`button ${Styles["tasks__button"]}`}
        onClick={() => handleButtonClick("task7")}
      >
        {visibleAnswers.task7 ? (
          <span className={Styles["tasks-decision"]}>
            Программа выводит «YES», если хотя бы одно из чисел s или t
            удовлетворяет условию: <br />s {">"} 4 или <br />t {">"} 2. <br />
            Рассмотрим все пары чисел: <br />
            (3, –3) — оба числа не удовлетворяют условию → NO. <br />
            (7, 6) — оба числа удовлетворяют условию → YES. <br />
            (–4, 1) — оба числа не удовлетворяют условию → NO. <br />
            (2, 9) — t {">"} 2 → YES. <br />
            (12, 7) — оба числа удовлетворяют условию → YES. <br />
            (–11, 4) — t {">"} 2 → YES. <br />
            (–8, 13) — t {">"} 2 → YES. <br />
            (10, 9) — оба числа удовлетворяют условию → YES. <br />
            (6, 5) — оба числа удовлетворяют условию → YES. <br />
            Итого: Программа напечатала «YES» в 7 случаях.
          </span>
        ) : (
          "Решение:"
        )}
      </button>
      <p className={Styles["description"]}>
        Ниже приведена программа, записанная на языке программирования Pascal:
      </p>
      <pre className={Styles["code"]}>
        <code>
          var s, t: integer;
          <br />
          begin
          <br />
          readln(s);
          <br />
          readln(t);
          <br />
          if (s &lt; 5) or (t &gt; 5)
          <br />
          then writeln('YES')
          <br />
          else writeln('NO')
          <br />
          end.
        </code>
      </pre>
      <p className={Styles["description"]}>
        Было проведено 9 запусков программы, при которых в качестве значений
        переменных <code>s</code> и <code>t</code> вводились следующие пары
        чисел: <br />
        (2, 5); (5, 2); (4, 4); (2, –2); (3, 1); (8, 3); (9, –7); (7, 7); (4,
        6). <br />
        Сколько было запусков, при которых программа напечатала «YES»?
      </p>
      <button
        className={`button ${Styles["tasks__button"]}`}
        onClick={() => handleButtonClick("task3")}
      >
        {visibleAnswers.task3 ? (
          <span className={Styles["tasks-answer"]}>6</span>
        ) : (
          "Ответ:"
        )}
      </button>
      <button
        className={`button ${Styles["tasks__button"]}`}
        onClick={() => handleButtonClick("task8")}
      >
        {visibleAnswers.task8 ? (
          <span className={Styles["tasks-decision"]}>
            Программа выводит «YES», если хотя бы одно из чисел s или t
            удовлетворяет условию: <br />s {"<"} 5 или <br />t {">"} 5. <br />
            Рассмотрим все пары чисел: <br />
            (2, 5) — s {"<"} 5 → YES. <br />
            (5, 2) — оба числа не удовлетворяют условию → NO. <br />
            (4, 4) — s {"<"} 5 → YES. <br />
            (2, –2) — s {"<"} 5 → YES. <br />
            (3, 1) — s {"<"} 5 → YES. <br />
            (8, 3) — оба числа не удовлетворяют условию → NO. <br />
            (9, –7) — оба числа не удовлетворяют условию → NO. <br />
            (7, 7) — t {">"} 5 → YES. <br />
            (4, 6) — s {"<"} 5 → YES. <br />
            Итого: Программа напечатала «YES» в 6 случаях. <br />
          </span>
        ) : (
          "Решение:"
        )}
      </button>
      <p className={Styles["description"]}>
        Ниже приведена программа, записанная на языке программирования Pascal:
      </p>
      <pre className={Styles["code"]}>
        <code>
          var s, t: integer;
          <br />
          begin
          <br />
          readln(s);
          <br />
          readln(t);
          <br />
          if s div 2 = k
          <br />
          then writeln('ДА')
          <br />
          else writeln('НЕТ')
          <br />
          end.
        </code>
      </pre>
      <p className={Styles["description"]}>
        Было проведено 9 запусков программы, при которых в качестве значений
        переменных <code>s</code> и <code>k</code> вводились следующие пары
        чисел: <br />
        (1, 1); (8, 4); (14, 10); (20, 1); (7, 3); (10, 5); (10, 2); (4, 1);
        (1, 0). <br />
        Сколько было запусков, при которых программа напечатала «ДА»?
      </p>
      <button
        className={`button ${Styles["tasks__button"]}`}
        onClick={() => handleButtonClick("task4")}
      >
        {visibleAnswers.task4 ? (
          <span className={Styles["tasks-answer"]}>4</span>
        ) : (
          "Ответ:"
        )}
      </button>
      <button
        className={`button ${Styles["tasks__button"]}`}
        onClick={() => handleButtonClick("task9")}
      >
        {visibleAnswers.task9 ? (
          <span className={Styles["tasks-decision"]}>
            Программа выводит «ДА», если результат целочисленного деления s на 2
            равен k (т.е. s div 2 = k). <br />
            Рассмотрим все пары чисел: <br />
            (1, 1) — 1÷2=0 (не равно 1) → НЕТ. <br />
            (8, 4) — 8÷2=4 → ДА. <br />
            (14, 10) — 14÷2=7 (не равно 10) → НЕТ. <br />
            (20, 1) — 20÷2=10 (не равно 1) → НЕТ. <br />
            (7, 3) — 7÷2=3 → ДА. <br />
            (10, 5) — 10÷2=5 → ДА. <br />
            (10, 2) — 10÷2=5 (не равно 2) → НЕТ. <br />
            (4, 1) — 4÷2=2 (не равно 1) → НЕТ. <br />
            (1, 0) — 1÷2=0 → ДА. <br />
            Итого: Программа напечатала «ДА» в 4 случаях.
          </span>
        ) : (
          "Решение:"
        )}
      </button>
      <p className={Styles["description"]}>
        Ниже приведена программа, записанная на языке программирования Pascal:
      </p>
      <pre className={Styles["code"]}>
        <code>
          var s, t: integer;
          <br />
          begin
          <br />
          readln(s);
          <br />
          readln(t);
          <br />
          if (s &gt; -3) or (t &gt; 5)
          <br />
          then writeln('YES')
          <br />
          else writeln('NO')
          <br />
          end.
        </code>
      </pre>
      <p className={Styles["description"]}>
        Было проведено 9 запусков программы, при которых в качестве значений
        переменных <code>s</code> и <code>t</code> вводились следующие пары
        чисел: <br />
        (–3, 5); (–2, 2); (–1, –3); (1, 0); (–4, –7); (2, 3); (3, 5); (5, –3);
        (6, –7). <br />
        Сколько было запусков, при которых программа напечатала «NO»?
      </p>
      <button
        className={`button ${Styles["tasks__button"]}`}
        onClick={() => handleButtonClick("task5")}
      >
        {visibleAnswers.task5 ? (
          <span className={Styles["tasks-answer"]}>2</span>
        ) : (
          "Ответ:"
        )}
      </button>
      <button
        className={`button ${Styles["tasks__button"]}`}
        onClick={() => handleButtonClick("task10")}
      >
        {visibleAnswers.task10 ? (
          <span className={Styles["tasks-decision"]}>
            Программа выводит «NO», если ни одно из чисел s или t не
            удовлетворяет условию: <br />s {">"} -3 или <br />t {">"} 5. <br />
            Рассмотрим все пары чисел: <br />
            (–3, 5) — t {">"} 5 не выполняется, s {">"} -3 не выполняется → NO.
            <br />
            (–2, 2) — s {">"} -3 → YES. <br />
            (–1, –3) — s {">"} -3 → YES. <br />
            (1, 0) — s {">"} -3 → YES. <br />
            (–4, –7) — оба числа не удовлетворяют условию → NO. <br />
            (2, 3) — s {">"} -3 → YES. <br />
            (3, 5) — s {">"} -3 → YES. <br />
            (5, –3) — s {">"} -3 → YES. <br />
            (6, –7) — s {">"} -3 → YES. <br />
            Итого: Программа напечатала «NO» в 2 случаях.
          </span>
        ) : (
          "Решение:"
        )}
      </button>
    </div>
  );
};
