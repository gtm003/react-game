# [Einstein's puzzle](https://gtm003.github.io/react-game/)

## Немного об игре и истории создания:

Это индивидульный проект - первое задание с учебного курса по библиотеке React от RS School. С техническим заданием можно ознакомиться [здесь](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-game.md).

Головоломка Энштейна - это сложная и интересная логическая игра. Прототипом игры послужила [десктопная одноименная игра Einstein](https://igrozoom.ru/logicheskie/100835-2008-9-29-835.html). Как написано в описании к оргинальной игре:
> Einstein - это логическая головоломка написанная по мотивам старой досовской игры Sherlock, которая в свою очередь была написана по мотивам загадки Эйнштейна. Эйнштейн утверждал что только 2% людей обладают интеллектом достаточным длEinstein или  решения. Цель игры - узнать расположение всех фишек, пользуясь подсказками и логикой.

Загадка Эйнштейна, на мой взгляд, гораздо известнее чем игра Einstein или Sherlock, но я все же напомню условие (условие сознательно приведено на английском, по скольку перевод содержит неточности. Более подробно - [здесь](https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%B0%D0%B4%D0%BA%D0%B0_%D0%AD%D0%B9%D0%BD%D1%88%D1%82%D0%B5%D0%B9%D0%BD%D0%B0)

> #### Загадка Эйнштейна
> 1. There are five houses.
> 1. The Englishman lives in the red house.
> 1. The Spaniard owns the dog.
> 1. Coffee is drunk in the green house.
> 1. The Ukrainian drinks tea.
> 1. The green house is immediately to the right of the ivory house.
> 1. The Old Gold smoker owns snails.
> 1. Kools are smoked in the yellow house.
> 1. Milk is drunk in the middle house.
> 1. The Norwegian lives in the first house.
> 1. The man who smokes Chesterfields lives in the house next to the man with the fox.
> 1. Kools are smoked in the house next to the house where the horse is kept.
> 1. The Lucky Strike smoker drinks orange juice.
> 1. The Japanese smokes Parliaments.
> 1. The Norwegian lives next to the blue house.
> 
> Now, who drinks water? Who owns the zebra?
> In the interest of clarity, it must be added that each of the five houses is painted a different color, and their inhabitants are of different national extractions, own different pets, drink different beverages and smoke different brands of American cigarets. One other thing: in statement 6, right means your right.

В разделе "правила игры" можно ознакомится с правилами (логично :smiley:), он полностью продублирован с оригинала. Если проводить аналогию с загадкой, то список утверждений и есть подсказки в правой части игрового поля, только оформленные графически. В настройки игры внесены некоторые изменения связанные с требованиями ТЗ.

![react-game](public/images/react-game.gif)


## Технологии используемые в разработке:
* использована библиотека React
* для стилизации использован препроцессор SASS
* последнее состояние игры и всех ее настроек сохраняется на клиенте в localStorage
* в разработке архитектуры приложения опирались на паттерн проектирования MVC 
