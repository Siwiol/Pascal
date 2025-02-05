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
          <span className={Styles["tasks-answer"]}>4</span>
        ) : (
          "Ответ:"
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
    </div>
  );
};
