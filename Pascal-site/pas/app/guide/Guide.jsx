import Styles from "./Guide.module.css";
export const Guide = () => {
  return (
    <div className={Styles["container"]}>
      <h1 className={Styles["title"]}>Язык программирования PascalABC.NET</h1>
      <p className={Styles["description"]}>
        PascalABC.NET — это современная реализация языка программирования
        Pascal, разработанная для обучения и решения различных алгоритмических
        задач. Он поддерживает классический стиль программирования на Pascal и
        включает в себя возможности объектно-ориентированного программирования
        (ООП), а также интеграцию с платформой .NET.
      </p>

      <section className={Styles["section"]}>
        <h2 className={Styles["sectionTitle"]}>
          1. История и особенности PascalABC.NET
        </h2>
        <p className={Styles["description"]}>
          Pascal был разработан в 1970 году Никлаусом Виртом для обучения
          основам программирования. PascalABC.NET является его современной
          интерпретацией, расширенной поддержкой библиотек .NET, удобным
          интерфейсом и мощным встроенным редактором кода.
        </p>
        <h3 className={Styles["subtitle"]}>Основные особенности:</h3>
        <ul className={Styles["list"]}>
          <li>Совместимость с классическим Pascal.</li>
          <li>Поддержка модулей и стандартных библиотек.</li>
          <li>
            Интеграция с .NET (возможность работы с классами и объектами .NET).
          </li>
          <li>Удобная среда разработки с автодополнением и отладчиком.</li>
        </ul>
      </section>

      <section className={Styles["section"]}>
        <h2 className={Styles["sectionTitle"]}>
          2. Основные конструкции языка PascalABC.NET
        </h2>

        <h3 className={Styles["subtitle"]}>2.1. Переменные и типы данных</h3>
        <p className={Styles["description"]}>
          PascalABC.NET поддерживает основные типы данных:
        </p>
        <ul className={Styles["list"]}>
          <li>
            <code>integer</code> — целые числа.
          </li>
          <li>
            <code>real</code> — числа с плавающей точкой.
          </li>
          <li>
            <code>char</code> — одиночный символ.
          </li>
          <li>
            <code>string</code> — строка символов.
          </li>
          <li>
            <code>boolean</code> — логический тип (<code>true</code> или{" "}
            <code>false</code>).
          </li>
        </ul>
        <pre className={Styles["code"]}>
          <code>
            {`
var
  a: integer;
  b: real;
  c: boolean;
begin
  a := 10;
  b := 5.6;
  c := true;
end.
            `}
          </code>
        </pre>

        <h3 className={Styles["subtitle"]}>2.2. Операторы ввода и вывода</h3>
        <p className={Styles["description"]}>
          Для ввода используется <code>ReadLn</code>, для вывода —{" "}
          <code>WriteLn</code>:
        </p>
        <pre className={Styles["code"]}>
          <code>
            {`
var x: integer;
begin
  Write('Введите число: ');
  ReadLn(x);
  WriteLn('Вы ввели: ', x);
end.
            `}
          </code>
        </pre>

        <h3 className={Styles["subtitle"]}>2.3. Условные операторы</h3>
        <pre className={Styles["code"]}>
          <code>
            {`
if x > 0 then
  WriteLn('Число положительное')
else
  WriteLn('Число отрицательное');
            `}
          </code>
        </pre>

        <h3 className={Styles["subtitle"]}>2.4. Циклы</h3>
        <p className={Styles["description"]}>
          <strong>For</strong> (цикл с параметром):
        </p>
        <pre className={Styles["code"]}>
          <code>
            {`
for i := 1 to 10 do
  WriteLn(i);
            `}
          </code>
        </pre>
        <p className={Styles["description"]}>
          <strong>While</strong> (цикл с условием):
        </p>
        <pre className={Styles["code"]}>
          <code>
            {`
while x > 0 do
begin
  WriteLn(x);
  x := x - 1;
end;
            `}
          </code>
        </pre>
        <p className={Styles["description"]}>
          <strong>Repeat Until</strong> (цикл с постусловием):
        </p>
        <pre className={Styles["code"]}>
          <code>
            {`
repeat
  WriteLn(x);
  x := x - 1;
until x = 0;
            `}
          </code>
        </pre>
        <h3 className={Styles["subtitle"]}>2.5. Процедуры и функции</h3>
        <p className={Styles["description"]}>
          PascalABC.NET позволяет создавать собственные процедуры и функции.
        </p>
        <p className={Styles["description"]}>Пример процедуры:</p>
        <pre className={Styles["code"]}>
          <code>
            {`
procedure Hello;
begin
  WriteLn('Привет, мир!');
end;
            `}
          </code>
        </pre>
        <p className={Styles["description"]}>Пример функции:</p>
        <pre className={Styles["code"]}>
          <code>
            {`
function Square(x: integer): integer;
begin
  Result := x * x;
end;
            `}
          </code>
        </pre>
      </section>
      <section className={Styles["section"]}>
        <h2 className={Styles["sectionTitle"]}>3. Сложные условия</h2>
        <p className={Styles["description"]}>
          В языке программирования Pascal сложные условия создаются с помощью
          логических операторов, которые позволяют комбинировать несколько
          условий в одно. Это полезно, когда нужно проверить несколько условий
          одновременно или выполнить определённые действия в зависимости от их
          комбинации. Основные логические операторы в Pascal:
        </p>
        <h3 className={Styles["subtitle"]}>3.1. Логические операторы</h3>
        <ul className={Styles["list"]}>
          <li>
            <code>and</code> (И): Возвращает <code>True</code>, если оба условия
            истинны.
          </li>
          <li>
            <code>or</code> (ИЛИ): Возвращает <code>True</code>, если хотя бы
            одно из условий истинно.
          </li>
          <li>
            <code>not</code> (НЕ): Инвертирует значение условия.
          </li>
        </ul>
        <h3 className={Styles["subtitle"]}>3.2. Примеры сложных условий</h3>
        <p className={Styles["description"]}>
          Пример проверки диапазона числа:
        </p>
        <pre className={Styles["code"]}>
          <code>
            {`
if (x >= 10) and (x <= 20) then
  WriteLn('x находится в диапазоне от 10 до 20');
            `}
          </code>
        </pre>
        <p className={Styles["description"]}>
          Пример использования <code>or</code>:
        </p>
        <pre className={Styles["code"]}>
          <code>
            {`
if (a > 0) or (b < 0) then
  WriteLn('Хотя бы одно условие истинно');
            `}
          </code>
        </pre>
        <p className={Styles["description"]}>
          Пример использования <code>not</code>:
        </p>
        <pre className={Styles["code"]}>
          <code>
            {`
if not (x = 0) then
  WriteLn('x не равно 0');
            `}
          </code>
        </pre>

        <h3 className={Styles["subtitle"]}>3.3. Приоритет операторов</h3>
        <p className={Styles["description"]}>
          В Pascal логические операторы имеют определённый порядок выполнения
          (приоритет):
        </p>
        <ul className={Styles["list"]}>
          <li>
            <code>not</code> (наивысший приоритет).
          </li>
          <li>
            <code>and</code>.
          </li>
          <li>
            <code>or</code> (наименьший приоритет).
          </li>
        </ul>
        <p className={Styles["description"]}>
          Если нужно изменить порядок выполнения, используйте скобки:
        </p>
        <pre className={Styles["code"]}>
          <code>
            {`
if (a > 0) and ((b < 0) or (c = 10)) then
  WriteLn('Сложное условие');
            `}
          </code>
        </pre>

        <h3 className={Styles["subtitle"]}>3.4. Вложенные условия</h3>
        <p className={Styles["description"]}>
          Иногда условия могут быть вложенными, чтобы проверить более сложные
          сценарии:
        </p>
        <pre className={Styles["code"]}>
          <code>
            {`
if a > 0 then
begin
  if b < 0 then
    WriteLn('a > 0 и b < 0')
  else
    WriteLn('a > 0, но b >= 0');
end
else
  WriteLn('a <= 0');
            `}
          </code>
        </pre>

        <h3 className={Styles["subtitle"]}>
          3.5. Пример программы с сложными условиями
        </h3>
        <p className={Styles["description"]}>
          Пример программы, которая проверяет знаки двух чисел:
        </p>
        <pre className={Styles["code"]}>
          <code>
            {`
var
  a, b: integer;
begin
  WriteLn('Введите два числа:');
  ReadLn(a, b);

  if (a > 0) and (b > 0) then
    WriteLn('Оба числа положительные')
  else if (a < 0) and (b < 0) then
    WriteLn('Оба числа отрицательные')
  else if (a = 0) or (b = 0) then
    WriteLn('Хотя бы одно число равно нулю')
  else
    WriteLn('Числа имеют разные знаки');
end.
            `}
          </code>
        </pre>
      </section>

      <section className={Styles["section"]}>
        <h2 className={Styles["sectionTitle"]}>4. Работа с массивами</h2>
        <p className={Styles["description"]}>Объявление массива:</p>
        <pre className={Styles["code"]}>
          <code>
            {`
var arr: array[1..5] of integer;
            `}
          </code>
        </pre>
        <p className={Styles["description"]}>Заполнение массива и его вывод:</p>
        <pre className={Styles["code"]}>
          <code>
            {`
for i := 1 to 5 do
begin
  arr[i] := i * 2;
  WriteLn(arr[i]);
end;
            `}
          </code>
        </pre>
      </section>

      <section className={Styles["section"]}>
        <h2 className={Styles["sectionTitle"]}>5. Заключение</h2>
        <p className={Styles["description"]}>
          PascalABC.NET является мощным инструментом для изучения
          программирования и подготовки к ОГЭ по информатике. Он сочетает в себе
          простоту классического Pascal и современные возможности .NET, что
          делает его отличным выбором для начинающих и опытных программистов.
        </p>
      </section>
      <section className={Styles["section"]}>
        <h2 className={Styles["sectionTitle"]}> Видео разбор задания №6</h2>
      </section>

      <h1 className={Styles["title"]}>Критерии оценивания 16 задачи</h1>
      <p className={Styles["description"]}>
        Заголовок таблицы: Критерии оценивания выполнения задания.
      </p>
      <table className={Styles["table"]}>
        <thead>
          <tr>
            <th className={Styles["tableHeader"]}>Критерий</th>
            <th className={Styles["tableHeader"]}>Баллы</th>
          </tr>
        </thead>
        <tbody>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>
              Предложено верное решение. Программа правильно работает на всех
              приведённых выше тестах. Программа может быть записана на любом
              языке программирования.
            </td>
            <td className={Styles["tableCell"]}>2 балла</td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>
              Программа выдаёт неверный ответ на одном из тестов, приведённых
              выше.
            </td>
            <td className={Styles["tableCell"]}>1 балл</td>
          </tr>
          <tr className={Styles["tableRow"]}>
            <td className={Styles["tableCell"]}>
              Программа выдаёт на тестах неверные ответы, отличные от описанных
              в критерии.
            </td>
            <td className={Styles["tableCell"]}>0 баллов</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
