function newWindow4() {
    window.location.href = '4.html';
}

// Получаем форму и кнопку отправки
const form3 = document.querySelector('form');
const submitBtn3 = form3.querySelector('input[type="submit"]');

// Обработчик события на кнопку отправки
submitBtn3.addEventListener('click', function(e) {
  e.preventDefault(); // Отменяем стандартное поведение кнопки

  // Получаем все выбранные радиокнопки
  const answers = form3.querySelectorAll('input[type="radio"]:checked');

  let correctAnswers = 0;

  // Сравниваем ответы пользователя с правильными ответами
  if (answers[0].value === 'c') {
    correctAnswers++;
  }
  if (answers[1].value === 'a') {
    correctAnswers++;
  }
  if (answers[2].value === 'b') {
    correctAnswers++;
  }
  if (answers[3].value === 'c') {
    correctAnswers++;
  }
  if (answers[4].value === 'c') {
    correctAnswers++;
  }

  // Выводим результат пользователю
  alert(`Вы ответили правильно на ${correctAnswers} из 5 вопросов`);
});