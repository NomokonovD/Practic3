function newWindow2() {
    window.location.href = '2.html';
}

// Получаем форму и кнопку отправки
const form1 = document.querySelector('form');
const submitBtn1 = form1.querySelector('input[type="submit"]');

// Обработчик события на кнопку отправки
submitBtn1.addEventListener('click', function(e) {
  e.preventDefault(); // Отменяем стандартное поведение кнопки

  // Получаем все выбранные радиокнопки
  const answers = form1.querySelectorAll('input[type="radio"]:checked');

  let correctAnswers = 0;

  // Сравниваем ответы пользователя с правильными ответами
  if (answers[0].value === 'c') {
    correctAnswers++;
  }
  if (answers[1].value === 'b') {
    correctAnswers++;
  }
  if (answers[2].value === 'a') {
    correctAnswers++;
  }
  if (answers[3].value === 'c') {
    correctAnswers++;
  }
  if (answers[4].value === 'b') {
    correctAnswers++;
  }

  // Выводим результат пользователю
  alert(`Вы ответили правильно на ${correctAnswers} из 5 вопросов`);
});