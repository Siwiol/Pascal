"use client";
import { useState } from "react";
import Styles from "./Tasks.module.css";
export const Tasks16 = () => {
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
      <h1 className={Styles["title"]}>Задача №16</h1>
      <p className={Styles["description"]}>
        Напишите программу, которая в последовательности натуральных чисел
        определяет максимальное число, кратное 5. Программа получает на вход
        количество чисел в последовательности, а затем сами числа. В
        последовательности всегда имеется число, кратное 5. Количество чисел не
        превышает 1000. Введенные числа не превышают 30 000. Программа должна
        вывести одно число  — максимальное число, кратное 5. <br />
        Пример работы программы:
      </p>
      <table className={Styles["table"]}>
        <thead>
          <tr>
            <th className={Styles["tableHeader"]}>Входные данные</th>
            <th className={Styles["tableHeader"]}>Выходные данные</th>
          </tr>
        </thead>
        <tbody>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>3</td>
            <td className={Styles["tableCell"]}>25</td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>10</td>
            <td className={Styles["tableCell"]}></td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>25</td>
            <td className={Styles["tableCell"]}></td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>12</td>
            <td className={Styles["tableCell"]}></td>
          </tr>
        </tbody>
      </table>
      <button
        className={`button ${Styles["tasks__button"]}`}
        onClick={() => handleButtonClick("task1")}
      >
        {visibleAnswers.task1 ? (
          <span className={Styles["tasks-answer"]}>
            <code>
              var k, n, a, amax: integer; <br />
              begin <br />
              amax:=0; <br />
              readln(n); <br />
              for k:=1 to n do <br />
              begin <br />
              readln(a); <br />
              if (a mod 5 = 0) and (a &gt;amax) then <br />
              amax:=a; <br />
              end; <br />
              writeln(amax); <br />
              end.
            </code>
          </span>
        ) : (
          "Ответ:"
        )}
      </button>
      <p className={Styles["description"]}>
        Напишите программу, которая в последовательности натуральных чисел
        определяет сумму чисел, кратных 6. Программа получает на вход количество
        чисел в последовательности, а затем сами числа. В последовательности
        всегда имеется число, кратное 6. Количество чисел не превышает 100.
        Введенные числа не превышают 300. Программа должна вывести одно
        число  — сумму чисел, кратных 6. <br />
        Пример работы программы:
      </p>
      <table className={Styles["table"]}>
        <thead>
          <tr>
            <th className={Styles["tableHeader"]}>Входные данные</th>
            <th className={Styles["tableHeader"]}>Выходные данные</th>
          </tr>
        </thead>
        <tbody>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>3</td>
            <td className={Styles["tableCell"]}>18</td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>12</td>
            <td className={Styles["tableCell"]}></td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>25</td>
            <td className={Styles["tableCell"]}></td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>6</td>
            <td className={Styles["tableCell"]}></td>
          </tr>
        </tbody>
      </table>
      <button
        className={`button ${Styles["tasks__button"]}`}
        onClick={() => handleButtonClick("task2")}
      >
        {visibleAnswers.task2 ? (
          <span className={Styles["tasks-answer"]}>
            <code>
              var n, s, k, g: integer; <br />
              begin <br />
              s:=0; <br />
              readln(n); <br />
              for k:=1 to n do <br />
              begin <br />
              readln(g); <br />
              if (g mod 4 = 0) then <br />
              s:=s+1; <br />
              end; <br />
              writeln(s); <br />
              end.
            </code>
          </span>
        ) : (
          "Ответ:"
        )}
      </button>
      <p className={Styles["description"]}>
        Напишите программу, которая в последовательности натуральных чисел
        определяет минимальное число, кратное 3. Программа получает на вход
        количество чисел в последовательности, а затем сами числа. В
        последовательности всегда имеется число, кратное 3. Количество чисел не
        превышает 1000. Введенные числа не превышают 30 000. Программа должна
        вывести одно число  — минимальное число, кратное 3.
      </p>
      <table className={Styles["table"]}>
        <thead>
          <tr>
            <th className={Styles["tableHeader"]}>Входные данные</th>
            <th className={Styles["tableHeader"]}>Выходные данные</th>
          </tr>
        </thead>
        <tbody>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>3</td>
            <td className={Styles["tableCell"]}>12</td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>21</td>
            <td className={Styles["tableCell"]}></td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>12</td>
            <td className={Styles["tableCell"]}></td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>31</td>
            <td className={Styles["tableCell"]}></td>
          </tr>
        </tbody>
      </table>
      <button
        className={`button ${Styles["tasks__button"]}`}
        onClick={() => handleButtonClick("task3")}
      >
        {visibleAnswers.task3 ? (
          <span className={Styles["tasks-answer"]}>
            <code>
              var n, k, g, h: integer; <br />
              begin <br />
              h:= 30000; <br />
              readln(n); <br />
              for k:=1 to n do <br />
              begin <br />
              readln(g); <br />
              if (g mod 3 = 0) and (g &lt; h) then <br />
              h:=g; <br />
              end; <br />
              writeln(h); <br />
              end.
            </code>
          </span>
        ) : (
          "Ответ:"
        )}
      </button>
      <p className={Styles["description"]}>
        Напишите программу, которая в последовательности натуральных чисел
        определяет сумму чисел, кратных 3. Программа получает на вход количество
        чисел в последовательности, а затем сами числа. В последовательности
        всегда имеется число, кратное 3. Количество чисел не превышает 100.
        Введенные числа не превышают 300. Программа должна вывести одно
        число  — сумму чисел, кратных 3.
      </p>
      <table className={Styles["table"]}>
        <thead>
          <tr>
            <th className={Styles["tableHeader"]}>Входные данные</th>
            <th className={Styles["tableHeader"]}>Выходные данные</th>
          </tr>
        </thead>
        <tbody>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>3</td>
            <td className={Styles["tableCell"]}>21</td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>12</td>
            <td className={Styles["tableCell"]}></td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>25</td>
            <td className={Styles["tableCell"]}></td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>9</td>
            <td className={Styles["tableCell"]}></td>
          </tr>
        </tbody>
      </table>
      <button
        className={`button ${Styles["tasks__button"]}`}
        onClick={() => handleButtonClick("task4")}
      >
        {visibleAnswers.task4 ? (
          <span className={Styles["tasks-answer"]}>
            <code>
              var n, k, g, h: integer; <br />
              begin <br />
              h:= 0; <br />
              readln(n); <br />
              for k:=1 to n do <br />
              begin <br />
              readln(g); <br />
              if (g mod 3 = 0) and then <br />
              h:=h+g; <br />
              end; <br />
              writeln(h); <br />
              end.
            </code>
          </span>
        ) : (
          "Ответ:"
        )}
      </button>
      <p className={Styles["description"]}>
      Напишите программу, которая в последовательности натуральных чисел определяет количество чисел, кратных 6. Программа получает на вход количество чисел в последовательности, а затем сами числа. В последовательности всегда имеется число, кратное 6.
      </p>
      <table className={Styles["table"]}>
        <thead>
          <tr>
            <th className={Styles["tableHeader"]}>Входные данные</th>
            <th className={Styles["tableHeader"]}>Выходные данные</th>
          </tr>
        </thead>
        <tbody>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>3</td>
            <td className={Styles["tableCell"]}>2</td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>18</td>
            <td className={Styles["tableCell"]}></td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>26</td>
            <td className={Styles["tableCell"]}></td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>24</td>
            <td className={Styles["tableCell"]}></td>
          </tr>
        </tbody>
      </table>
      <button
        className={`button ${Styles["tasks__button"]}`}
        onClick={() => handleButtonClick("task5")}
      >
        {visibleAnswers.task5 ? (
          <span className={Styles["tasks-answer"]}>
            <code>
              var n, k, g, h: integer; <br />
              begin <br />
              s:= 0; <br />
              readln(n); <br />
              for k:=1 to n do <br />
              begin <br />
              readln(g); <br />
              if (g mod 6 = 0) and then <br />
              s:=s+1; <br />
              end; <br />
              writeln(s); <br />
              end.
            </code>
          </span>
        ) : (
          "Ответ:"
        )}
      </button>
    </div>
  );
};
