
// Функция рисования доски:
function drawChess() {
  let mainBlock = document.querySelector('.main-block'); // главный блок
  let block; // сюда будем класть созданные эл-ты
  let flag = true;
  let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  // Переворачиваем массив:
  let rra = arr.reverse();
  // console.log(rra);

  // Массив с отступами фигур:
  let figure = {
    0: [, '-263px -19px', '-484px -22px', '-372px -17px', '-150px -16px', '-150px -16px', '-372px -17px', '-484px -22px', '-263px -19px'],
    1: [, '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px'],
    6: [, '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px'],
    7: [, '-263px -116px', '-484px -116px', '-372px -116px', '-150px -116px', '-150px -116px', '-372px -116px', '-484px -116px', '-263px -116px'],
  };
  // Верхняя строка с цифрами:
  for (let k = 0; k < 10; k++) {
    block = document.createElement('div');
    if (k > 0 && k < 9) {
      block.append(k);
    }
    block.className = 'block white';
    mainBlock.appendChild(block);
  }

  // Циклы для создания доски:
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 10; j++) {
      block = document.createElement('div');
      if (j == 0) flag = !flag; // в начале строки меняется цвет

      // Заполняем ячейки буквами:
      if (j == 0 || j == 9) {
        block.className = 'block white2';
        block.append(rra[i]);
      }

      // Назначаем цвет за исключением ячеек с буквами:
      if (flag && j > 0 && j < 9) block.className = 'block black';
      else block.className = 'block white';

      // Сравниваем позицию клетки с позицией фигуры в массиве. Если они совпадают устанавливаем фигуру фоном для блока:
      if (figure[i] !== undefined && figure[i][j] !== undefined) {
        block.style.backgroundImage = 'url(сhess.png)';
        block.style.backgroundPosition = figure[i][j];
      }

      // Добавляем созданные блоки на главный блок:
      mainBlock.appendChild(block);
      flag = !flag; // чтобы чередовать цвета
    }
  }
  // Нижняя строка с цифрами:
  for (let k = 0; k < 10; k++) {
    block = document.createElement('div');
    if (k > 0 && k < 9) {
      block.append(k);
    }
    block.className = 'block white';
    mainBlock.appendChild(block);
  }
}

drawChess();