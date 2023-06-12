function newWindow3() {
    window.location.href = '3.html';
}

// Получаем форму и кнопку отправки
const form2 = document.querySelector('form');
const submitBtn2 = form2.querySelector('input[type="submit"]');

// Обработчик события на кнопку отправки
submitBtn2.addEventListener('click', function(e) {
  e.preventDefault(); // Отменяем стандартное поведение кнопки

  // Получаем все выбранные радиокнопки
  const answers = form2.querySelectorAll('input[type="radio"]:checked');

  let correctAnswers = 0;

  // Сравниваем ответы пользователя с правильными ответами
  if (answers[0].value === 'a') {
    correctAnswers++;
  }
  if (answers[1].value === 'b') {
    correctAnswers++;
  }
  if (answers[2].value === 'c') {
    correctAnswers++;
  }
  if (answers[3].value === 'a') {
    correctAnswers++;
  }
  if (answers[4].value === 'c') {
    correctAnswers++;
  }

  // Выводим результат пользователю
  alert(`Вы ответили правильно на ${correctAnswers} из 5 вопросов`);
});